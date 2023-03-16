import DrawerNav from "./DrawerNav";
import menuIcon from "../images/icons/menu-icon.png";
import { useState } from "react";

type headerProps = {
  fullname: string;
};

function Header({ fullname }: headerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const initials = fullname
    .split(" ")
    .map((word) => word[0])
    .join("");

  function toggleNav() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <header className="header">
      <p className="section__title">{initials}</p>
      <nav className="desk-nav">
        <ul>
          <li>
            <a href="#projects">Projects</a>
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
