import React from "react";
import "./ScrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");

    // 화면 상단일 때는 스크롤 업 버튼이 사라지게끔
    this.scrollY >= 560
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#home" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon" />
    </a>
  );
};

export default ScrollUp;
