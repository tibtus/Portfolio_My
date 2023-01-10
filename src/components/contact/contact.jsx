import React from "react";
//styles
import "./contact.css";
//icons
import {AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
import {FaTelegram} from "react-icons/fa";


function Contact() {
  return (
      <div id="contact" className="container contact-container">
        <h1>Contact Me</h1>
        <div className="contact-links">
          <a
              href="mailto:tibtus@gmail.com"
              className="contact email"
              target={"blank"}
          >
            <AiOutlineMail className="icon"/>
            <h2>
              Email <span>Serhii Burdeinyi</span>
            </h2>
          </a>


          <a
              href="https://telegram.me/tibtus"
              className="contact telegram"
              target={"blank"}
          >
            <FaTelegram className="icon"/>
            <h2>
              Telegram <span>+38 093 911 7418</span>
            </h2>
          </a>


          <a href="https://www.linkedin.com/in/burdeinyi/" className="contact Linkedin">
            <AiFillLinkedin className="icon"/>
            <h2>
              Linkedin <span>Serhii Burdeinyi</span>
            </h2>
          </a>


        </div>
      </div>
  );
}

export default Contact;
