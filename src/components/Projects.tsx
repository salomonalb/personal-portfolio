import { project } from "../data";
import linkIcon from "../images/icons/link-icon.png";

type projectsProps = {
  projects: project[];
};

function Projects({ projects }: projectsProps) {
  const projectElements = projects.map((project) => {
    return (
      <article className="project">
        <h3 className="project__title">{project.name}</h3>
        <img
          className="project__image"
          src={project.projectImage}
          alt={project.name}
        />
        <p className="project__description section__text">
          {project.description}
        </p>
        <div className="project__menu">
          <a
            className="project__button section__text"
            href={project.websiteLink}
            target="_blank"
          >
            Open <img className="section__link-icon" src={linkIcon} alt="" />
          </a>
          <a
            className="project__button section__text"
            href={project.githubLink}
            target="_blank"
          >
            Github <img className="section__link-icon" src={linkIcon} alt="" />
          </a>
        </div>
      </article>
    );
  });

  return (
    <section id="projects" className="section">
      <h2 className="section__title">My Projects :</h2>
      <div className="projects-container">{projectElements}</div>
    </section>
  );
}

export default Projects;
