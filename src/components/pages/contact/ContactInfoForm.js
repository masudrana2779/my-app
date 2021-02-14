import React from 'react';

const ContactInfoForm = () => {
    return (
        <section className="contact_form_wrap pb_100">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <p className="text-center get_touch wow fadeInUp">Get In Touch</p>
                        <h3 className="get_touch_title text-center wow fadeInUp">Let’s work together</h3>
                        <div className="form_body wow fadeInUp">
                            <form action="#" method="post" className="contact-form">
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12 form-group">
                                        <input type="text" className="form-control" name="author" placeholder="Name"
                                               requiredb/>
                                    </div>
                                    <div className="col-sm-6 col-xs-12 form-group">
                                        <input type="text" className="form-control" name="author" placeholder="Phone "/>
                                    </div>
                                    <div className="col-sm-6 col-xs-12 form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Email"
                                               required/>
                                    </div>
                                    <div className="col-sm-6 col-xs-12 form-group">
                                        <input type="url" className="form-control" placeholder="Website"/>
                                    </div>
                                    <div className="col-sm-12 col-xs-12 form-group">
                                        <textarea name="comment" className="form-control" placeholder="Your Comment"
                                                  required></textarea>
                                    </div>
                                    <div className="col-sm-12 col-xs-12 form-group">
                                        <div className="form-submit text-center">
                                            <input name="submit" type="submit" className="btn sub_btn"
                                                   value="Send message"/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactInfoForm;