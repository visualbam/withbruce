import { useSignal } from "@preact/signals";

export default function ContactForm() {
  const submitted = useSignal(false);
  const submitting = useSignal(false);
  const error = useSignal("");
  const name = useSignal("");
  const email = useSignal("");
  const message = useSignal("");

  async function handleSubmit(e: Event) {
    e.preventDefault();
    submitting.value = true;
    error.value = "";

    const res = await fetch("https://formspree.io/f/mdaynenq", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
    });

    if (res.ok) {
      submitted.value = true;
    } else {
      error.value = "Something went wrong. Please try again.";
    }
    submitting.value = false;
  }

  if (submitted.value) {
    return (
      <div role="alert" class="contact-success">
        <div class="contact-success__icon" aria-hidden="true">
          {/* deno-lint-ignore no-explicit-any */}
          <iconify-icon {...({} as any)} icon="ph:check-circle-duotone" width="52" height="52" />
        </div>
        <div class="contact-success__content">
          <p class="contact-success__eyebrow">Message sent</p>
          <h2 class="contact-success__heading">Talk soon, {name.value}.</h2>
          <p class="contact-success__body">
            Your message is in my inbox. I'll review it and get back to you within a couple of business days.
          </p>
        </div>
        <a href="/" class="button button--secondary">Back to Home</a>
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
            autocomplete="name"
            placeholder="Your full name"
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
            autocomplete="email"
            placeholder="your@email.com"
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
            placeholder="Describe your project, goals, or questions..."
            value={message.value}
            onInput={(e) =>
              (message.value = (e.target as HTMLTextAreaElement).value)}
          />
        </div>
        {error.value && <p role="alert" class="form-error">{error.value}</p>}
        <button class="button button--primary" type="submit" disabled={submitting.value}>
          {submitting.value
            ? <><span class="spinner" aria-hidden="true" />Sending...</>
            : "Send Message"}
        </button>
      </form>
    </>
  );
}
