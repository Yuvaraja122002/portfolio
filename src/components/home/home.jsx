import React from "react";
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./home.css";
import CV from "../../assets/CV-YUVARAJA.pdf";

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
            From Chennai, Enthusiastic individual with a strong passion for
            front-end development and creative arts. Proficient in 3D modeling
            using Blender, illustration, and pencil portrait drawing.
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
            <a download="" href={CV} className="btn text-cs">
              Download CV
            </a>

            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>

        <div className="section__bg-wrapper">
          {/* <span className="bg__title">Frontend Developer</span> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
