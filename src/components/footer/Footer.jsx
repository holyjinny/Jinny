import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jinny</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/holyjinny"
            className="footer__social-link"
          >
            <i className="uil uil-github" />
          </a>
        </div>

        <span className="footer__copy">&#169; 2022 Young Jin.</span>
      </div>
    </footer>
  );
};

export default Footer;
