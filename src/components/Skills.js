import React, { useState, useEffect, useRef } from 'react';
import "./skill.css";

const Skills = () => {
    const skillsSectionRef = useRef(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);
    const [animationTriggered, setAnimationTriggered] = useState(false);

    const [progress, setProgress] = useState([
        { name: 'HTML', progress: 0, maxProgress: 80 },
        { name: 'CSS', progress: 0, maxProgress: 80 },
        { name: 'Bootstrap', progress: 0, maxProgress: 70 },
        { name: 'JavaScript', progress: 0, maxProgress: 60 },
        { name: 'React', progress: 0, maxProgress: 65 },
    ]);

    const [rightProgress, setRightProgress] = useState([
        { name: 'Java', progress: 0, maxProgress: 50 },
        { name: 'PHP', progress: 0, maxProgress: 60 },
        { name: 'Laravel', progress: 0, maxProgress: 80 },
        { name: 'MySQL', progress: 0, maxProgress: 70 },
        { name: 'Android', progress: 0, maxProgress: 30 },
    ]);

    const scrollToSkills = () => {
        if (skillsSectionRef.current) {
            // Trigger animations for both columns
            handleScroll(leftColumnRef, setProgress);
            handleScroll(rightColumnRef, setRightProgress);
        }
    };

    const handleScroll = (ref, setState) => {
        if (!animationTriggered && ref.current) {
            const rect = ref.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setAnimationTriggered(true);
                setTimeout(() => {
                    setState(prevProgress => prevProgress.map(bar => ({ ...bar, progress: bar.maxProgress })));
                }, 1000);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', () => handleScroll(skillsSectionRef, setProgress));
        window.addEventListener('scroll', () => handleScroll(leftColumnRef, setProgress));
        window.addEventListener('scroll', () => handleScroll(rightColumnRef, setRightProgress));

        return () => {
            window.removeEventListener('scroll', () => handleScroll(skillsSectionRef, setProgress));
            window.removeEventListener('scroll', () => handleScroll(leftColumnRef, setProgress));
            window.removeEventListener('scroll', () => handleScroll(rightColumnRef, setRightProgress));
        };
    }, []);

    return (
        <section className='container mt-5' ref={skillsSectionRef}>
            <h1 className='skill-title'>My Skills</h1>
            <div className='row pt-5'>
                <div className='col-md-6 ps-5 pe-5' ref={leftColumnRef}>
                    <h3 className="text-center">Fronted</h3>
                    {progress.map((bar, index) => (
                        <div key={index}>
                            <div className='d-flex justify-content-between'>
                                <span>{bar.name}</span>
                                <span>{bar.progress}%</span>
                            </div>
                            <div className="progress mb-5" style={{ height: "10px" }}>
                                <div className="progress-bar progress-background" style={{ width: `${bar.progress}%` }} aria-valuenow={bar.progress} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    ))}


                </div>

                <div className='col-md-6 ps-5 pe-5' ref={rightColumnRef}>
                    <h3 className="text-center">Backend</h3>
                    {rightProgress.map((bar, index) => (
                        <div key={index}>
                            <div className='d-flex justify-content-between'>
                                <span>{bar.name}</span>
                                <span>{bar.progress}%</span>
                            </div>
                            <div className="progress mb-5" style={{ height: "10px" }}>
                                <div className="progress-bar progress-background" style={{ width: `${bar.progress}%` }} aria-valuenow={bar.progress} aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Skills