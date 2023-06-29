import AnimatedLettersFast from 'components/AnimatedlettersFast'
import React, { useState, useEffect } from 'react'
import "./otherProjects.scss"


const OtherProjects = () => {

    const [letterClass, setLetterClass] = useState("text-animate-fast")
    const nameArray = "Other Projects ".split("")


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-fast-hover")
        }, 4000)
    })

    return (
        <div className='other'>
            <span className="sectiontag">&lt;section&gt;</span>
            <div className="other__container">
                <h1 className="other__headingPrimary">
                    <AnimatedLettersFast letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
            </div>

            <ul className="other__list">
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/himanshuragi456/defi-exchange" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://defi-exchange-orpin.vercel.app/" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Defi Exchange</div>
                            <p className='other__cardBodyDescription'>
                            Cutting-edge development of our decentralized finance (DeFi) exchange launchpad, built using the latest MERN stack technologies</p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> Material UI &nbsp; Nextjs &nbsp; Mongodb &nbsp; jwt-auth</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/himanshuragi456/josh-it-works" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://joshitworks.com/" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Josh IT Works</div>
                            <p className='other__cardBodyDescription'>
                            Portfolio website for Josh IT Works. As a team of skilled professionals, we pride ourselves on delivering high-quality solutions tailored to meet our clients' unique needs. </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> Material UI &nbsp; React &nbsp; MongoDB &nbsp; Expressjs</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                {/* <a href="https://github.com/yashfalke77/Natours-project" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a> */}
                                <a href="https://sashawear.in/" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Sasha Eyewear</div>
                            <p className='other__cardBodyDescription'>
                                An E-commerce site for Sasha Eyewear, allowing them to scale and sale their products online, also equipped with order tracking and cancellation flow.
                            </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> SCSS / SASS &nbsp; UI / UX &nbsp; Nodejs &nbsp; HTML</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/himanshuragi456/thunderapp" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                <a href="https://thunderapp.co/" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                    <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Thunder App</div>
                            <p className='other__cardBodyDescription'>
                                A Mobile app for college introverts, where we help them find a circle with similar interests, leading to a happier and productive college life/enviroment.
                            </p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> React Native &nbsp; javascript &nbsp; Expo</div>
                        </div>
                    </div>
                </li>
                <li className="other__items">
                    <div className="other__card">
                        <div className="other__cardTop">
                            <svg className="other__cardFolder">
                                <use href="icons/symbol-defs.svg#icon-folder"></use>
                            </svg>
                            <div className='other__cardLink'>
                                <a href="https://github.com/himanshuragi456/decor-frontend" target='_blank' rel='noreferrer' style={{ marginRight: "1.6rem" }}>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-github"></use>
                                    </svg>
                                </a>
                                {/* <a href="https://youtu.be/HI5fYKvuo-8" target='_blank' rel='noreferrer'>
                                    <svg className="other__icon">
                                        <use href="icons/symbol-defs.svg#icon-external-link"></use>
                                    </svg>
                                </a> */}
                            </div>
                        </div>
                        <div className="other__cardBody">
                            <div className="other__cardBodyHeading">Decor shop</div>
                            <p className='other__cardBodyDescription'>
                            An E-commerce shop for Home decor items, uses Razorpay for payment integration and Ejs for admin panel template. The admin can dynamically add/remove products just from the admin panel.</p>
                        </div>
                        <div className="other__cardFooter">
                            <div className='other__tags'> Ejs &nbsp; React &nbsp; TypeScript &nbsp; Tailwind CSS</div>
                        </div>
                    </div>
                </li>
            </ul>
            <span className="sectiontag">&lt;/section&gt;</span>
        </div>
    )
}

export default OtherProjects