import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook, FaLocationArrow } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import './about.css';
import { Link } from 'react-scroll';


const About = () => {
    const [displayText, setDisplayText] = useState('');
    useEffect(() => {
        const textToType = 'Ying Mo Hom';
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            if (currentIndex <= textToType.length) {
                setDisplayText(textToType.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 150);

        return () => clearInterval(typingInterval);
    }, []);


    return (
        <>
            <section className="section">
                <div className='social-link' id="social-links">
                    <a href="https://github.com/ying-mohom"><AiFillGithub /></a>
                    <a href="https://www.facebook.com/profile.php?id=100015051600955&mibextid=ZbWKwL"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/ying-mo-hom"><AiFillLinkedin /></a>
                </div>
                <div div className="main" >
                    <div className="image">
                        <img src="photos/work.png" alt="MyVectorImage" style={{ width: 450, height: 450 }} />
                    </div>
                    <div className="right">
                        <p>Hi There</p>
                        <h1 className="title">
                            I'm <span className="name">{displayText}</span>
                        </h1>
                        <h2 className="position">Junior Web Developer</h2>
                        <p className="text"> I'm a passionate Junior Web Developer dedicated to crafting innovative and engaging web experiences. With a foundation in HTML, CSS, and JavaScript, I thrive on turning ideas into reality. </p>

                        <a href="cv/YingMoHomCV.pdf" className="no-decoration" download={true}> <button className="resume">Download CV</button></a>
                        <div className="mouse-container">
                            <Link to="skills">
                                <div className="d-flex justify-content-between">
                                    <div className="mouse"></div>
                                    <span className="scroll-text ps-2 pt-3 ">Scroll Down</span>
                                </div>
                            </Link>
                        </div>
                        {/* <Link to="contact"><button className="contact">
                            <div className="button-content">
                                Contact Me<BsArrowRightShort className="arrow-icon" />
                            </div>
                      </button></Link> */}
                    </div>
                </div >
            </section >




        </>


    )
}

export default About;