type SkillGroupData = {
  title: string;
  items: string[];
};

type ProjectData = {
  title: string;
  summary: string;
  tags: string[];
  href: string;
  cta: string;
};

type TimelineData = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
};

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
};

export function SkillGroup({ group }: { group: SkillGroupData }) {
  return (
    <article className="skill-card">
      <h3>{group.title}</h3>
      <div className="tag-list" aria-label={`${group.title} skills`}>
        {group.items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: ProjectData }) {
  const isExternal = project.href.startsWith("http");

  return (
    <article className="project-card">
      <div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </div>
      <div className="tag-list">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a
        className="text-link"
        href={project.href}
        {...(isExternal ? externalLinkProps : {})}
      >
        {project.cta}
        <span aria-hidden="true"> →</span>
      </a>
    </article>
  );
}

export function TimelineItem({ item }: { item: TimelineData }) {
  return (
    <article className="timeline-item">
      <div className="timeline-item__period">{item.period}</div>
      <div>
        <h3>{item.title}</h3>
        <p className="timeline-item__subtitle">{item.subtitle}</p>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export function SocialCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a className="social-card" href={href} {...externalLinkProps}>
      <span>{title}</span>
      <p>{description}</p>
    </a>
  );
}
