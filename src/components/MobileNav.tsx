import { useState } from "react";
import menuIcon from "../images/icons/menu-icon.png";
import closeIcon from "../images/icons/close-icon.jpg";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="header">
        <p className="header__logo section__title">SL</p>
        <button className="header__button" onClick={handleOpen}>
          <img className="header__icon" src={menuIcon} alt="open navigation" />
        </button>
      </header>
      {isOpen ? (
        <>
          <div className="drawer__background"></div>
          <nav className="drawer">
            <button className="drawer__button" onClick={handleClose}>
              <img
                className="drawer__icon"
                src={closeIcon}
                alt="close navigation"
              />
            </button>
            <ul className="drawer__list section__container">
              <li className="drawer__item section__item">
                <a className="section__text" href="#about" onClick={handleClose}>
                  About Me
                </a>
              </li>
              <li className="drawer__item section__item">
                <a className="section__text" href="#skills" onClick={handleClose}>
                  My Skills
                </a>
              </li>
              <li className="drawer__item section__item">
                <a className="section__text" href="#projects" onClick={handleClose}>
                  My Projects
                </a>
              </li>
              <li className="drawer__item section__item">
                <a className="section__text"  href="#contact" onClick={handleClose}>
                  Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </>
  );
}

export default MobileNav;
