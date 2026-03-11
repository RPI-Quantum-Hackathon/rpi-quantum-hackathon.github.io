// Mobile navigation toggle
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  // Close menu when clicking a link (on small screens)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
      }
    });
  });
}

// FAQ accordion behavior
document.querySelectorAll(".faq-item").forEach((item) => {
  item.setAttribute("aria-expanded", "false");
  item.addEventListener("click", () => {
    const isExpanded = item.getAttribute("aria-expanded") === "true";
    item.setAttribute("aria-expanded", String(!isExpanded));
  });
});

