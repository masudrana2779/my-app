import  React from 'react';
import InnerBanner from "../../common/sections/innerBanner/innerBanner";
import ContactInfo from "./contactInfo";
import ContactInfoForm from "./ContactInfoForm";
import ContactMap from "./ContactMap";
import bgImg from '../../../static/assets/images/contact_us_bg.jpg';

const Contact = () => {
    return (
        <div className={'contactWrap'}>
            <InnerBanner title={'Contact Us'} bgImg={bgImg}/>
            <ContactInfo />
            <ContactInfoForm />
            <ContactMap />
        </div>
    )
}
export default Contact;