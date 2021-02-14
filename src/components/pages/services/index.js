import React, {Component} from 'react';
import ContactSection from "../../common/sections/contact";
import InnerBanner from "../../common/sections/innerBanner/innerBanner";
import ServicesDetailsContent from "../../common/sections/services/servicesDetailsContent";
import ServiceList from "./serviceList";
import bgImg from '../../../static/assets/images/service_bg.jpg';

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={'serviceWrap'}>
                <InnerBanner title={'Services'} bgImg={bgImg}/>
                <br/>
                <br/>
                <br/>
                <ServicesDetailsContent/>
                <ServiceList/>
                <br/>
                <br/>
                <br/>
                <br/>
                <ContactSection/>

            </div>
        );
    }
}

export default Service;