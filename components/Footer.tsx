import { Logo } from "./Logo.tsx";

export function Footer() {
  return (
    <footer>
      <a href="/">
        <Logo />
      </a>
      <hr />
      <small>
        © {new Date().getFullYear()}{" "}
        <a href="/" class="hover:underline">WithBruce™</a>. All Rights Reserved.
      </small>
    </footer>
  );
}
