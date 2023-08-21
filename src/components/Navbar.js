import { useEffect, useState } from "react";
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-scroll';
import "./navbar.css";



const Navbar = () => {
    const [mobile, setMobile] = useState(false);


    const closeMobileMenu = () => {
        setMobile(false);
    };

    const updateMobileState = () => {
        if (window.innerWidth > 768) {
            setMobile(false);
        }
    };

    //Clean Up function
    useEffect(() => {

        updateMobileState(); //Initial render

        //Render Component when window is resize
        window.addEventListener("resize", updateMobileState);
        console.log("Hello");


        return () => {
            window.removeEventListener("resize", updateMobileState);
        };
    }, []);
    return (
        <>
            <nav className="navbar">
                <p className="larger">Ying Mo Hom</p>


                <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
                    {mobile ? <ImCross /> : <FaBars />}
                </button>


                <ul className={mobile ? "nav-links-mobile" : "nav-links"}>
                    <li className="nav-item"><Link to="about" smooth={true} onClick={closeMobileMenu} activeClass="active" spy={true} offset={-70} duration={700}>About Me</Link></li>
                    <li className="nav-item"> <Link to="resume" smooth={true} onClick={closeMobileMenu} activeClass="active" spy={true} offset={-70} duration={700}>Resume</Link></li>
                    <li className="nav-item"> <Link to="projects" smooth={true} onClick={closeMobileMenu} activeClass="active" spy={true} offset={-70} duration={700}>Projects</Link></li>
                    <li className="nav-item"> <Link to="contact" smooth={true} onClick={closeMobileMenu} activeClass="active" spy={true} offset={-70} duration={700}>Contact</Link></li>
                </ul>
            </nav >
        </>
    );
};

export default Navbar;
