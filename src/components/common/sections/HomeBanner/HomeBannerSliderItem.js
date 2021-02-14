import React from 'react';
const HomeBannerSliderItem = ({bannerBgImg,}) => {
    return (
        <div className="slider_item" style={{backgroundImage: `url(${bannerBgImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="baner_content">
                            <h2 className="banner_title text-center">We are focused <br /> On build strong
                                relations</h2>
                            <p className="banner_para text-center">Oxford on your bike mate bog that sloshed
                                horse play Why brilliant smashing, gormless matie boy brolly cup of char
                                grub jolly good barmy. </p>
                            <div className="btn_group text-center">
                                <a href="#" className="btn_glob btn_know_more">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeBannerSliderItem;