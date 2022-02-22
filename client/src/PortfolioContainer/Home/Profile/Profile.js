import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/vishnoi-m">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mayank-vishnoi-503575160">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/iam_vishnoi/">
                <i className="fa fa-instagram"></i>
              </a>
              {/* <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a> */}
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Mayank</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Front end developer",
                    1000,
                    "React js",
                    1000,
                    "Node js",
                    1000,
                    "GIT",
                    1000,
                    "AWS SDK",
                    1000,
                  ]}
                />
              </h1>
              <span classname="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {""}
              Hire Me
            </button>
            <a href="Mayank-Resume.docx" download="Mayank Resume.docx">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
