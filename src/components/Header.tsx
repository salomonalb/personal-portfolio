import DrawerNav from "./DrawerNav";
import menuIcon from "../images/icons/menu-icon.png";
import { useEffect, useState } from "react";

type headerProps = {
  fullname: string;
};

function Header({ fullname }: headerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const initials = fullname
    .split(" ")
    .map((word) => word[0])
    .join("");


  useEffect(() => {

    function handleResize() {
      setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function toggleNav() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <header className="header">
      <p className="section__title">{initials}</p>
      <nav className="desk-nav">
        <ul className="desk-nav__list">
          <li className="desk-nav__item">
            <a className="section__text" href="#about">About Me</a>
          </li>
          <li className="desk-nav__item">
            <a className="section__text"  href="#skills">Skills</a>
          </li>
          <li className="desk-nav__item">
            <a className="section__text" href="#projects">Projects</a>
          </li>
          <li className="desk-nav__item">
            <a className="section__text" href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
      <button className="header__button" onClick={toggleNav}>
        <img className="header__icon" src={menuIcon} alt="open navigation" />
      </button>
      <DrawerNav isOpen={isOpen} handleClose={toggleNav} />
    </header>
  );
}

export default Header;
