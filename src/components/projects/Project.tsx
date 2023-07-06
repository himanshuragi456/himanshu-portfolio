import React, { useState, useEffect } from "react";
import "./project.scss";
import LazyLoad from "react-lazyload";

import AnimatedLettersFast from "components/AnimatedlettersFast";

const Project = () => {
  const [letterClass, setLetterClass] = useState("text-animate-fast");
  const nameArray = "02. My Projects".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-fast-hover");
    }, 4000);
  });
  return (
    <div className="project">
      <span className="sectiontag">&lt;section&gt;</span>
      <h1 className="about__headingPrimary">
        <AnimatedLettersFast
          letterClass={letterClass}
          strArray={nameArray}
          idx={15}
        />
      </h1>

      {/* ----------------------------------------- for desktops -------------------------- */}

      <LazyLoad once height={400}>
        <section className="project__section">
          <div className="project__left">
            <img
              className="project__img"
              src="https://res.cloudinary.com/djxpqemkk/image/upload/v1686734445/Screenshot_2023-06-12_at_4.14.07_PM_xygre8.png"
              alt="color palette"
            />
          </div>
          <div className="project__right">
            <h3 className="project__headingTertiary">Featured Project</h3>
            <a
              href="https://github.com/himanshuragi456/crocs-web"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>Crocs</h2>
            </a>
            <div className="project__descriptionContainer">
              <p className="project__description">
                {`Crocs may want a better website. 😛
                  | Made with Vue.js and loads of animations in it! 🚀
                  | custom cursor!
                  | UI perfectly fitting in Crocs business values
                  | smooth and beautiful animations ❤️`}
              </p>
              <div className="project__tags">
                {" "}
                Next.js &nbsp; React.js &nbsp; Node.js &nbsp; MongoDB &nbsp;
                Express.js &nbsp; SCSS/SASS
              </div>
              <div className="project__icons">
                <a
                  href="https://github.com/himanshuragi456/crocs-web"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  href="https://crocs-josh.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className="project__section">
          <div className="project__left1">
            <h3 className="project__headingTertiary">Featured Project</h3>
            <a
              href="https://droneshop-hr.web.app/"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>Drone Shop (E- commerce)</h2>
            </a>
            <div className="project__descriptionContainer project__descriptionContainer1">
              <p className="project__description">
                Discover an immersive and intuitive interface designed
                specifically for drone enthusiasts. 📸🔍 With stunning visuals
                and seamless navigation, we make it easy for you to explore and
                purchase the latest drone models with confidence.{" "}
              </p>
              <div className="project__tags">
                React.js &nbsp; Express.js &nbsp; Node.js &nbsp; MongoDB &nbsp;
                Cloudinary &nbsp; ejs{" "}
              </div>
              <div className="project__icons project__icons1">
                <a
                  href="https://github.com/himanshuragi456/droneshop-frontend"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  href="https://droneshop-hr.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="project__right">
            <img
              className="project__img"
              src="https://res.cloudinary.com/djxpqemkk/image/upload/v1688021914/Screenshot_2023-06-29_at_12.22.56_PM_akunkc.png"
              alt="yelpcap campgrounds"
            />
          </div>
        </section>
      </LazyLoad>
      <LazyLoad once height={400}>
        <section className="project__section project__section3">
          <div className="project__left">
            <img
              className="project__img"
              src="https://res.cloudinary.com/djxpqemkk/image/upload/v1686734425/Screenshot_2023-06-12_at_4.19.09_PM_pkwsof.png"
              alt="online grocery store"
            />
          </div>
          <div className="project__right">
            <h3 className="project__headingTertiary">Featured Project</h3>
            <a
              href="https://www.whimstay.com/"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>WhimStay (Hotel Booking Platform)</h2>
            </a>
            <div className="project__descriptionContainer">
              <p className="project__description">
                The project entailed creating a hotel booking website with all
                the complex cancellation, payment, booking processes.
                <br />
                <br />
              </p>
              <div className="project__tags">
                {" "}
                Python &nbsp; Django &nbsp; Bootstrap &nbsp; HTML/CSS &nbsp;
                javascript
              </div>
              <div className="project__icons">
                {/* <a
                  href="https://github.com/yashfalke77/Online-Grocery-Store"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a> */}
                <a
                  href="https://www.whimstay.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="project__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoad>

      {/* --------------------------------------------------- for Mobiles ----------------------------------------------------------------- */}

      <ul className="projectResp__list">
        <li className="projectResp__items projectResp__items1">
          <div className="projectResp__card">
            <div className="projectResp__cardTop">
              <svg className="projectResp__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="projectResp__cardLink">
                <a
                  href="https://github.com/himanshuragi456/crocs-web"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  href="https://crocs-josh.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="projectResp__cardBody">
              <div className="projectResp__cardBodyHeading">Crocs</div>
              <p className="projectResp__cardBodyDescription">
                {`Crocs may want a better website. 😛
                  | Made with Vue.js and loads of animations in it! 🚀
                  | custom cursor!
                  | UI perfectly fitting in Crocs business values
                  | smooth and beautiful animations ❤️`}
              </p>{" "}
            </div>
            <div className="projectResp__cardFooter">
              <div className="projectResp__tags">
                {" "}
                Next.js &nbsp; React.js &nbsp; Node.js &nbsp; MongoDB &nbsp;
                Express.js &nbsp; SCSS/SASS
              </div>
            </div>
          </div>
        </li>
        <li className="projectResp__items  projectResp__items2">
          <div className="projectResp__card">
            <div className="projectResp__cardTop">
              <svg className="projectResp__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="projectResp__cardLink">
                <a
                  href="https://github.com/himanshuragi456/droneshop-frontend"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a>
                <a
                  href="https://droneshop-hr.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="projectResp__cardBody">
              <div className="projectResp__cardBodyHeading">
                Drone Shop (E- commerce)
              </div>
              <p className="projectResp__cardBodyDescription">
                Discover an immersive and intuitive interface designed
                specifically for drone enthusiasts. 📸🔍 With stunning visuals
                and seamless navigation, we make it easy for you to explore and
                purchase the latest drone models with confidence.
              </p>
            </div>
            <div className="projectResp__cardFooter">
              <div className="projectResp__tags">
                {" "}
                React.js &nbsp; Express.js &nbsp; Node.js &nbsp; MongoDB &nbsp;
                Cloudinary &nbsp; ejs
              </div>
            </div>
          </div>
        </li>
        <li className="projectResp__items projectResp__items3">
          <div className="projectResp__card">
            <div className="projectResp__cardTop">
              <svg className="projectResp__cardFolder">
                <use href="icons/symbol-defs.svg#icon-folder"></use>
              </svg>
              <div className="projectResp__cardLink">
                {/* <a
                  href="https://github.com/yashfalke77/Natours-project"
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: "1.6rem" }}
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-github"></use>
                  </svg>
                </a> */}
                <a
                  href="https://www.whimstay.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="projectResp__icon">
                    <use href="icons/symbol-defs.svg#icon-external-link"></use>{" "}
                  </svg>
                </a>
              </div>
            </div>
            <div className="projectResp__cardBody">
              <div className="projectResp__cardBodyHeading">
                Whimay (Hotel Booking Platform)
              </div>
              <p className="projectResp__cardBodyDescription">
                The project entailed creating a hotel booking website with all
                the complex cancellation, payment, booking processes.
                <br />
                <br />
                An Django application with email based authentication and uses
                cookies - sessions
              </p>
            </div>
            <div className="projectResp__cardFooter">
              <div className="projectResp__tags">
                {" "}
                Python &nbsp; Django &nbsp; Bootstrap &nbsp; HTML/CSS &nbsp;
                javascript
              </div>
            </div>
          </div>
        </li>
      </ul>

      <span className="sectiontag">&lt;/section&gt;</span>
    </div>
  );
};

export default Project;
