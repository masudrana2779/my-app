import React from "react";

const InnerBanner = ({title,bgImg}) => {
    return (
        <section className="banner_wrap" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="about_banner_content">
                            <h1 className="text-center about_title wow fadeInUp">{title}</h1>
                            <ul className="breadcrumb wow fadeInUp">
                                <li><a href="/">Home</a></li>
                                <li><a href="#">{title}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InnerBanner;