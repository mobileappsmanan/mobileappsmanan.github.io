(() => {
  const root = document.documentElement;
  const gallery = document.querySelector(".gallery-pane");
  const scenes = [...document.querySelectorAll(".app-scene")];
  const label = document.getElementById("active-label");
  const headline = document.getElementById("active-headline");
  const description = document.getElementById("active-description");
  const meta = document.getElementById("active-meta");
  const count = document.getElementById("active-count");

  const applyScene = (scene, index) => {
    if (!scene) return;

    root.style.setProperty("--right-bg", scene.dataset.background || "#2D241F");
    root.style.setProperty("--right-accent", scene.dataset.accent || "#C0757D");

    label.textContent = scene.dataset.label || "Mobile Apps by Manan";
    headline.innerHTML = `
      <span>${scene.dataset.headlineOne || ""}</span>
      <span>${scene.dataset.headlineTwo || ""}</span>
    `;
    description.textContent = scene.dataset.description || "";

    const items = (scene.dataset.meta || "").split("|").filter(Boolean);
    meta.replaceChildren(
      ...items.map((value) => {
        const span = document.createElement("span");
        span.textContent = value;
        return span;
      })
    );

    count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")}`;
  };

  if (scenes.length) {
    applyScene(scenes[0], 0);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        applyScene(visible.target, scenes.indexOf(visible.target));
      },
      {
        root: window.matchMedia("(max-width: 820px)").matches ? null : gallery,
        threshold: [0.4, 0.58, 0.74]
      }
    );

    scenes.forEach((scene) => observer.observe(scene));
  }

  document.querySelectorAll("[data-open-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      const dialog = document.getElementById(button.dataset.openDialog);
      dialog?.showModal();
    });
  });

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest("dialog")?.close();
    });
  });

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
})();
