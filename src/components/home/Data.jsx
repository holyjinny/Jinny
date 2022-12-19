import React from "react";
import { Link } from "react-router-dom";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Youngjin Jeong
        <div className="home__hand">
          <i className="uil uil-rss" />
        </div>
      </h1>
      <h3 className="home__subtitle">Backend Developer</h3>
      <p className="home__description">
        현재 MERN을 기준으로 공부하고 있는 취준생입니다!
      </p>
      <Link to={"/"} className="button button__flex">
        연락하기 <i className="uil uil-message button__icon" />
      </Link>
    </div>
  );
};

export default Data;
