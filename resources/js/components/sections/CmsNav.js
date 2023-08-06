import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./CmsNav.css";
import { FaList, FaCogs, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { Navbar } from "react-bootstrap";

function CmsNav() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [modalShow, setModalShow] = React.useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
        window.addEventListener("resize", showButton);
        // return {
        //   window.removeEventListener('resize', showButton)
        // }
    }, []);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Navbar className="navbar--custom sticky-left">
                    <Navbar.Brand href="/" onClick={closeMobileMenu}>
                        <img
                            alt="infinity logo"
                            src="../images/logo.png"
                            className="d-inline-block align-top navbar-icon"
                        />
                        RBG-DEV
                    </Navbar.Brand>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                <IoHome /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                <BsInfoSquareFill /> About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/services"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                <FaCogs />
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/projects"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                <FaList />
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contact"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                <MdContactMail /> Contact
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Button
                                    buttonStyle="btn--primary"
                                    buttonSize="btn--small"
                                >
                                    <FaUser /> Account
                                </Button>
                            ) : (
                                <Button
                                    buttonStyle="btn--primary"
                                    buttonSize="btn--small"
                                >
                                    <FaUser /> Account
                                </Button>
                            )}
                        </li>
                    </ul>
                </Navbar>
            </IconContext.Provider>
        </>
    );
}

export default CmsNav;
