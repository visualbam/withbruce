import { define } from "../utils.ts";
import { EXPERIENCES, PROJECTS, SERVICES } from "../data/staticData.ts";
import { TagList } from "../components/TagList.tsx";
import type { ComponentType } from "preact";

type IconifyIconProps = {
  "aria-hidden"?: "true" | "false";
  icon: string;
};

const IconifyIcon = "iconify-icon" as unknown as ComponentType<
  IconifyIconProps
>;

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
          <p class="hero-name">
            Bruce McElroy{" "}
            <IconifyIcon
              icon="ph:lightning-duotone"
              aria-hidden="true"
            />
          </p>
          <h1>UI/UX Designer &amp; Software Developer Based in Pittsburgh</h1>
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
            <img src="/vue-icon.svg" alt="" />
            <img src="/js-icon.svg" alt="" />
            <img src="/net-icon.svg" alt="" />
            <img src="/angular-icon.svg" alt="" />
            <img src="/blazor-icon.svg" alt="" />
            <img src="/tailwind-icon.svg" alt="" />
            <figcaption>
              Collection of images depicting different development frameworks.
            </figcaption>
          </figure>
        </article>
        <dl class="hero-stats" aria-label="Quick stats">
          <div class="hero-stat">
            <dt>Years of Experience</dt>
            <dd>13+</dd>
          </div>
          <div class="hero-stat">
            <dt>Companies</dt>
            <dd>8</dd>
          </div>
          <div class="hero-stat">
            <dt>Projects Delivered</dt>
            <dd>50+</dd>
          </div>
        </dl>
      </section>

      {/* Services */}
      <section class="services full-width">
        <header>
          <h2>
            <span>How I can help you</span>
            Design, build, and refine digital products
          </h2>
          <p>
            I fuse design, development, and strategy to craft unique digital
            experiences. Working together, let's innovate and create an online
            presence that truly reflects your vision.
          </p>
        </header>
        <ul class="services-grid">
          {SERVICES.map((service) => (
            <li
              key={service.name}
              class={`service-card${
                service.isFeatured ? " service-card--featured" : ""
              }`}
            >
              <figure>
                <div class="service-card__icon">
                  <img
                    src={service.imagePath}
                    alt={service.altText}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <span class="service-card__title">{service.name}</span>
                  <span class="service-card__description">
                    {service.description}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Projects */}
      <section class="featured-projects full-width">
        <div class="featured-projects__main breakout">
          <header>
            <h2>
              <span>My Portfolio</span>
              Selected work that shipped
            </h2>
            <p>
              A closer look at digital products where interface design,
              front-end architecture, and business constraints had to land
              together.
            </p>
          </header>
          {featuredProjects.map((project) => (
            <article key={project.id} class="project-showcase-card">
              <a
                href={`/projects/${project.slug}`}
                class="project-card-link"
                aria-label={`View ${project.title} project`}
              >
                <figure>
                  <div class="project-card-media">
                    <img
                      src={project.cover}
                      alt={`${project.title} project image`}
                    />
                    <img
                      class="project-card-logo"
                      src={project.logo}
                      alt=""
                      loading="lazy"
                    />
                    <span class="view-project-badge" aria-hidden="true">
                      View Case Study
                    </span>
                  </div>
                  <figcaption>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <TagList tags={project.tags} />
                  </figcaption>
                </figure>
              </a>
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
          <p>
            Product teams, agencies, and engineering groups where I have
            designed interfaces, built systems, and shipped production software.
          </p>
        </header>
        <ul class="experience-list">
          {EXPERIENCES.map((exp) => (
            <li class="experience-item" key={exp.id}>
              <div class="experience-item__logo">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  loading="lazy"
                />
              </div>
              <div class="experience-item__meta">
                <p class="experience-item__title">{exp.title}</p>
                <p class="experience-item__company">{exp.company}</p>
              </div>
              <span class="experience-item__duration">{exp.duration}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
});
