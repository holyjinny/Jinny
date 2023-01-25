import React, { useState } from "react";
import Video1 from "../../assets/admin-board.mov";
import Video2 from "../../assets/smart-app.mp4";

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>

      <div className="work__wrapper">
        <a target="_blank" rel="noopener noreferrer" href={item.href}>
          <div className="work__wrapper-icon github">
            <div className="tooltip">{item.tooltip1}</div>
            <span>
              <i className="uil uil-github" />
            </span>
          </div>
        </a>

        <div
          className={
            item.tooltip2 === "ERD"
              ? "work__wrapper-icon erd"
              : "work__wrapper-icon-hidden erd"
          }
        >
          <div className="tooltip">{item.tooltip2}</div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://momentous-windscreen-cec.notion.site/Admin-Board-6ab226503ff34fb09b3ae4efc24a26c5"
          >
            <span>
              <i className="uil uil-object-group" />
            </span>
          </a>
        </div>

        <div className="work__wrapper-icon code">
          <div className="tooltip">{item.tooltip3}</div>
          <span onClick={() => toggleTab(item.videoNum)}>
            <i className="uil uil-video" />
          </span>

          <div
            className={
              toggleState === 1 ? "video__modal show-modal" : "video__modal"
            }
          >
            <div className="video__modal-content">
              <i
                className="uil uil-times video__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="video__modal-title">시연 영상</h3>
              <p className="video__modal-description">
                따라해본 대쉬보드의 전반적인 UI
              </p>
              <video src={Video1} controls />
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "video__modal show-modal" : "video__modal"
            }
          >
            <div className="video__modal-content">
              <i
                className="uil uil-times video__modal-close"
                onClick={() => toggleTab(0)}
              />

              <h3 className="video__modal-title">시연 영상</h3>
              <p className="video__modal-description">
                Firebase 실시간 데이터가 웹상에 잘 반영되는지 <br /> 테스트
              </p>
              <video src={Video2} controls />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
