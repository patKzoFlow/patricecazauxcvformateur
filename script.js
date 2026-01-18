(() => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  const DATA = {
    cinema: {
      title: "Cinéma / séries",
      html: `
        <p><strong>Paul Thomas Anderson</strong>, Wes Anderson, Scorsese (pas Anderson), Ridley Scott, les frères Coen, Lynch… il y en a trop.</p>
        <p class="note">Environ <strong>70 jours</strong> de visionnage cumulés sur une vie. Oui, le calcul est laissé au lecteur.</p>
      `
    },
    musique: {
      title: "Musique",
      html: `
        <p>Ça fait mal de le dire, mais <strong>les anglais</strong> sont au-dessus de la mêlée.</p>
        <p>Dans le <strong>1%</strong> qui a le plus écouté <strong>Radiohead</strong> et <strong>The Strokes</strong> en 2025, <strong>800</strong> artistes écoutés et <strong>8</strong> concerts.</p>
        <p class="note">Source : Deezer (et moi).</p>
      `
    },
    padel: {
      title: "Padel",
      html: `
        <p><strong>Niveau 8</strong> avant de rentrer sur la piste. Et puis les premières briques fusent sur la vitre.</p>
        <p class="note">La bonne nouvelle : une marge de progression… gigantesque.</p>
      `
    },
    run: {
      title: "Run",
      html: `
        <p>Fainéant avant, content après. Environ <strong>20 km</strong> par semaine.</p>
        <p class="note">Les genoux commencent à grincer, mais c’est vital pour l’esprit.</p>
      `
    },
    jeux: {
      title: "Jeux de société",
      html: `
        <p>Pour le partage, pour se marrer… et <strong>un peu</strong> pour gagner.</p>
        <p class="note">Jamais mauvais joueur, mais très (trop, dirait ma femme) engagé.</p>
      `
    },
    section: {
      title: "Section Paloise",
      html: `
        <p>En souffrance depuis <strong>35 ans</strong>. Pas de titre… mais toujours là.</p>
        <p class="note">2026 est un bon cru : chauvinisme assumé et mauvaise foi pratiquée avec fierté.</p>
      `
    },
    pere: {
      title: "Père de deux enfants",
      html: `
        <p>Apprentissage intensif <strong>24/7</strong>. Aucun scénario pédagogique ne prépare à ça.</p>
        <p class="note">Intensité de bonheur, fierté, patience, adaptation, agacement… et beaucoup d’amour, toujours.</p>
      `
    }
  };

  function openModal(key) {
    const item = DATA[key];
    if (!item) return;

    modalTitle.textContent = item.title;
    modalContent.innerHTML = item.html;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    // focus close button (simple)
    const closeBtn = modal.querySelector(".modal__close");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  // Click handlers
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".interest-btn");
    if (btn) {
      const key = btn.getAttribute("data-modal");
      openModal(key);
      return;
    }

    if (e.target && e.target.getAttribute && e.target.getAttribute("data-close") === "1") {
      closeModal();
      return;
    }
  });

  // ESC to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
