import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button__flex"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon">
              Education
            </i>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button__flex"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon">
              Experience
            </i>
          </div>
        </div>

        <div className="qualification__sections">
          {/* 학력 */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              {/* 고등학교 */}
              <div>
                <h3 className="qualification__title">광덕고등학교</h3>
                <span className="qualification__subtitle">문과</span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2010. 03 ~ 2013. 02
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              {/* 대학교 */}
              <div>
                <h3 className="qualification__title">
                  한국호텔관광실용전문학교
                </h3>
                <span className="qualification__subtitle">
                  국제호텔관광경영학
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2013. 03 ~ 2018. 06
                </div>
              </div>
            </div>
          </div>

          {/* 교육 */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">광주국제직업전문학교</h3>
                <span className="qualification__subtitle">
                  시스템 SW 엔지니어링 (스마트팩토리)
                </span>

                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt" /> 2021. 07 ~ 2022. 05
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
