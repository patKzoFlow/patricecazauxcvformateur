document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-tabs]").forEach((root) => {
    const tabs = Array.from(root.querySelectorAll(".tab[data-target]"));
    const panels = Array.from(root.querySelectorAll(".panel"));

    if (!tabs.length || !panels.length) return;

    const activate = (tab) => {
      const sel = tab.getAttribute("data-target");
      const panel = sel ? root.querySelector(sel) : null;
      if (!panel) return;

      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });

      panels.forEach((p) => p.setAttribute("hidden", ""));
      panel.removeAttribute("hidden");
    };

    tabs.forEach((t) => t.addEventListener("click", () => activate(t)));

    const init = tabs.find((t) => t.classList.contains("is-active")) || tabs[0];
    activate(init);
  });
});
