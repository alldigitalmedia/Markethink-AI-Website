// Newsletter capture uses the site's existing Netlify Forms storage.
// It never sends email or adds a contact to an outbound campaign.
export function validateSignup(fields) {
  const errors = {};
  const name = String(fields.get('first_name') || '').trim();
  const email = String(fields.get('email') || '').trim();
  if (!name || name.length > 80) errors.first_name = 'Enter your first name.';
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';
  if (fields.get('newsletter_consent') !== 'yes') errors.newsletter_consent = 'Please confirm you would like the newsletter.';
  return errors;
}

export function encodeSignup(fields, path) {
  const body = new URLSearchParams();
  fields.forEach((value, key) => {
    if (typeof value === 'string') body.append(key, value.trim());
  });
  body.set('signup_path', path);
  body.set('consent_recorded_at', new Date().toISOString());
  return body.toString();
}

export function createSignupRequest({ send = globalThis.fetch, onState = () => {}, timeoutMs = 15000 } = {}) {
  let state = 'idle';
  return {
    async submit(fields, action, path) {
      if (state === 'pending' || state === 'submitted') return 'ignored';
      const errors = validateSignup(fields);
      if (Object.keys(errors).length) {
        onState('invalid', errors);
        return 'invalid';
      }
      if (fields.get('bot-field')) return 'ignored';
      state = 'pending';
      onState(state);
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), timeoutMs);
      try {
        const response = await send(action, {
          method: 'POST',
          credentials: 'same-origin',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encodeSignup(fields, path),
          signal: controller.signal,
        });
        // An arbitrary 200 or an echoed homepage is not an acknowledgement.
        // This confirms the configured response, not storage or list enrollment.
        if (!response.ok || !(await response.text()).includes('data-newsletter-confirmation')) throw new Error('Unconfirmed response');
        state = 'submitted';
        onState(state);
        return state;
      } catch {
        state = 'error';
        onState(state);
        return state;
      } finally {
        clearTimeout(timer);
      }
    },
  };
}

export function initNewsletterForms(root) {
  root.querySelectorAll('[data-newsletter-form]').forEach((form) => {
    if (form.dataset.newsletterReady === 'true') return;
    const button = form.querySelector('button[type="submit"]');
    const label = form.querySelector('[data-newsletter-button-label]');
    const status = form.querySelector('[data-newsletter-status]');
    if (!button || !label || !status) return;
    const originalLabel = label.textContent;
    const names = ['first_name', 'email', 'newsletter_consent'];
    const request = createSignupRequest({ onState(state, errors = {}) {
      for (const name of names) {
        const field = form.elements.namedItem(name);
        const error = form.querySelector(`[data-error-for="${name}"]`);
        field?.setAttribute('aria-invalid', errors[name] ? 'true' : 'false');
        if (error) {
          error.textContent = errors[name] || '';
          error.hidden = !errors[name];
        }
      }
      form.setAttribute('aria-busy', state === 'pending' ? 'true' : 'false');
      button.disabled = state === 'pending' || state === 'submitted';
      label.textContent = state === 'pending' ? 'Submitting...' : state === 'submitted' ? 'Request sent' : originalLabel;
      status.textContent = state === 'pending' ? 'Submitting your newsletter request...' : state === 'submitted' ? 'Thanks. Your newsletter request has been submitted.' : state === 'error' ? 'We could not confirm your request. Your details are still here. Please try again later.' : '';
      if (state === 'invalid') form.elements.namedItem(Object.keys(errors)[0])?.focus();
    }});
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Keep newsletter data on this site's established form-capture route.
      if (new URL(form.action).origin !== window.location.origin) return;
      void request.submit(new FormData(form), form.action, window.location.pathname);
    });
    form.addEventListener('input', (event) => {
      const field = event.target;
      if (!names.includes(field.name)) return;
      field.removeAttribute('aria-invalid');
      const error = form.querySelector(`[data-error-for="${field.name}"]`);
      if (error) { error.hidden = true; error.textContent = ''; }
    });
    // Without JS, native required/type validation and POST remain available.
    form.noValidate = true;
    form.dataset.newsletterReady = 'true';
  });
}
