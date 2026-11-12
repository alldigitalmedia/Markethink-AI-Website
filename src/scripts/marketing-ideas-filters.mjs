export function normalizeIdeaText(value = "") {
  return String(value).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function matchesIdea(idea, { query = "", tier = "all", category = "all" } = {}) {
  const text = normalizeIdeaText(idea.searchText ?? Object.values(idea).join(" "));
  const terms = normalizeIdeaText(query).trim().split(/\s+/).filter(Boolean);
  return (tier === "all" || idea.tier === tier)
    && (category === "all" || idea.category === category)
    && terms.every((term) => text.includes(term));
}

export function initMarketingIdeaFilters(root) {
  if (!root || root.dataset.filtersReady === "true") return;
  const controls = root.querySelector("[data-idea-controls]");
  const query = root.querySelector("#idea-query");
  const tier = root.querySelector("#idea-tier");
  const category = root.querySelector("#idea-category");
  const reset = root.querySelector("[data-idea-reset]");
  const status = root.querySelector("[data-idea-status]");
  const empty = root.querySelector("[data-idea-empty]");
  const cards = [...root.querySelectorAll("[data-idea-card]")];
  if (!controls || !query || !tier || !category || !reset || !status || !empty) return;

  const update = () => {
    let visible = 0;
    const filters = { query: query.value, tier: tier.value, category: category.value };
    cards.forEach((card) => {
      const show = matchesIdea(card.dataset, filters);
      card.hidden = !show;
      if (show) visible += 1;
    });
    status.textContent = `Showing ${visible} of ${cards.length} ideas`;
    empty.hidden = visible !== 0;
  };
  query.addEventListener("input", update);
  tier.addEventListener("change", update);
  category.addEventListener("change", update);
  reset.addEventListener("click", () => {
    query.value = "";
    tier.value = "all";
    category.value = "all";
    update();
    query.focus();
  });
  root.dataset.filtersReady = "true";
  controls.hidden = false;
  update();
}
