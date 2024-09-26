import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../../App.css"

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/anuj__2117/" target="_blank" className="items">
            <FaInstagram className="icons" style={{color: "CADCFC"}}/>
          </a>
          <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" style={{color: "CADCFC"}} />
          </a>
          <a href="https://www.linkedin.com/in/anuj-kushwaha-35653b264" target="_blank" className="items">
            <CiLinkedin className="icons" style={{color: "CADCFC"}} />
          </a>
          <a href="https://x.com/Anujkus18200114" target="_blank" className="items">
            <FaSquareXTwitter className="icons" style={{color: "CADCFC"}} />
          </a>
          <a href="https://github.com/Anuj2117" target="_blank" className="items">
            <FaGithubSquare className="icons" style={{color: "CADCFC"}}/>
          </a>
          <a
            href="mailto:anujKushwaha221@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" style={{color: "CADCFC"}} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
