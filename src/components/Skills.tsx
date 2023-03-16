import { skill } from "../data";
import linkIcon from "../images/icons/link-icon.png";
type skillsProps = {
  skills: skill[];
};

function Skills({ skills }: skillsProps) {
  const skillsItems = skills.map((skill) => {
    return (
      <li className="skill">
        {skill.certificate ? (
          <p className="section__text">
            <a className="skill__link skill__row" href={skill.certificate} target="_blank">
              <img className="skill__icon" src={skill.icon} alt={skill.name} />
              {skill.name} <img className="section__link-icon" src={linkIcon} alt="" />
            </a>
          </p>
        ) : (
          <p className="section__text skill__row">
            <img className="skill__icon" src={skill.icon} alt={skill.name} />
            {skill.name}
          </p>
        )}
      </li>
    );
  });

  return (
    <section className="section skills">
      <h2 className="section__title">My Skills :</h2>
      <ul className="skills__container">{skillsItems}</ul>
    </section>
  );
}

export default Skills;
