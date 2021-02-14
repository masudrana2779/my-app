import React from 'react';
import FeedSingleItem from "./feedbackItem";
import teamImg from '../../../../static/assets/images/team_img_1.png';
import Slider from "react-slick";

const ClientFeedBack = () => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className="feedback_wrap">
            <div className="container">
                <Slider className="row feedback_slider" {...settings}>
                    <div className="col-md-12 feedback_slide_item">
                        <FeedSingleItem teamImg={teamImg}/>
                    </div>
                    <div className="col-md-12 feedback_slide_item">
                        <FeedSingleItem teamImg={teamImg}/>
                    </div>
                </Slider>
            </div>
        </section>
    )
}
export default ClientFeedBack;