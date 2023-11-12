import React from "react";
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>M</span> Yuvaraja
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>Frontend Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                8 <b>+</b>
              </span>
              <span className="text-sm text-cs">
                Months of <span>Experiance</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">5</span>
              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            From Chennai, I have good experience in web developer, also I am
            good at 3d modeling and illustrator. I love to talk with you about
            our unique
          </p>

          <div className="home__socials">
            <a href="" className="home__social-link">
              <FaTwitter />
            </a>

            <a href="" className="home__social-link">
              <FaLinkedin />
            </a>

            <a href="" className="home__social-link">
              <FaInstagram />
            </a>
          </div>

          <div className="home__btns">
            <a href="" className="btn text-cs">
              Download CV
            </a>

            <a href="" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
