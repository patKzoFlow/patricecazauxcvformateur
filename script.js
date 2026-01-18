(() => {
  const modal = document.getElementById("interestModal");
  const titleEl = document.getElementById("modalTitle");
  const contentEl = document.getElementById("modalContent");

  const CONTENT = {
    cinema: {
      title: "🎬 Cinéma / séries",
      html: `
        <p><strong>Références</strong> : Paul Thomas Anderson, Wes Anderson, Scorsese (pas Anderson), Ridley Scott, les frères Coen, Lynch…</p>
        <ul>
          <li>Environ <strong>70 jours</strong> de visionnage cumulés sur une vie. Le calcul est laissé au lecteur.</li>
          <li>Storytelling et exemples concrets : quand une scène explique mieux qu’un slide… autant en profiter.</li>
        </ul>
      `
    },
    musique: {
      title: "🎧 Musique",
      html: `
        <p>Oui, c’est pénible à admettre, mais les Anglais sont au-dessus de la mêlée.</p>
        <ul>
          <li>Top 1% des auditeurs <strong>Radiohead</strong> et <strong>The Strokes</strong> (2025).</li>
          <li><strong>800 artistes</strong> écoutés, <strong>8 concerts</strong> (source : Deezer + moi).</li>
          <li>Tempo, énergie, émotion : parfait pour comprendre l’impact du rythme… en collectif.</li>
        </ul>
      `
    },
    padel: {
      title: "🎾 Padel",
      html: `
        <p><strong>Niveau 8</strong> avant de rentrer sur la piste. Et puis les premières briques fusent sur la vitre.</p>
        <ul>
          <li>La bonne nouvelle : une <strong>marge de progression</strong> absolument magnifique.</li>
          <li>Lecture de jeu, ajustement, collectif : sur le papier, c’est propre. Sur le terrain… c’est vivant.</li>
        </ul>
      `
    },
    run: {
      title: "🏃 Run",
      html: `
        <p>Feignant avant. Content après. Classique.</p>
        <ul>
          <li>Environ <strong>20 km / semaine</strong>.</li>
          <li>Les genoux commencent à grincer, mais c’est vital pour l’esprit (et la patience).</li>
        </ul>
      `
    },
    jeux: {
      title: "🎲 Jeux de société",
      html: `
        <p>Pour le partage, pour se marrer… et un peu pour gagner.</p>
        <ul>
          <li>Jamais mauvais joueur. Simplement <strong>très</strong> engagé (trop, dirait ma femme).</li>
          <li>Stratégie, coopération, lecture des signaux : étonnamment transférable en animation.</li>
        </ul>
      `
    },
    paloise: {
      title: "🏉 Section Paloise",
      html: `
        <p>En souffrance depuis 35 ans. Pas de titre, mais toujours là.</p>
        <ul>
          <li><strong>2026</strong> s’annonce comme un bon cru : chauvinisme assumé.</li>
          <li>Mauvaise foi : pratiquée avec rigueur et fierté. (Ça s’appelle une compétence.)</li>
        </ul>
      `
    },
    pere: {
      title: "👨‍👧‍👦 Père de deux enfants",
      html: `
        <p>Apprentissage intensif <strong>H24</strong>, <strong>7j/7</strong>. Aucun scénario pédagogique ne prépare à ça.</p>
        <ul>
          <li>Intensité : bonheur, fierté, patience, adaptation…</li>
          <li>… peur, agacement, et beaucoup d’amour (toujours).</li>
        </ul>
      `
    }
  };

  function openModal(key) {
    const data = CONTENT[key];
    if (!data) return;

    titleEl.textContent = data.title;
    contentEl.innerHTML = data.html;

    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Bind buttons
  document.querySelectorAll(".interest-btn").forEach(btn => {
    btn.addEventListener("click", () => openModal(btn.dataset.modal));
  });

  // Close triggers (backdrop + button)
  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.dataset && target.dataset.close) closeModal();
  });

  // ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });
})();
