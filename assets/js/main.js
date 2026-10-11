(() => {
  const root = document.documentElement;

  // Theme button: switches between light and dark and remembers the choice.
  const btn = document.querySelector(".theme-btn");
  const isDark = () =>
    root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  btn?.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Project videos load and play only while visible. With reduced motion, show controls instead.
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const vids = document.querySelectorAll("video.autoplay");
  if (reduce || !("IntersectionObserver" in window)) {
    vids.forEach((v) => { v.controls = true; v.preload = "metadata"; });
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target: v, isIntersecting }) => {
        if (isIntersecting) v.play().catch(() => { v.controls = true; });
        else v.pause();
      });
    }, { rootMargin: "120px 0px", threshold: 0.15 });
    vids.forEach((v) => io.observe(v));
  }

  // Highlight the current section in the nav.
  const links = [...document.querySelectorAll(".nav nav a")];
  const secs = links.map((a) => document.querySelector(a.hash)).filter(Boolean);
  const mark = () => {
    let cur = null;
    for (const s of secs) if (s.getBoundingClientRect().top < innerHeight * 0.4) cur = s;
    links.forEach((a) => a.setAttribute("aria-current", String(cur && a.hash === "#" + cur.id)));
  };
  addEventListener("scroll", mark, { passive: true });
  mark();
})();
