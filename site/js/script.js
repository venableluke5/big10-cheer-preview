const menuToggle = document.querySelector("[data-menu-toggle]");
const primaryNav = document.querySelector("[data-primary-nav]");
const header = document.querySelector("[data-header]");
const pageRegions = [
  document.querySelector(".skip-link"),
  document.querySelector("main"),
  document.querySelector(".site-footer"),
].filter(Boolean);
const pageRegionStates = new Map();

function setPageIsolation(isIsolated) {
  pageRegions.forEach((region) => {
    if (isIsolated) {
      if (!pageRegionStates.has(region)) {
        pageRegionStates.set(region, {
          ariaHidden: region.getAttribute("aria-hidden"),
          inert: region.inert,
        });
      }

      region.inert = true;
      region.setAttribute("aria-hidden", "true");
      return;
    }

    const priorState = pageRegionStates.get(region);
    if (!priorState) return;

    region.inert = priorState.inert;
    if (priorState.ariaHidden === null) {
      region.removeAttribute("aria-hidden");
    } else {
      region.setAttribute("aria-hidden", priorState.ariaHidden);
    }
    pageRegionStates.delete(region);
  });
}

function getMenuFocusables() {
  if (!header) return [];

  return Array.from(header.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(
    (element) => element.getClientRects().length > 0 && element.getAttribute("aria-hidden") !== "true",
  );
}

function setMenuState(isOpen, { moveFocus = false, restoreFocus = false } = {}) {
  if (!menuToggle || !primaryNav) return;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  primaryNav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  setPageIsolation(isOpen);

  if (isOpen && moveFocus) {
    window.requestAnimationFrame(() => primaryNav.querySelector("a")?.focus());
  } else if (!isOpen && restoreFocus) {
    window.requestAnimationFrame(() => menuToggle.focus());
  }
}

function closeMenu(restoreFocus = false) {
  setMenuState(false, { restoreFocus });
}

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const nextOpenState = menuToggle.getAttribute("aria-expanded") !== "true";
    setMenuState(nextOpenState, { moveFocus: nextOpenState, restoreFocus: !nextOpenState });
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu(true);
  });

  document.addEventListener("keydown", (event) => {
    const menuIsOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (!menuIsOpen) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu(true);
      return;
    }

    if (event.key === "Tab") {
      const focusables = getMenuFocusables();
      const firstFocusable = focusables[0];
      const lastFocusable = focusables.at(-1);
      if (!firstFocusable || !lastFocusable) return;

      if (event.shiftKey && (document.activeElement === firstFocusable || !header?.contains(document.activeElement))) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && (document.activeElement === lastFocusable || !header?.contains(document.activeElement))) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 960 && menuToggle.getAttribute("aria-expanded") === "true") closeMenu();
  });
}

if (header) {
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 16);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const revealTargets = document.querySelectorAll("[data-reveal]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion && "IntersectionObserver" in window) {
  document.documentElement.classList.add("reveal-ready");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));

  window.setTimeout(() => {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  }, 1600);
}
