document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".section-anim");

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("is-active");
      });
    },
    { threshold: 0.3 }
  );

  els.forEach(el => io.observe(el));
});
