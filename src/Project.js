import React from "react";
import "./Project.css";
import Project1 from './img/portfolio-1.jpg';
import Project2 from './img/portfolio-2.jpg';
import Project3 from './img/portfolio-1.jpg';
import Project4 from './img/portfolio-4.jpg';

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">
          Below are some of my projects on github,
        </p>
        <p className="heading p__color">
          You can view projects and check out.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">One</h5>
                <h4 className="project__text">E-commerce web application</h4>
                <a
                  href="https://github.com/irvinehawks/UniEcommerceWebApp"
                  className="project__btn"
                  Target="_blank"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Two</h5>
                <h4 className="project__text">
                  Travel advisor weather application
                </h4>
                <a
                  href="https://github.com/irvinehawks/Travel_advisor_Weather_WebApp"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Three</h5>
                <h4 className="project__text">
                  News blogging application
                </h4>
                <a
                  href="https://github.com/irvinehawks/News_blogging_web_application"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Four</h5>
                <h4 className="project__text">
                  Electricity & water pre-paid system
                </h4>
                <a
                  href="https://github.com/irvinehawks/kbb_prepaid_system"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Five</h5>
                <h4 className="project__text">User auth system in Java</h4>
                <a
                  href="https://github.com/irvinehawks/springboot_authentication_postgres_security"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Six</h5>
                <h4 className="project__text">E-passport web application </h4>
                <a
                  href="https://github.com/irvinehawks/E_passport_web_application"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
