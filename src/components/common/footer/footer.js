import React from 'react';
import fLogo from '../../../static/assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="footer_wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-6 col-xs-12">
                        <div className="footer_single_item pr_100 wow fadeInUp">
                            <div className="footer_logo">
                                <a href="#">
                                    <img src={fLogo} alt="logo" />
                                </a>
                            </div>
                            <p className="footer_content">Zonked quaint Charles mufty Harry Jeffrey chap me old mucker,
                                Richard dropped a clanger a load of old tosh hunky-dory Why do one quaint super.!</p>
                            <p className="copy_right mb_hide">© 2019 All Right Reserved Design by <a
                                href="#">DroitThemes</a></p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer_single_item wow fadeInUp">
                            <h3 className="footer_title">Company Links</h3>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <ul className="footer_menu">
                                        <li><a href="#">History</a></li>
                                        <li><a href="#">Team &amp; Awards</a></li>
                                        <li><a href="#">Community</a></li>
                                        <li><a href="#">News &amp; Events</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <ul className="footer_menu">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Sustainability</a></li>
                                        <li><a href="#">Support Area</a></li>
                                        <li><a href="#">Shop</a></li>
                                        <li><a href="#">Projects</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="footer_single_item wow fadeInUp">
                            <h3 className="footer_title">Contact Info</h3>
                            <ul className="contact_address">
                                <li>
                                    <span className="address_left">Address:</span>
                                    <span className="address_right">1020 Avnew 9, Mirpur 12 Dhaka, USA </span>
                                </li>
                                <li>
                                    <span className="address_left">Phone:</span>
                                    <span className="address_right"><a href="#">+964 457 96 442</a> </span>
                                </li>
                                <li>
                                    <span className="address_left">E-mail:</span>
                                    <span className="address_right"><a
                                        href="mailto:info@droitlab.com">info@droitlab.com</a> </span>
                                </li>
                            </ul>
                            <ul className="footer_social_menu">
                                <li><a href="#"><i className="social_facebook"></i></a></li>
                                <li><a href="#"><i className="social_twitter"></i></a></li>
                                <li><a href="#"><i className="social_pinterest"></i></a></li>
                                <li><a href="#"><i className="social_linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12">
                        <div className="footer_single_item mb_show">
                            <p className="copy_right">© 2019 All Right Reserved Design by <a href="#">DroitThemes</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;