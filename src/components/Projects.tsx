import { project } from "../data"
import linkIcon from "../images/icons/link-icon.png"

type projectsProps = {
  projects: project[]
}

function Projects({projects}: projectsProps) {
  
  const projectElements = projects.map(project => {
    return (
      <article>
        <h3>{project.name}</h3>
        <img src={project.projectImage} alt={project.name} />
        <p>{project.description}</p>
        <div>
          <a href={project.websiteLink} target="_blank">Open <img src={linkIcon} alt=""/></a>
          <a href={project.githubLink} target="_blank">Github <img src={linkIcon} alt=""/></a>
        </div>
      </article>
    )
  })

  return (
    <section>
      <h2>My Projects :</h2>
      <div>
        {projectElements}
      </div>
    </section>
  )
}

export default Projects