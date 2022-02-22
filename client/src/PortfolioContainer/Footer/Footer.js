import React from "react";
import "./Footer.css";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
  faGoogle,
  faGithubAlt,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollService from "../../utilities/ScrollService";
export default function Footer() {
  let socialDetails = [
    { icon: faGithub, link: "https://github.com/vishnoi-m" },
    { icon: faGithubAlt, link: "https://github.com/vishnoi-m" },
    // { icon: faGoogle, link: 'https://mail.google.com/mail/u/1/?view=cm&fs=1&to=2019ucp1900@mnit.ac.in&tf=1'},
    // { icon: faTwitter, link: 'https://twitter.com/sneh_aashish'},
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/mayank-vishnoi-503575160",
    },
    { icon: faInstagram, link: "https://www.instagram.com/iam_vishnoi/" },
    // { icon: faFacebook, link: 'https://www.facebook.com/SAGROCZZ' }
  ];

  let currentYear = new Date().getFullYear();

  const getSocials = () => {
    return socialDetails.map((social, index) => (
      <a
        rel="noopener noreferrer"
        key={index}
        href={social.link}
        target="_blank"
      >
        <FontAwesomeIcon className="social-icon" icon={social.icon} />
      </a>
    ));
  };
  return (
    <>
      <div className="main-footer-content">
        <div className="main-footer-message">
          <span> Copyright @ {currentYear} | Mayank Vishnoi</span>
        </div>
        <div className="main-footer-socials">{getSocials()}</div>
      </div>
      <div className="scroll-container">
        <button
          className="btn-scroll"
          onClick={() => ScrollService.scrollHandler.scrollToHome()}
        >
          {" "}
          <i className="fa fa-arrow-up"></i>
        </button>
      </div>
    </>
  );
}
