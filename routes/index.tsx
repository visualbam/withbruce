import { define } from "../utils.ts";
import { EXPERIENCES, PROJECTS, SERVICES } from "../data/staticData.ts";
import { TagList } from "../components/TagList.tsx";

export default define.page(function Home() {
  const featuredProjects = PROJECTS.filter((p) => p.isFeatured);

  return (
    <>
      <title>
        Bruce McElroy: Professional UI/UX Designer and Software Developer in
        Pittsburgh, PA
      </title>
      <meta
        name="description"
        content="Get to know Bruce McElroy, a professional UI/UX Designer and Software Developer based in Pittsburgh, PA, specializing in crafting intuitive user interfaces along with robust software solutions."
      />
      <meta
        property="og:title"
        content="Bruce McElroy: Professional UI/UX Designer and Software Developer"
      />
      <meta
        property="og:description"
        content="Get to know more about Bruce McElroy's work."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.withbruce.com" />

      {/* Hero */}
      <section class="hero full-width">
        <article>
          <h1>
            Bruce McElroy{" "}
            {/* deno-lint-ignore no-explicit-any */}
            <iconify-icon {...({} as any)} icon="ph:lightning-duotone" />
          </h1>
          <h2>UI/UX Designer & Software Developer Based in Pittsburgh</h2>
          <p>
            Leveraging a decade of industry experience, I integrate
            sophisticated design principles with robust software development to
            build impactful and efficient digital platforms.
          </p>
          <a href="/contact" class="button button--primary">
            Send me a message!
          </a>
          <figure>
            <img
              src="/bruce-header.svg"
              alt="Promotional hero vector image of Bruce McElroy with various development frameworks."
            />
            <img src="/vue-icon.svg" alt="Vue.js Icon" />
            <img src="/js-icon.svg" alt="Javascript Icon" />
            <img src="/net-icon.svg" alt=".NET Icon" />
            <img src="/angular-icon.svg" alt="Angular Icon" />
            <img src="/blazor-icon.svg" alt="Blazor Icon" />
            <img src="/tailwind-icon.svg" alt="Tailwind CSS Icon" />
            <figcaption>
              Collection of images depicting different development frameworks.
            </figcaption>
          </figure>
        </article>
      </section>

      {/* Services */}
      <section class="services full-width">
        <header>
          <h2>
            <span>How I can help you</span>
            Discover versatile digital solutions
          </h2>
          <p>
            I fuse design, development, and strategy to craft unique digital
            experiences. Working together, let's innovate and create an online
            presence that truly reflects your vision.
          </p>
        </header>
        <article>
          {SERVICES.map((service) => (
            <figure key={service.name}>
              <img
                src={service.imagePath}
                alt={service.altText}
                loading="lazy"
              />
              <figcaption>{service.name}</figcaption>
            </figure>
          ))}
        </article>
      </section>

      {/* Featured Projects */}
      <section class="featured-projects full-width">
        <div class="featured-projects__main">
          <header>
            <h2>
              <span>My Portfolio</span>
              Featured Projects
            </h2>
            <p>
              As an experienced UI/UX Engineer, I have embraced every project as
              an opportunity to transform an idea into a visually compelling and
              user-friendly digital experience.
            </p>
          </header>
          {featuredProjects.map((project) => (
            <article key={project.id}>
              <a href={`/projects/${project.slug}`} class="project-card-link">
                <figure>
                  <div>
                    <img
                      src={project.cover}
                      alt={`${project.title} project image`}
                    />
                    <button type="button">View Project</button>
                  </div>
                  <figcaption>
                    <h3>{project.title}</h3>
                  </figcaption>
                </figure>
              </a>
              <p>{project.description}</p>
              <TagList tags={project.tags} />
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section class="experience full-width">
        <header>
          <h2>
            <span>Work Experience</span>
            Companies I have worked with
          </h2>
        </header>
        <article>
          {EXPERIENCES.map((exp) => (
            <figure key={exp.id}>
              <img src={exp.logo} alt={`${exp.company} Logo`} loading="lazy" />
              <hr />
              <figcaption>
                <ul>
                  <li>{exp.title}</li>
                  <li>
                    {exp.company} – {exp.duration}
                  </li>
                </ul>
              </figcaption>
            </figure>
          ))}
        </article>
      </section>
    </>
  );
});
