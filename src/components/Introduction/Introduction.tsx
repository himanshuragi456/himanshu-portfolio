import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../AnimatedLetters";
import "./introduction.scss";

const Introduction = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = "Himanshu,".split("");
  const jobArray = "oftware Engineer".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  });

  return (
    <div className="intro">
      <div className="intro__left">
        <span className="sectiontag">&lt;section&gt;</span>
        <h1 className="intro__headingPrimary">
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>&nbsp;
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>&nbsp;
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <img
            src="https://res.cloudinary.com/dhbiouaym/image/upload/v1663667972/Portfolio/logo-s_fna9e6.png"
            className="intro__logos"
            alt=""
          />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={19}
          />
        </h1>
        {/* <h2 className="intro__headingSecondary">
          Full Stack Developer / Software Engineer
        </h2> */}
        <h2 className="intro__headingSecondary">
          I can build MERN Projects from Design to Development, be it E-commerce, Web3, Employee Management or Custom Application
        </h2>
        <Link to="/contact" className="intro__button">
          Contact Me
        </Link>
        <span className="sectiontag">&lt;/section&gt;</span>
      </div>
      <div className="intro__right">
        <div className="logo__outline">
          <svg
            id="yash"
            width="49rem"
            height="49.5rem"
            viewBox="0 0 491 538"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M388.5 72.5L322.5 247L207.5 217L278.5 37L193.5 12L166 0.5"
              stroke="#FFD700"
            />
            <path
              d="M223 501.5L294 311L183 278.5L104.5 481L26.5 455.5L1.5 441L165 0.5"
              stroke="#FFD700"
            />
            <path
              d="M407.5 319.5L490 103.5L415 81.5L387.5 70.5"
              stroke="#FFD700"
            />
            <path
              d="M407.5 319.5L323.5 536.5L250 512.5L223 501.5"
              stroke="#FFD700"
            />
            <path d="M164.5 3.5L86.5 212.5" stroke="#FFD700" />
          </svg>
        </div>
        <div className="logo__fill">
          <svg
            width="49rem"
            height="49.5rem"
            viewBox="0 0 491 539"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M193.744 12L279.261 34.7323L204.677 225.431L343.399 262.055L321.577 319.517L414.409 80.8283L490 102.298L323.495 538L247.956 513.373L321.577 319.517L182.291 278.473L104.409 481.801L25 455.911L92.9557 278.473L193.744 12Z"
              fill="#115173"
            />
            <path
              d="M204.677 225.431L279.261 34.7323L193.744 12L92.9557 278.473L25 455.911L104.409 481.801L182.291 278.473M204.677 225.431L343.399 262.055M204.677 225.431L182.291 278.473M343.399 262.055L321.577 319.517M343.399 262.055L247.956 513.373L323.495 538L490 102.298L414.409 80.8283L321.577 319.517M321.577 319.517L182.291 278.473"
              stroke="#115173"
            />
            <path
              d="M223 501.5L248 513L321 320L295.5 312L223 501.5Z"
              fill="#FFD700"
              stroke="#FFD700"
            />
            <path
              d="M317.5 255L343.5 261.5L414 80.5L387.5 70L317.5 255Z"
              fill="#FFD700"
              stroke="#FFD700"
            />
            <path
              d="M1.5 441.5L25.0001 455L193.527 11.9999L165.5 1.0704L1.5 441.5Z"
              fill="#FFD700"
              stroke="#FFD700"
            />
            <path
              d="M208.5 217.5L321 248.5L318 255L205.5 224.5L208.5 217.5Z"
              fill="#FFD700"
              stroke="#FFD700"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
