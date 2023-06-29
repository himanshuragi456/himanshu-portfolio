import AnimatedLetters from 'components/AnimatedLetters'
import React, { useState, useEffect, useRef } from 'react'
import "styles/contact.scss"
import Map, { Marker } from 'react-map-gl';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


const Contact = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = "Contact me".split("")
    const [Name, setName] = useState("")
    const [Number, setNumber] = useState("")
    const [Email, setEmail] = useState("")
    const [Message, setMessage] = useState("")
    const [Country, setCountry] = useState("")

    const navigate = useNavigate()


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000)
    })

    const Form = useRef(null)
    // const inputRef2 = useRef(null)
    // const inputRef3 = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h9wxy6g', 'template_83qiua8', Form.current, 'iAneWvGu0uNrSlhI3')
            .then((result) => {
                console.log(result.text);
                window.alert("Mail Sent Successfully!!!")
                navigate('/')
            }, (error) => {
                console.log(error.text);
            });

    };


    return (
        <div className='contact'>
            <div className="contact__left">
                <span className="tag" style={{ padding: "0rem" }}>&lt;body&gt;</span>
                <h1 className="about__headingPrimary">
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
                <p className='contact__description'>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className="form">
                    <form ref={Form} onSubmit={sendEmail}>
                        <div className="form__group">
                            <input name="user_name" value={Name} onChange={(e) => setName(e.target.value)} type="text" className="form__input" id="name" placeholder="Full Name" required />
                            <label htmlFor="name" className="form__label">Full Name</label>
                        </div>
                        <div className="form__group">
                            <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} name="user_email" className="form__input" id="email" placeholder="Email Address" required />
                            <label htmlFor="email" className="form__label">Email Address</label>
                        </div>
                        <div className="form__group">
                            <input type="text" value={Number} onChange={(e) => setNumber(e.target.value)} name="user_number" className="form__input" id="number" placeholder="Contact (Number or Skype ID)" />
                            <label htmlFor="number" className="form__label">Contact (Number or Skype ID)</label>
                        </div>
                        <div className="form__group">
                            <input type="text" value={Country} onChange={(e) => setCountry(e.target.value)} name="user_country" className="form__input" id="country" placeholder="Country" />
                            <label htmlFor="country" className="form__label">Country</label>
                        </div>
                        <div className="form__group">
                            <textarea name="message" value={Message} onChange={(e) => setMessage(e.target.value)} className="form__input" id="email" placeholder="Message" required />
                            <label htmlFor="email" className="form__label">Message</label>
                        </div>
                        <button value="Send" className="intro__button">
                            Send Mail
                        </button>
                    </form>
                </div>
                <span className="tag" style={{ padding: "0rem" }}>&lt;body&gt;</span>
            </div>
            <div className="contact__right">
                <Map
                    mapboxAccessToken='pk.eyJ1IjoieWFzaGZhbGtlNzciLCJhIjoiY2t1MjQ2Z2cwMmxjazJvbXI2OGk5b2V0dSJ9.BGnMIJbpa2OzthfRTtTP6w'
                    initialViewState={{
                        longitude: 75.8706,
                        latitude: 24.7458,
                        zoom: 4.5
                    }}
                    // style={{ width: "100%", height: "100%" }}
                    mapStyle="mapbox://styles/yashfalke77/cl89ugdbm001q14rth35g4qth"
                >
                    <Marker latitude={22.74586} longitude={75.87069}>
                        <button className='map__button'>
                            <svg width="40" height="132" viewBox="0 0 420 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_405_4)">
                                    <path d="M235 473C173.283 420.483 127.188 371.704 96.7125 326.663C66.2375 281.621 51 239.933 51 201.6C51 144.1 69.4958 98.2917 106.487 64.175C143.479 30.0583 186.317 13 235 13C283.683 13 326.521 30.0583 363.512 64.175C400.504 98.2917 419 144.1 419 201.6C419 239.933 403.763 281.621 373.288 326.663C342.812 371.704 296.717 420.483 235 473Z" fill="#0A192F" />
                                </g>
                                <svg viewBox="-8 -87 190 552">
                                <path d="M3.96087 228.032L0.509835 30.9683C0.228261 14.8896 13.035 1.66392 29.1144 1.42786C45.1938 1.1918 58.457 14.0348 58.7386 30.1135L62.1896 227.178C62.4712 243.256 49.6645 256.482 33.5851 256.718C17.5057 256.954 4.24245 244.111 3.96087 228.032Z" fill="#FFD700" stroke="#FFD700"/>
<path d="M142.928 155.535L100.793 156.538C86.0724 156.889 73.7997 145.241 73.3815 130.522C72.9633 115.803 84.558 103.586 99.2789 103.235L141.414 102.232C156.135 101.881 168.407 113.529 168.826 128.248C169.244 142.968 157.649 155.184 142.928 155.535Z" fill="#FFD700" stroke="#FFD700"/>
<path d="M155.261 228.887L151.81 31.823C151.529 15.7443 164.336 2.5186 180.415 2.28254C196.494 2.04648 209.758 14.8895 210.039 30.9682L213.49 228.032C213.772 244.111 200.965 257.337 184.886 257.573C168.806 257.809 155.543 244.966 155.261 228.887Z" fill="#FFD700" stroke="#FFD700"/>
                                </svg>
                                <defs>
                                    <filter id="filter0_d_405_4" x="0" y="0" width="420" height="512" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dx="-25" dy="13" />
                                        <feGaussianBlur stdDeviation="13" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_4" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_4" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </button>
                    </Marker>
                </Map>
            </div>
        </div>
    )
}

export default Contact