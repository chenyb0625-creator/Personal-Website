const header = document.querySelector(".site-header");
const revealTargets = document.querySelectorAll(
  ".section, .snapshot, .timeline__item, .project, .skills > div"
);

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

for (const element of revealTargets) {
  element.dataset.reveal = "";
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  for (const element of revealTargets) {
    observer.observe(element);
  }
} else {
  for (const element of revealTargets) {
    element.classList.add("is-visible");
  }
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
