import closeIcon from "../images/icons/close-icon.jpg"

type drawerNavProps = {
  isOpen: boolean,
  handleClose: () => void
}

function DrawerNav({isOpen, handleClose} : drawerNavProps) {
  return (
    <nav className={`drawer ${isOpen ? "--open" : ""}`}>
      <button className="drawer__button" onClick={handleClose}>
        <img src={closeIcon} alt="close navigation" />
      </button>
      <ul className="drawer__list">
        <li>
          <a className="section__text" href="#about" onClick={handleClose}>About Me</a>
        </li>
        <li>
          <a className="section__text" href="#skills" onClick={handleClose}>My Skills</a>
        </li>
        <li>
          <a className="section__text" href="#projects" onClick={handleClose}>My Projects</a>
        </li>
        <li>
          <a className="section__text" href="#contact" onClick={handleClose}>Contact Me</a>
        </li>
      </ul>
    </nav>
  )
}

export default DrawerNav