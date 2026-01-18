/* Centres d’intérêt — panneau de détail (stable, simple, sans magie noire) */

const DATA = {
  cinema: {
    title: "🎬 Cinéma / séries",
    text:
      "Paul Thomas Anderson, Wes Anderson, Scorsese (pas Anderson), Jaoui/Bacri, Ridley Scott, les frères Coen, Tarantino, Lynch… " +
      "Pluribus, Fleabag, The Wire, Breacking Bad, The Office, The Boys..."
      "Environ 140 jours de visionnage sur une vie (je vous laisse faire le calcul)."
  },
  musique: {
    title: "🎧 Musique",
    text:
      "Ça fait mal de le dire, mais les anglais sont au-dessus de la mêlée. " +
      "Dans les 1% qui ont le plus écouté Radiohead et The Strokes en 2025, " +
      "800 artistes écoutés et 8 concerts la même année (source Deezer… et moi)."
  },
  padel: {
    title: "🎾 Padel",
    text:
      "Niveau 8 avant de rentrer sur la piste. Puis les premières briques fusent sur la vitre. " +
      "La bonne nouvelle : une énorme marge de progression."
  },
  run: {
    title: "🏃 Run",
    text:
      "Fainéant avant, content après. Autour de 20 km par semaine. " +
      "Les genoux commencent à grincer, mais ça reste vital pour l’esprit."
  },
  jeux: {
    title: "🎲 Jeux de société",
    text:
      "Pour le partage, pour se marrer… et un peu pour gagner. " +
      "Jamais mauvais joueur, mais très (trop dirait ma femme) engagé."
  },
  section: {
    title: "🏉 Section Paloise",
    text:
      "En souffrance depuis 35 ans : pas de titre, mais toujours là. " +
      "2026 est un bon cru : chauvinisme assumé et mauvaise foi pratiquée avec fierté."
  },
  pere: {
    title: "👨‍👧‍👦 Père de deux enfants",
    text:
      "Apprentissage intensif 24/7. Aucun scénario pédagogique ne prépare à ça. " +
      "Intensité de bonheur, fierté, patience, adaptation, peur, agacement… " +
      "et beaucoup d’amour. Toujours."
  }
};

const buttons = Array.from(document.querySelectorAll(".interest-btn"));
const panel = document.getElementById("interestPanel");
const titleEl = document.getElementById("interestTitle");
const bodyEl = document.getElementById("interestBody");
const closeBtn = document.getElementById("interestClose");

function clearPressed() {
  buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));
}

function openPanel(key) {
  const item = DATA[key];
  if (!item) return;

  clearPressed();
  const btn = buttons.find((b) => b.dataset.interest === key);
  if (btn) btn.setAttribute("aria-pressed", "true");

  titleEl.textContent = item.title;
  bodyEl.textContent = item.text;

  panel.classList.add("is-open");

  // Scroll doux vers le panneau (utile si on clique en bas)
  panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function closePanel() {
  panel.classList.remove("is-open");
  clearPressed();
  titleEl.textContent = "Choisissez un centre d’intérêt";
  bodyEl.textContent = "";
}

buttons.forEach((btn) => {
  btn.setAttribute("aria-pressed", "false");
  btn.addEventListener("click", () => {
    const key = btn.dataset.interest;

    // toggle : si déjà ouvert sur ce bouton -> fermer
    const isPressed = btn.getAttribute("aria-pressed") === "true";
    if (isPressed) {
      closePanel();
      return;
    }
    openPanel(key);
  });
});

closeBtn.addEventListener("click", closePanel);

// ESC pour fermer (petit luxe)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && panel.classList.contains("is-open")) {
    closePanel();
  }
});
