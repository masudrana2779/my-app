import React, {useState} from 'react';
import logo from '../../../static/assets/images/logo.png';
import phoneIcon from '../../../static/assets/images/phone-icon.png';
import {about, blog, contact, home, services} from "../../../route";
import {Nav, Navbar} from "react-bootstrap";
import {Link, NavLink} from "react-router-dom";

const Header = () => {


    const [scrollTopValue, setSTValue] = useState(0);

    window.onscroll = function () {
        setSTValue(window.pageYOffset);
    }
    return (
        <header className={(scrollTopValue > 0) ? "header fixedMenu" : "header"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar className="navbar navbar-expand-lg navbar_header" expand="lg">
                            <Link className="navbar-brand logo" to={home}>
                                <img src={logo} alt="logo"/>
                            </Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav">
                                <p>Bar</p>
                            </Navbar.Toggle>

                            <Navbar.Collapse className="header_menu" id="basic-navbar-nav">
                                <Nav className="navbar-nav ml-auto">
                                    <li>
                                        <NavLink  to={home}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={about}>about</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={services}>Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={blog}>Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={contact}>Contact</NavLink>
                                    </li>
                                </Nav>
                                <div className="contact_Us">
                                    <div className="icon"><img src={phoneIcon} alt="icon"/></div>
                                    <div className="contact">
                                        <p className="primary-color con_text"> Call us now: </p>
                                        <p className="con_link brand-color"><a href="#">964 643 475</a></p>
                                    </div>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;