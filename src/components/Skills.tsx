import { skill } from "../data"
import linkIcon from "../images/icons/link-icon.png"
type skillsProps = {
  skills: skill[]
}

function Skills({ skills }: skillsProps) {
  
  const skillsItems = skills.map(skill => {
    return (
      <li>
      {skill.certificate ? 
      <p><a href={skill.certificate} target="_blank"><img src={skill.icon} alt={skill.name} />{skill.name} <img src={linkIcon} alt=""/></a></p> 
      : <p><img src={skill.icon} alt={skill.name}/>{skill.name}</p>}
      </li>
    )
  }) 

  return (
    <section>
      <h2>My Skills :</h2>
      <ul>
        {skillsItems}
      </ul>
    </section>
  )
}

export default Skills