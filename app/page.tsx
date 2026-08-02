import { Header } from "./components/Header";
import {
  ProjectCard,
  SkillGroup,
  SocialCard,
  TimelineItem,
} from "./components/Cards";
import { Section } from "./components/Section";
import {
  education,
  experience,
  profile,
  projects,
  skills,
  stats,
} from "./data";

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-shell" id="top" aria-label="Intro">
          <div className="hero__content animate-in">
            <p className="eyebrow">{profile.eyebrow}</p>
            <h1>{profile.headline}</h1>
            <p className="hero__lede">{profile.summary}</p>

            <div className="hero__actions" aria-label="Primary actions">
              <a className="button button--primary" href="#projects">
                View projects
              </a>
              <a className="button button--secondary" href={profile.cv} download>
                Download CV
              </a>
            </div>
          </div>

          <aside
            className="hero-card animate-in delay-1"
            aria-label="Profile highlights"
          >
            <div>
              <span className="hero-card__label">Based in</span>
              <strong>{profile.location}</strong>
            </div>
            <div className="hero-card__divider" aria-hidden="true" />
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="hero-card__label">{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </aside>
        </section>

        <Section
          id="about"
          eyebrow="About"
          title="Scientific curiosity, translated into practical AI products."
          description="Aaron combines a biochemistry background with postgraduate data science training, bringing a research-minded approach to building software and machine-learning systems."
        >
          <div className="about-grid">
            <div className="glass-card">
              <p>
                I’m focused on the intersection of data, intelligent systems, and
                clean user experience: turning messy questions into useful models,
                dashboards, and applications that people can actually understand.
              </p>
              <p>
                My work leans toward careful experimentation, clear communication,
                and pragmatic engineering — the kind of systems thinking that helps
                ideas survive contact with real users.
              </p>
            </div>
            <div className="principles">
              {profile.principles.map((item) => (
                <article className="principle" key={item.title}>
                  <span aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="A practical toolkit for data-driven software."
          description="The stack is intentionally broad enough to move from analysis to shipped interfaces without losing the thread."
        >
          <div className="skills-grid">
            {skills.map((group) => (
              <SkillGroup key={group.title} group={group} />
            ))}
          </div>
        </Section>

        <Section
          id="education"
          eyebrow="Education"
          title="A foundation in science, strengthened by data science."
        >
          <div className="timeline">
            {education.map((item) => (
              <TimelineItem key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Featured projects"
          title="Selected work across portfolio, data, and AI systems."
          description="Project cards are component-driven so new case studies can be added quickly as the portfolio grows."
        >
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Project-led experience with an emphasis on measurable outcomes."
        >
          <div className="timeline">
            {experience.map((item) => (
              <TimelineItem key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section
          id="cv"
          eyebrow="CV"
          title="A concise CV is ready to download."
          description="The download is included as an editable Markdown CV so the content can be refined or converted to PDF later."
        >
          <div className="cta-card">
            <div>
              <h3>Want the quick version?</h3>
              <p>
                Download Aaron’s CV, then use the contact links below to discuss
                roles, collaborations, or project ideas.
              </p>
            </div>
            <a className="button button--primary" href={profile.cv} download>
              Download CV
            </a>
          </div>
        </Section>

        <Section
          id="links"
          eyebrow="Links"
          title="Find the work, then start the conversation."
        >
          <div className="social-grid">
            <SocialCard
              title="GitHub"
              description="Explore repositories, portfolio code, and future project case studies."
              href={profile.github}
            />
            <SocialCard
              title="LinkedIn"
              description="Connect professionally and follow Aaron’s data science and AI work."
              href={profile.linkedin}
            />
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Open to data science, AI, and software opportunities."
          description="For collaboration, internships, graduate roles, or freelance project conversations, email is the fastest way to reach Aaron."
        >
          <div className="contact-card">
            <div>
              <span className="contact-card__label">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact-card__actions">
              <a className="button button--primary" href={`mailto:${profile.email}`}>
                Send email
              </a>
              <a
                className="button button--secondary"
                href={profile.github}
                {...externalLinkProps}
              >
                View GitHub
              </a>
            </div>
          </div>
        </Section>
      </main>

      <footer className="site-footer section-shell">
        <p>© 2026 Aaron Gulzar. Built with React, CSS, and a bias for clarity.</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
