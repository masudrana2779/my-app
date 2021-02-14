import React from 'react';
const ContactInfo = () => {
    return(
        <section className="contact_info">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row contact_content">
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 cus_pad_left">
                                <div className="contact_info_single wow fadeInUp">
                                    <div className="media">
                                        <div className="media-left">
                                            <div className="icon">
                                                <i className="icon_pin_alt"></i>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div className="contact_info_content">
                                                <h5>Address</h5>
                                                <p>1020 Avnew 9, Mirpur 10 Dhaka, New York, USA</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 cus_pad_left">
                                <div className="contact_info_single wow fadeInUp">
                                    <div className="media">
                                        <div className="media-left">
                                            <div className="icon">
                                                <i className="icon_mobile"></i>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div className="contact_info_content">
                                                <h5>Infomation</h5>
                                                <p>Phone: +963 478 965 758 </p>
                                                <p>Mail: info@droitlab.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 cus_pad_left">
                                <div className="contact_info_single wow fadeInUp">
                                    <div className="media">
                                        <div className="media-left pr_30">
                                            <div className="icon">
                                                <i className="icon_clock_alt"></i>
                                            </div>
                                        </div>
                                        <div className="media-body">
                                            <div className="contact_info_content">
                                                <h5>Open hour</h5>
                                                <p>Monday - Friday: 09:30 - 20:00 </p>
                                                <p>Sunday &amp; Saturday: 10:30 - 22:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactInfo;