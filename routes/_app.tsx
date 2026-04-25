import { define } from "../utils.ts";
import Navigation from "../islands/Navigation.tsx";
import { Footer } from "../components/Footer.tsx";

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Iconify web components for icons */}
        <script
          type="module"
          src="https://cdn.jsdelivr.net/npm/iconify-icon@2/dist/iconify-icon.min.js"
        />
        {/* Anti-FOUC: set theme class synchronously before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var dark = stored === 'dark' || (!stored && prefersDark);
  document.documentElement.classList.add(dark ? 'dark' : 'light');
})();
`,
          }}
        />
      </head>
      <body>
        <a href="#main-content" class="skip-link">Skip to main content</a>
        <Navigation />
        <main id="main-content" class="content-grid">
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
});
