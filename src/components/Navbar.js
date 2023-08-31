import { useEffect, useState } from "react";
import { FaBars } from 'react-icons/fa';
import { ImCross, ImSun } from 'react-icons/im';
import { BsMoonStarsFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { useTheme } from "../Theme/ThemeProvider";
import "./navbar.css";



const Navbar = () => {
    const [mobile, setMobile] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (linkId) => {
        setActiveLink(linkId);
    };

    const closeMobileMenu = () => {
        setMobile(false);
    };

    const updateMobileState = () => {
        if (window.innerWidth > 768) {
            setMobile(false);
        }
    };


    useEffect(() => {

        updateMobileState();
        window.addEventListener("resize", updateMobileState);
        console.log("Hello");


        return () => {
            window.removeEventListener("resize", updateMobileState);
        };
    }, []);
    return (
        <>
            <nav className={`navbar ${isDarkMode ? 'dark-theme' : ''}`}>
                <img className="logo" src="photos/pflogo(1).png" style={{ width: 100, height: 100 }} />
                <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
                    {mobile ? <ImCross /> : <FaBars />}
                </button>


                <ul className={mobile ? "nav-links-mobile" : "nav-links"}>
                    <li className="nav-item "><Link to="about" smooth={true} onClick={closeMobileMenu} activeClass="active" spy={true} offset={-70} duration={300} >About Me</Link></li>
                    <li className="nav-item "> <Link to="skills" smooth={true} onClick={closeMobileMenu} activeClass="active" spy={true} offset={-70} duration={300} >Skills</Link></li>
                    <li className="nav-item "> <Link to="projects" smooth={true} onClick={closeMobileMenu} activeClass="active" spy={true} offset={-70} duration={300} >Projects</Link></li>
                    <li className="nav-item "> <Link to="contact" smooth={true} onClick={closeMobileMenu} activeClass="active" spy={true} offset={-70} duration={300} >Contact</Link></li>
                    <li onClick={() => { toggleTheme(); closeMobileMenu(); }}>
                        {isDarkMode ? <ImSun /> : <BsMoonStarsFill />}
                    </li>
                </ul>
            </nav >
        </>
    );
};

export default Navbar;
