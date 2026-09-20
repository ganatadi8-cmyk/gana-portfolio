(() => {
  const portrait = document.getElementById('portrait');
  if (!portrait) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let scheduled = false;
  const paint = () => {
    scheduled = false;
    if (reducedMotion.matches) {
      portrait.style.transform = 'none';
      return;
    }
    const range = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const progress = Math.max(0, Math.min(1, scrollY / range));
    portrait.style.transform = `translate3d(0, ${progress * 65}px, 0) scale(${1.025 + progress * 0.035})`;
  };
  const schedule = () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(paint); }
  };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  reducedMotion.addEventListener('change', schedule);
  paint();
})();
