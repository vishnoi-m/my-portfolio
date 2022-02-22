import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
          <span>{props.role ? props.role : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDeatils = [
    { skill: "HTML/CSS", ratingPercentage: 50 },
    { skill: "Javascript", ratingPercentage: 50 },
    { skill: "React Js", ratingPercentage: 50 },
    { skill: "Mobx", ratingPercentage: 50 },
    { skill: "Node Js", ratingPercentage: 50 },
    { skill: "AWS SDK", ratingPercentage: 50 },
    { skill: "SQL", ratingPercentage: 50 },
    { skill: "Oracle", ratingPercentage: 50 },
    { skill: "PostgreSQL", ratingPercentage: 50 },
  ];

  const projectDetails = [
    {
      title: "SFDC Data Migration",
      duration: { fromDate: "2016", toDate: "2017" },
      description:
        "Responsible for Data migration from legacy system to salesforce cloud.",
      subHeading: "Technology: Talend.",
      role: "Role: Developer",
    },
    {
      title: "Pearson - LOMT",
      duration: { fromDate: "2017", toDate: "2019" },
      description: "Responsible for Testing the Web Application",
      subHeading: "Technology: WebdriverIO (Javascript).",
      role: "Role: Developer",
    },
    {
      title: "Pearson - Evergreen",
      duration: { fromDate: "2019", toDate: "Present" },
      description:
        "Responsible for Creating and Integrating the APIs with Front end.",
      subHeading: "Technology: ReactJs, NodeJs, MaterialUI, Mobx, Hapi.",
      role: "Role: Developer",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"NIIT"}
        subHeading={"GNIIT Diploma Software Engineering (Part-Time)"}
        fromDate={"2012"}
        toDate={"2015"}
      />
      <ResumeHeading
        heading={"Ch. Charan Singh University"}
        subHeading={"Bachelor in Commerce"}
        fromDate={"2012"}
        toDate={"2015"}
      />
      <ResumeHeading
        heading={"Rakhee Public School"}
        subHeading={"Senior Secondary School"}
        fromDate={"2011"}
        toDate={"2012"}
      />
      <ResumeHeading
        heading={"Rakhee Public School"}
        subHeading={"Secondary School"}
        fromDate={"2009"}
        toDate={"2010"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"HCL Technologies"}
          subHeading={"Senior Software Engineer"}
          fromDate={"2016"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as a Front and Back end developer using ReactJs
            and NodeJS.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            <p className="highlight-blob"></p>Developing a publishing website
            that provides the Online PDFs for the Schools and Universities.
          </span>
          <br />
          <span className="resume-description-text">
            <p className="highlight-blob"></p> Creating and Integrating of
            backend API with the front end.
          </span>
          <br />
          <span className="resume-description-text">
            <p className="highlight-blob"></p> Using AWS SDK for material
            management.
          </span>
          <br />
        </div>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDeatils.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          role={projectDetails.role}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading={"Music"}
        description={
          "Listening to smoothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
        }
      />
      <ResumeHeading
        heading={"Competitive Gaming"}
        description={
          "I like to challenge my reflexes a lot while competing in Arcade games, pushing the rank and having interactive gaming sessions excites me the most."
        }
      />
      <ResumeHeading
        heading={"Travel"}
        description={
          "It leaves you speechless, then turns you into a storyteller. Wherever you go becomes a part of you somehow and I would like to collect these memories as much as I can while I can."
        }
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="oops... no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };
  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
