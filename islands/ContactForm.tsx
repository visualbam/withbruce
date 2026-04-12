import { useSignal } from "@preact/signals";

export default function ContactForm() {
  const submitted = useSignal(false);
  const name = useSignal("");
  const email = useSignal("");
  const message = useSignal("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    // Static site — no backend. Show success state.
    submitted.value = true;
  }

  if (submitted.value) {
    return (
      <div role="alert" class="contact-success">
        <span>Message received!</span>{" "}
        Thanks for reaching out, {name.value}. I'll get back to you soon.
      </div>
    );
  }

  return (
    <>
      <header>
        <h2>
          <span>Hello there</span>
          Do you have a project you would like to discuss?
        </h2>
      </header>

      <form onSubmit={handleSubmit}>
        <div class="form-field">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            required
            value={name.value}
            onInput={(e) => (name.value = (e.target as HTMLInputElement).value)}
          />
        </div>
        <div class="form-field">
          <label for="email">Email Address</label>
          <input
            id="email"
            type="email"
            required
            value={email.value}
            onInput={(e) =>
              (email.value = (e.target as HTMLInputElement).value)}
          />
        </div>
        <div class="form-field">
          <label for="message">Tell me about your project</label>
          <textarea
            id="message"
            required
            value={message.value}
            onInput={(e) =>
              (message.value = (e.target as HTMLTextAreaElement).value)}
          />
        </div>
        <button class="button button--primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
