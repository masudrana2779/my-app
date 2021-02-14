import React, {Component} from 'react';
import Header from "../../common/header/header";
import HomeBanner from "../../common/sections/HomeBanner/homeBanner";
import ServiceSectionWrap from "../../common/sections/services";
import AboutSection from "../../common/sections/about";
import SubscriptionSection from "../../common/sections/subscription";
import LatestWork from "../../common/sections/latestWork";
import ClientFeedBack from "../../common/sections/clientFeedback";
import ContactSection from "../../common/sections/contact";
import Footer from "../../common/footer/footer";

class Home extends Component {
    render() {
        return (
            <div className={'homeWrap'}>
                <HomeBanner />
                <ServiceSectionWrap />
                <AboutSection />
                <SubscriptionSection />
                <LatestWork />
                <ClientFeedBack />
                <ContactSection />
            </div>
        );
    }
}

export default Home;