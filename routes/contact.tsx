import { define } from "../utils.ts";
import ContactForm from "../islands/ContactForm.tsx";

export default define.page(function Contact() {
  return (
    <>
      <title>Bruce McElroy: Get in touch!</title>
      <meta
        name="description"
        content="Get in touch with Bruce McElroy for any questions, concerns or project proposals. Don't hesitate to reach out and start a conversation."
      />

      <section class="contact">
        <article>
          <ContactForm />
        </article>
      </section>
    </>
  );
});
