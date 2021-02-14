import React from 'react';
import banner_bg1 from '../../../../static/assets/images/banner_bg1.jpg';
import banner_bg from '../../../../static/assets/images/banner_bg.jpg';
import Slider from "react-slick";
import HomeBannerSliderItem from "./HomeBannerSliderItem";

const HomeBanner = () => {

    const bgImgs = [
        banner_bg1,
        banner_bg
    ]

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: true,
        dots: false,
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 880,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
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
        <section className="home_banner_wrap">
            <div className="banner_slider_content">
                <Slider className="banner_slider" {...settings}>
                    {
                        bgImgs.map((bgImg,i) =>
                            <HomeBannerSliderItem bannerBgImg={bgImg} key={i} />
                        )
                    }
                </Slider>
            </div>
        </section>
    )
}
export default HomeBanner;