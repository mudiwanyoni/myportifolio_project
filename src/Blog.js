import React from "react";
import "./Blog.css";
import Blog1 from "./img/portfolio-1.jpg";
import Blog2 from "./img/portfolio-2.jpg";
import Blog3 from "./img/portfolio-4.jpg";

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">My latest blog stories</h1>
        <p className="heading p__color">
          Apart from building software projects, i also enjoy writing tech
          articles on various blogging sites like medium, Dev community and
          hashnode.
        </p>
        <p className="heading p__color">Below are some of my stories.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">One</h5>
                <h4 className="project__text">
                  Choosing your first programming language
                </h4>
                <a
                  href="https://irvinehawks.hashnode.dev/choosing-the-first-programming-language-as-a-beginer"
                  className="blog project__btn btn"
                  Target="_blank"
                >
                  Read More...
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Two</h5>
                <h4 className="project__text">
                  Functional VS OOP programming Paradigms.
                </h4>
                <a
                  href="https://irvinehawks.hashnode.dev/the-difference-between-functional-and-object-orientated-programming"
                  className="blog project__btn btn" Target = '_blank'
                >
                  Read More...
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Blog3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="Blog__meta absolute">
                <h5 className="project__text">Three</h5>
                <h4 className="project__text">
                  Real time chat app using Node.js and Socket.io
                </h4>
                <a href="#" className="blog project__btn btn" Target = '_blank'>
                  Read More...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
