import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import './about.css';
import { Link } from 'react-scroll';


const About = () => {
    return (
        <section className="section">
            <div className='social-link'>
                <a href="#"><AiFillGithub /></a>
                <a href="#"><FaFacebook /></a>
                <a href="#"><AiFillLinkedin /></a>
                {/* <div className='vl'></div> */}
            </div>
            <div div className="main" >
                <div>
                    <p>Hi There</p>
                    <h1 className="title">I'm <span className="name">Ying Mo Hom</span></h1>
                    <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer  </p>
                    <Link to="resume"><button className="resume">Resume</button></Link>
                    <Link to="contact"><button className="contact">Contact</button></Link>
                    {/* <div className="social-link">
                        <a href="#"><AiFillGithub /></a>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><AiFillLinkedin /></a>
                    </div> */}

                </div>

                <div className="image">
                    <img src="photos/vector.jpg" alt="MyVectorImage" />
                </div>
            </div >
        </section >


    )
}

export default About;