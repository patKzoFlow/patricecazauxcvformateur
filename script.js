document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".passion-btn");
  const panels = document.querySelectorAll(".passion-panel");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");

      panels.forEach(p => p.hidden = true);
      buttons.forEach(b => b.classList.remove("is-active"));

      const panel = document.querySelector(target);
      if (panel) {
        panel.hidden = false;
        btn.classList.add("is-active");
      }
    });
  });
});
