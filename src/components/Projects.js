import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.css";
import { AiOutlineGithub } from "react-icons/ai";
import { RiLiveLine } from "react-icons/ri";

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", borderRadius: "100%" }}
            onClick={onClick}
        />
    );
}

const projectData = [
    {
        title: "Product Registration System",
        technologies: "Laravel, JavaScript, JQuery",
        description: "The standard chunk of Lorem Ipsum...",
        imageSrc: "photos/project1.jpg",
        liveDemoLink: "#",
        codeLink: "#"
    },
    {
        title: "Travel Agency",
        technologies: "HTML , CSS , Bootstrap",
        description: "The standard chunk of Lorem Ipsum...",
        imageSrc: "photos/project2.jpg",
        liveDemoLink: "#",
        codeLink: "#"
    },
    {
        title: "Shopping At My Store",
        technologies: "React",
        description: "The standard chunk of Lorem Ipsum...",
        imageSrc: "photos/project3.jpg",
        liveDemoLink: "#",
        codeLink: "#"
    },
    {
        title: "Product Registration System",
        technologies: "Laravel, JavaScript, JQuery",
        description: "The standard chunk of Lorem Ipsum...",
        imageSrc: "photos/project1.jpg",
        liveDemoLink: "#",
        codeLink: "#"
    },
    {
        title: "Travel Agency",
        technologies: "HTML , CSS , Bootstrap",
        description: "The standard chunk of Lorem Ipsum...",
        imageSrc: "photos/project2.jpg",
        liveDemoLink: "#",
        codeLink: "#"
    },
    {
        title: "Shopping At My Store",
        technologies: "React",
        description: "The standard chunk of Lorem Ipsum...",
        imageSrc: "photos/project3.jpg",
        liveDemoLink: "#",
        codeLink: "#"
    },



];
function Projects() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1020,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className="card-container">
            <h2 className="project-title"> My Projects</h2>
            <Slider {...settings} className="">
                {projectData.map((project, index) => (
                    <div className="card me-5" key={index}>
                        <img className="card-img-top" src={project.imageSrc} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title mt-3 mb-2">{project.title}</h5>
                            <h6 className="card-title">{project.technologies}</h6>
                            <div className="d-flex justify-content-between mt-4 me-4 mb-2 ">
                                <a href={project.liveDemoLink} className="btn button px-3 text-light">
                                    <RiLiveLine className="me-2 fs-4 text-light" />Demo
                                </a>
                                <a href={project.codeLink} className="btn button px-3 text-light">
                                    <AiOutlineGithub className="me-2 text-light fs-3" />Code
                                </a>
                            </div>
                        </div>
                        <div className="card-description">
                            <h3 className="mb-5">Description</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>

                ))
                }

            </Slider >
        </section >
    );
}

export default Projects;