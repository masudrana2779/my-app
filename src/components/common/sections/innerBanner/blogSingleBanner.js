import React from "react";

const BlogSingleBanner = ({title}) => {
    return (
        <section className="banner_wrap blog_single_banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="blog_sing_content">
                            <p className="sing_sub_title text-center wow fadeInUp"><span>Construction</span></p>
                            <h3 className="sing_title text-center wow fadeInUp">Why I say old chap that is, spiffing
                                blow off he nicked it the wireless up the duff.</h3>
                            <h6 className="text-center post_info wow fadeInUp">March 20, 2019 <span>/</span> by Hanson
                                Deck</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogSingleBanner;