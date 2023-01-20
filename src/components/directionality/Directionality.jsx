import React, { useState } from "react";
import "./Directionality.css";

const Directionality = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="directionality section" id="directionality">
      <h2 className="section__title">Directionality</h2>
      <span className="section__subtitle">How am I going to grow up</span>

      <div className="directionality__container container grid">
        {/* 공식 문서 */}
        <div className="directionality__content">
          <div>
            <i className="uil uil-web-grid directionality__icon" />
            <h3 className="directionality__title">
              공식문서 <br /> First Source Of Truth
            </h3>
          </div>

          <span className="directionality__button" onClick={() => toggleTab(1)}>
            자세히보기
            <i className="uil uil-arrow-right directionality__button-icon" />
          </span>

          <div
            className={
              toggleState === 1
                ? "directionality__modal active-modal"
                : "directionality__modal"
            }
          >
            <div className="directionality__modal-content">
              <i
                className="uil uil-times directionality__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="directionality__modal-title">
                공식문서를 읽어라.
              </h3>
              <p className="directionality__modal-description">
                공식문서를 읽고 공식문서에서 찾고 공식문서를 참조.
              </p>

              <ul className="directionality__modal-directionality grid">
                {/* Mongo */}
                <li className="directionality__modal-service">
                  <i className="uil uil-check-circle directionality__modal-icon" />
                  <p className="directionality__modal-info">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.mongodb.com/docs/"
                      className="home__social-icon"
                    >
                      <i className="uil uil-database" /> MongoDB
                    </a>
                  </p>
                </li>

                {/* Express */}
                <li className="directionality__modal-service">
                  <i className="uil uil-check-circle directionality__modal-icon" />
                  <p className="directionality__modal-info">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://expressjs.com/"
                      className="home__social-icon"
                    >
                      <i className="uil uil-server" /> Express.js
                    </a>
                  </p>
                </li>

                {/* React */}
                <li className="directionality__modal-service">
                  <i className="uil uil-check-circle directionality__modal-icon" />
                  <p className="directionality__modal-info">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://ko.reactjs.org/"
                      className="home__social-icon"
                    >
                      <i className="uil uil-react" /> React.js
                    </a>
                  </p>
                </li>

                {/* Node */}
                <li className="directionality__modal-service">
                  <i className="uil uil-check-circle directionality__modal-icon" />
                  <p className="directionality__modal-info">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://nodejs.org/ko/docs/"
                      className="home__social-icon"
                    >
                      <i className="uil uil-visual-studio" /> Node.js
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 기본 지식 */}
        <div className="directionality__content">
          <div>
            <i className="uil uil-arrow directionality__icon" />
            <h3 className="directionality__title">
              기본지식을 제대로 익혀라 <br /> Fundamentals
            </h3>
          </div>

          <span className="directionality__button" onClick={() => toggleTab(2)}>
            자세히보기
            <i className="uil uil-arrow-right directionality__button-icon" />
          </span>

          <div
            className={
              toggleState === 2
                ? "directionality__modal active-modal"
                : "directionality__modal"
            }
          >
            <div className="directionality__modal-content">
              <i
                className="uil uil-times directionality__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="directionality__modal-title">
                기본지식을 제대로 익혀라.
              </h3>
              <p className="directionality__modal-description">
                부족한 개념이나 이해는 위키피디아 또는 <br />
                관련 책 등을 활용.
              </p>

              <ul className="directionality__modal-directionality grid">
                <li className="directionality__modal-service">
                  <i className="uil uil-check-circle directionality__modal-icon" />
                  <p className="directionality__modal-info">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://ko.wikipedia.org/wiki/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4"
                      className="home__social-icon"
                    >
                      <i className="uil uil-database" /> 데이터베이스
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 권위자 */}
        <div className="directionality__content">
          <div>
            <i className="uil uil-edit directionality__icon" />
            <h3 className="directionality__title">
              명성 있는 지식인들 리스트 <br /> Authority
            </h3>
          </div>

          <span className="directionality__button" onClick={() => toggleTab(3)}>
            자세히보기
            <i className="uil uil-arrow-right directionality__button-icon" />
          </span>

          <div
            className={
              toggleState === 3
                ? "directionality__modal active-modal"
                : "directionality__modal"
            }
          >
            <div className="directionality__modal-content">
              <i
                className="uil uil-times directionality__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="directionality__modal-title">권위자 리스트.</h3>
              <p className="directionality__modal-description">
                변해가는 트렌드 등을 살펴보자.
              </p>

              <ul className="directionality__modal-directionality grid">
                <li className="directionality__modal-service">
                  <i className="uil uil-check-circle directionality__modal-icon" />
                  <p className="directionality__modal-info">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://kentcdodds.com/"
                      className="home__social-icon"
                    >
                      <i className="uil uil-react" /> 리액트 (유닛 테스트)
                    </a>
                  </p>
                </li>

                <li className="directionality__modal-service">
                  <i className="uil uil-check-circle directionality__modal-icon" />
                  <p className="directionality__modal-info">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://tkdodo.eu/blog/"
                      className="home__social-icon"
                    >
                      <i className="uil uil-react" /> 리액트 쿼리
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directionality;
