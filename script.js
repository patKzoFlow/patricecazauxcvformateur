document.addEventListener("DOMContentLoaded", () => {
  const buttons = Array.from(document.querySelectorAll(".passion-btn"));
  const panels = Array.from(document.querySelectorAll(".passion-panel"));

  // Sécurité : tout masquer au chargement
  panels.forEach(p => (p.hidden = true));
  buttons.forEach(b => {
    b.classList.remove("is-active");
    b.setAttribute("aria-selected", "false");
  });

  const openPanel = (btn) => {
    const id = btn.getAttribute("data-target");
    if (!id) return;

    const panel = document.getElementById(id);
    if (!panel) return;

    // Ferme tout
    panels.forEach(p => (p.hidden = true));
    buttons.forEach(b => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });

    // Ouvre cible
    panel.hidden = false;
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");

    // Focus doux pour accessibilité (et feedback utilisateur)
    panel.focus({ preventScroll: false });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => openPanel(btn));
  });
});
