import { skill } from "../data";
import linkIcon from "../images/icons/link-icon.png";
type skillsProps = {
  skills: skill[];
};

function Skills({ skills }: skillsProps) {
  const skillsItems = skills.map((skill) => {
    return (
      <li className="section__item">
        {skill.certificate ? (
          <p className="section__text">
            <a
              className="section__link section__row"
              href={skill.certificate}
              target="_blank"
            >
              <img
                className="section__icon"
                src={skill.icon}
                alt={skill.name}
              />
              {skill.name}{" "}
              <img className="section__link-icon" src={linkIcon} alt="" />
            </a>
          </p>
        ) : (
          <p className="section__text section__row">
            <img className="section__icon" src={skill.icon} alt={skill.name} />
            {skill.name}
          </p>
        )}
      </li>
    );
  });

  return (
    <section className="section">
      <h2 className="section__title">My Skills :</h2>
      <ul className="section__container">{skillsItems}</ul>
    </section>
  );
}

export default Skills;
