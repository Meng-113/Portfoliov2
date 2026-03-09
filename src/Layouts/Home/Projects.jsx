import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';

const Projects = ({ projects }) => {
  const items = Array.isArray(projects) ? projects : [];

  return (
    <section id="projects" className="w-[80%] mx-auto mt-24 text-left">
      <SectionTitle
        id="projects-heading"
        eyebrow="Projects"
        title="Project Experience"
        description="Key student projects drawn from your CV experience."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((project, index) => (
          <article
            key={`${project.id}-${index}`}
            className="card-surface p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-600">
              {project.category}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {project.description}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.13em] text-slate-500">
              {(project.techStack || []).join(' | ')}
            </p>
            {(project.highlights || []).length > 0 ? (
              <ul className="mt-5 space-y-2">
                {project.highlights.map((item) => (
                  <li
                    key={`${project.id}-${item}`}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
            {project.githubUrl || project.liveUrl ? (
              <div className="mt-6 flex gap-3">
                {project.githubUrl ? (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    size="sm"
                    ariaLabel={`View ${project.title} source code`}
                  >
                    Source
                  </Button>
                ) : null}
                {project.liveUrl ? (
                  <Button
                    href={project.liveUrl}
                    variant="primary"
                    size="sm"
                    ariaLabel={`View ${project.title} live demo`}
                  >
                    Live
                  </Button>
                ) : null}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
