import React from "react";
import AboutImage from "../../assets/ID_picture.png";
import CV from "../../assets/certificate.pdf";
import Info from "./Info";
import "./About.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImage} alt="사진" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            현재 MERN을 기반으로 하여 프로젝트 등을 구현해보고 있으며, 코딩
            테스트의 레벨을 올릴 계획입니다. <br />
            교육 과정 중 Firebase + Arduino + Flutter 를 이용한 어플을 통해
            우수상을 받았습니다.
          </p>

          <a download={""} href={CV} className="button button__flex">
            증명서 <i className="uil uil-file-export" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
