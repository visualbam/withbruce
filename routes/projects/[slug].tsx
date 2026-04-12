import { define } from "../../utils.ts";
import {
  getAdjacentProjects,
  getProjectBySlug,
} from "../../data/staticData.ts";
import { TagList } from "../../components/TagList.tsx";

export default define.page(function ProjectDetail(ctx) {
  const slug = ctx.params.slug;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <title>Project Not Found – Bruce McElroy</title>
        <section class="contact">
          <article>
            <header>
              <h2>
                <span>404</span>
                Project not found
              </h2>
              <p>
                The project you're looking for doesn't exist.{" "}
                <a href="/">Go home</a>
              </p>
            </header>
          </article>
        </section>
      </>
    );
  }

  const { prev, next } = getAdjacentProjects(project.id);

  return (
    <>
      <title>Bruce McElroy: {project.title}</title>
      <meta
        name="description"
        content={`Detailed information and sample images for ${project.title} by Bruce McElroy. Learn about the development process, features, and more.`}
      />

      {/* Mast */}
      <section class="project-mast full-width">
        <img src={project.logo} alt={`${project.title} Logo`} />
        <img class="full-width" src={project.mast} alt={`${project.title} mast`} />
      </section>

      {/* Detail header */}
      <section class="project-detail">
        <header>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <TagList tags={project.tags} />
        </header>
      </section>

      {/* Screenshot grid */}
      <section class="project-shots">
        {project.images.map((img) => (
          <figure key={img.id}>
            <img src={img.filePath} alt={`${project.title} screenshot`} loading="lazy" />
          </figure>
        ))}
      </section>

      {/* Prev / Next navigation */}
      <nav class="project-navigation">
        {prev && (
          <a href={`/projects/${prev.slug}`} class="project-nav-link">
            <div
              class="preview-image"
              style={{ backgroundImage: `url('${prev.cover}')` }}
            >
              {/* deno-lint-ignore no-explicit-any */}
              <iconify-icon
                {...({} as any)}
                icon="mdi:chevron-left"
                width="30"
                height="30"
              />
            </div>
            <span>Previous Project</span>
            <h5>{prev.title}</h5>
          </a>
        )}
        {next && (
          <a href={`/projects/${next.slug}`} class="project-nav-link project-nav-link--next">
            <div
              class="preview-image"
              style={{ backgroundImage: `url('${next.cover}')` }}
            >
              {/* deno-lint-ignore no-explicit-any */}
              <iconify-icon
                {...({} as any)}
                icon="mdi:chevron-right"
                width="30"
                height="30"
              />
            </div>
            <span>Next Project</span>
            <h5>{next.title}</h5>
          </a>
        )}
      </nav>
    </>
  );
});
