import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const componentPath = resolve(__dirname, '../src/components/HowItWorks.astro');
const source = readFileSync(componentPath, 'utf8');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

assert(
  source.includes('gsap/ScrollTrigger'),
  'HowItWorks must use GSAP ScrollTrigger so card changes stay synced with Lenis smooth scrolling.'
);

assert(
  /ScrollTrigger\.create\s*\(/.test(source),
  'HowItWorks must create a ScrollTrigger tied to the pinned section instead of relying only on native window scroll events.'
);

assert(
  /onUpdate\s*:\s*\(?\s*self/.test(source),
  'HowItWorks ScrollTrigger must update the active card from ScrollTrigger progress.'
);

assert(
  !/window\.addEventListener\(\s*["']scroll["']\s*,\s*requestUpdate/.test(source),
  'HowItWorks should not rely on a native scroll listener for the primary card transition; Lenis may not dispatch native scroll consistently.'
);

assert(
  /onRefresh\s*:\s*\(?\s*self/.test(source),
  'HowItWorks must sync the active card on ScrollTrigger refresh so a refresh or anchor jump does not reset the section to card 1.'
);

assert(
  !/onEnter\s*:\s*\(\)\s*=>\s*showPanel\(0\)/.test(source),
  'HowItWorks must not force card 1 from onEnter; ScrollTrigger progress should be the single source of truth.'
);

console.log('HowItWorks scroll wiring looks robust.');
