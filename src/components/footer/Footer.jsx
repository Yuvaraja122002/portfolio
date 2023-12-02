import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container social">
        <div className="footer__socials">
          <a
            href="https://github.com/Yuvaraja122002"
            className="footer__social-link"
          >
            <FaGithub />
          </a>

          <a
            href="www.linkedin.com/in/yuvaraja12"
            className="footer__social-link"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/_uv_uv_arts/"
            className="footer__social-link"
          >
            <FaInstagram />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2023 <span>Uv Arts</span>. All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by <span>Yuvaraja</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
