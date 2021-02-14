import  React from 'react';
import user_icon from '../../../../static/assets/images/user_icon.png';

const SubscriptionSection = () => {
    return(
        <section className="subscription_wrap">
            <div className="container">
                <div className="row align_center">
                    <div className="col-md-5 col-sm-5 col-xs-12  wow fadeInLeft">
                        <div className="client">
                            <div className="user_icon">
                                <img src={user_icon} alt="icon" />
                            </div>
                            <h2 className="client_count">460254</h2>
                            <p>Have Already Subscribed</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-7 col-xs-12">
                        <div className="subscribe_form  wow fadeInRight">
                            <form action="#">
                                <h3 className="form_title">Subscribe to Our Newsletter</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <span className="input_label">
                                        <input type="text" placeholder="Name" className="form-control" />
                                    </span>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-xs-12">
                                    <span className="input_label">
                                        <input type="text" placeholder="Email" className="form-control" />
                                    </span>
                                    </div>
                                    <div className="col-sm-12 col-xs-12">
                                    <span className="input_label">
                                        <input type="checkbox" id="privacy_policy" />
                                        <label htmlFor="privacy_policy" className="privacy">
                                            You accept the terms of service and the privacy policy
                                        </label>
                                    </span>
                                    </div>
                                    <div className="col-sm-12 col-xs-12">
                                        <div className="btn_group">
                                            <input type="submit" className="btn_glob subs_btn" />
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
export default SubscriptionSection;