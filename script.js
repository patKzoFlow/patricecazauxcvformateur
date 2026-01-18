document.addEventListener("DOMContentLoaded", () => {
  const tabsRoot = document.querySelector("[data-tabs]");
  if (!tabsRoot) return;

  const tabs = Array.from(tabsRoot.querySelectorAll(".tab"));
  const panels = Array.from(tabsRoot.querySelectorAll(".panel"));

  const activate = (tab) => {
    const targetId = tab.dataset.target;
    const target = document.querySelector(targetId);
    if (!target) return;

    tabs.forEach(t => t.classList.remove("is-active"));
    panels.forEach(p => p.setAttribute("hidden", ""));

    tab.classList.add("is-active");
    target.removeAttribute("hidden");
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => activate(tab));
  });

  activate(tabs[0]);
});
