const header = document.querySelector(".site-header");
const revealTargets = document.querySelectorAll(
  ".section, .snapshot, .card, .timeline__item, .award, .skills > div"
);

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

for (const element of revealTargets) {
  element.dataset.reveal = "";
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.14 }
);

for (const element of revealTargets) {
  observer.observe(element);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
