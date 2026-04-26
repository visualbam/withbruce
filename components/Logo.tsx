// Uses two img tags toggled by html.dark / html.light CSS classes
// to avoid flash of wrong logo without requiring JavaScript.
export function Logo() {
  return (
    <>
      <img
        class="logo logo--dark"
        src="/with-bruce-logo-dark.svg"
        alt="With Bruce"
        width={205}
        height={40}
      />
      <img
        class="logo logo--light"
        src="/with-bruce-logo-light.svg"
        alt=""
        width={205}
        height={40}
      />
    </>
  );
}
