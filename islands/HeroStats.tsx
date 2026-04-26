import { useEffect, useRef, useState } from "preact/hooks";

const STATS = [
  { value: 13, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "", label: "Companies" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
];

export default function HeroStats() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const ref = useRef<HTMLDListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      const duration = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setCounts(STATS.map((s) => Math.round(eased * s.value)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <dl class="hero-stats" aria-label="Quick stats" ref={ref}>
      {STATS.map((s, i) => (
        <div class="hero-stat" key={s.label}>
          <dt>{s.label}</dt>
          <dd>{counts[i]}{s.suffix}</dd>
        </div>
      ))}
    </dl>
  );
}
