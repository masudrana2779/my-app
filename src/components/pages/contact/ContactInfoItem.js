import React from 'react';

const ContactInfoItem = () => {
    return(
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
    )
}
export default ContactInfoItem;