import { useEffect } from "preact/hooks";
import { signal } from "@preact/signals";

const isDark = signal(false);
const scrollProgress = signal(0);

export default function Navigation() {
  useEffect(() => {
    // Restore theme from localStorage (anti-FOUC companion)
    const stored = localStorage.getItem("theme");
    const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    isDark.value = stored === "dark" || (!stored && prefersDark);
    applyTheme(isDark.value);

    // Scroll progress bar
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const total =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          scrollProgress.value = total > 0 ? (scrolled / total) * 100 : 0;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function applyTheme(dark: boolean) {
    const html = document.documentElement;
    html.classList.toggle("dark", dark);
    html.classList.toggle("light", !dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  function toggle() {
    isDark.value = !isDark.value;
    applyTheme(isDark.value);
  }

  return (
    <nav class="main-navigation">
      <div>
        <a
          href="https://www.linkedin.com/in/brucemcelroy/"
          aria-label="View my work history on LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* deno-lint-ignore no-explicit-any */}
          <iconify-icon
            {...({} as any)}
            icon="ion:logo-linkedin"
            width="30"
            height="30"
          />
        </a>
        <div>
          <a href="/">
            <img
              class="logo logo--dark nav-logo"
              src="/with-bruce-logo-dark.svg"
              alt="With Bruce Logo"
              width={205}
              height={40}
            />
            <img
              class="logo logo--light nav-logo"
              src="/with-bruce-logo-light.svg"
              alt="With Bruce Logo"
              width={205}
              height={40}
            />
          </a>
        </div>
        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle between dark and light mode"
        >
          {/* deno-lint-ignore no-explicit-any */}
          <iconify-icon
            {...({} as any)}
            icon={isDark.value ? "ph:moon-stars-duotone" : "ph:sun-duotone"}
            width="30"
            height="30"
          />
        </button>
      </div>
      <div class="progress-bar">
        <div
          class="progress"
          style={{ width: `${Math.min(scrollProgress.value, 100)}%` }}
        />
      </div>
    </nav>
  );
}
