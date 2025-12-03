// ---- AOS SCROLL ANIMATION ----
AOS.init({
  duration: 1000,
  once: true
});

// ---- HERO FADE-IN ----
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero .container");
  if (hero) {   // FIX: only run this on home page
    hero.style.opacity = 0;
    hero.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
      hero.style.opacity = 1;
    }, 300);
  }
});