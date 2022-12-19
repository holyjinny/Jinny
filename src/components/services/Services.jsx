import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon" />
            <h3 className="services__title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon" />
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                배포 프로젝트 관련 내용 첨부하기 or 구현 핵심 기능 나열하기
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">어드민 대쉬보드</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">쇼핑몰</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon" />
            <h3 className="services__title">
              UI / UX <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="uil uil-arrow-right services__button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="services__modal-title">UI / UX Designer</h3>
              <p className="services__modal-description">
                배포 프로젝트 관련 내용 첨부하기
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">어드민 대쉬보드</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">쇼핑몰</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon" />
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="uil uil-arrow-right services__button-icon" />
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                배포 프로젝트 관련 내용 첨부하기
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">어드민 대쉬보드</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon" />
                  <p className="services__modal-info">쇼핑몰</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
