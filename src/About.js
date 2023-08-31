import React from "react";
import "./About.css";

import aboutImg from "./img/irvine6.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2" id="about">
            <h1 className="about__heading">About</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                I am a competent, energetic and ambitious software
                developer with a strong foundation in math, logic, and
                cross-platform coding. I seek to work in a highly competitive
                environment with a perfect challenge and contribute the best for
                the betterment of the organisation whilst ensuring growth in
                personal career.
              </p>
              <p className="about__text p__color">
                Apart from coding my existing or next software project, i enjoy
                spending time watching soccer.
              </p>
              <p className="about__text p__color">
                When i find nothing to do during spare time, i enjoy
                collaborating and contributing to open source projects on Github
                or brainstorming on bootcamps.
              </p>
              <div className="about__button d__block align__items__center">
                <a href="irvene_kwambana_cv1.pdf" download>
                  <button className="about btn pointer">Download CV</button>
                </a>
                &Nbsp;
                <a href="#Contact">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#Home" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
