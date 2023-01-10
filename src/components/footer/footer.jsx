import React from "react";
//styles
import "./footer.css";
// icons
import {BsMouse} from "react-icons/bs";
import {FaTelegram} from "react-icons/fa";
import {AiFillLinkedin} from "react-icons/ai";
import {TiSocialGithub} from "react-icons/ti";

function Footer() {
  return (
      <div id="footer" className="container footer-container">
        <h1>
          That's all{" "}
          <a href="#home">
            <h2>
              <BsMouse/> - scroll up -
            </h2>
          </a>
        </h1>
        <div className="social-links">
          <a href="https://telegram.me/tibtus">
            <FaTelegram className="social"/>
          </a>
          <a href="https://www.linkedin.com/in/burdeinyi/">
            {" "}
            <AiFillLinkedin className="social"/>
          </a>
          <a href="https://github.com/tibtus">
            {" "}
            <TiSocialGithub className="social"/>
          </a>


        </div>
      </div>
  );
}

export default Footer;
