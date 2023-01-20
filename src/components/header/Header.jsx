import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  /**
   * !Change Background Header
   */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    this.scrollY >= 80
      ? header.classList.add("scroll-header")
      : header.classList.remove("scroll-header");
  });

  /**
   * !토글 메뉴 동작
   */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Jinny
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#home")}
              >
                <i className="uil uil-estate nav__icon" /> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => setActiveNav("#about")}
              >
                <i className="uil uil-user nav__icon" /> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setActiveNav("#skills")}
              >
                <i className="uil uil-file-alt nav__icon" /> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#directionality"
                className={
                  activeNav === "#directionality"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setActiveNav("#directionality")}
              >
                <i className="uil uil-briefcase-alt nav__icon" /> Directionality
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setActiveNav("#portfolio")}
              >
                <i className="uil uil-scenery nav__icon" /> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => setActiveNav("#contact")}
              >
                <i className="uil uil-message nav__icon" /> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
