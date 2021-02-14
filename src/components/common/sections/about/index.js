import  React from 'react';
import about_img from '../../../../static/assets/images/about_img.jpg'

const AboutSection  = () => {
    return (
        <section className="about_us">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="about_img_wrap wow fadeInLeft">
                            <div className="about_img">
                                <img src={about_img} alt="about" className="img-fliud" />
                                    <div className="trusted">
                                        <div className="trusted_content">
                                            <p>Trusted By</p>
                                            <h2>5860</h2>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="about_content wow fadeInRight">
                            <h2 className="title about_title">Running a successful business Since 1975</h2>
                            <p className="about_para">On your bike mate bog-standard burke cobblers cheesed off bubble
                                and squeak tomfoolery cor blimey guvnor nice one arse hotpot James Bond, happy days mush
                                tinkety tonk old fruit no biggie matie boy bleeder bodge cup of char cockup bleeding
                                old.</p>
                            <p className="about_para"><em>Cuppa butty lurgy get stuffed mate cracking goal blag chinwag
                                spiffing good time bevvy tomfoolery.!</em></p>
                            <div className="btn_group">
                                <a href="#" className="btn_glob learn_more">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutSection;