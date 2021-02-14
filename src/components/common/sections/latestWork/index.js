import React from 'react';
import LatestWorkItem from "./latestWorkItem";
import Slider from "react-slick";

import latest_work_img_1 from '../../../../static/assets/images/latest_work_img_1.jpg';
import latest_work_img_2 from '../../../../static/assets/images/latest_work_img_2.jpg';
import latest_work_img_3 from '../../../../static/assets/images/latest_work_img_3.jpg';
import linkIcon from '../../../../static/assets/images/link_icon.png';

const LatestWork = ({name,social ,type }) => {

    const latestWrkImgs = [
        latest_work_img_1,
        latest_work_img_2,
        latest_work_img_3,
        latest_work_img_2
    ]

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 2000,
        arrows: false,
        dots: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
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
        <section className="latest_work_wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12 wow fadeInUp">
                        <h2 className="title latest_work_title text-center">Construct is a general contracting group
                            that has gained its expertise complete work</h2>
                    </div>
                </div>
                <Slider className="row latest_work_slider" {...settings}>
                    {latestWrkImgs.map((latestWrkImg, i) =>
                        <LatestWorkItem latestWrkImg={latestWrkImg} linkIcon={linkIcon} link={'#'} key={i} name={name} social={social} type={type}/>
                    )}
                </Slider>
            </div>
        </section>
    )
}
export default LatestWork;