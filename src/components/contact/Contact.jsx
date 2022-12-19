import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            {/* 메일 */}
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon" />

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">koreavzz@naver.com</span>

              {/* !FIXME: 메일 보내는 기능 추가하기 */}
              <a href="mailto:koreavzz@naver.com" className="contact__button">
                메일 보내기
                <i className="bx bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>

            {/* 휴대전화 */}
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon" />

              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">010-5656-9937</span>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form action="" className="contact__form">
            {/* 이메일 */}
            <div className="contact__form-div">
              <label htmlFor="email" className="contact__form-tag">
                이메일
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="이메일을 입력해주세요."
              />
            </div>

            {/* 성함 */}
            <div className="contact__form-div">
              <label htmlFor="name" className="contact__form-tag">
                성함
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="성함을 입력해주세요."
              />
            </div>

            {/* 내용 */}
            <div className="contact__form-div contact__form-area">
              <label htmlFor="content" className="contact__form-tag">
                내용
              </label>
              <textarea
                name="content"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="내용을 입력해주세요."
              />
            </div>

            <Link to={"/"} className="button button__flex">
              연락하기 <i className="uil uil-message button__icon" />
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
