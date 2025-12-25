window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-up").forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.style.opacity = 1;
    }
  });
});
