import React from 'react';
import service_img_1 from '../../../../static/assets/images/services-img-1.jpg';
import service_img_2 from '../../../../static/assets/images/services-img-2.jpg';
import service_img_3 from '../../../../static/assets/images/services-img-3.jpg';
import ServicesSingleItem from "./servicesSingleItem";
import ServicesDetailsContent from "./servicesDetailsContent";

const ServiceSectionWrap = () => {
    return(
        <section className="services_wrap">
            <div className="services_images_wrap mtm_120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <ServicesSingleItem serviceImg={service_img_1} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <ServicesSingleItem serviceImg={service_img_2} />
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <ServicesSingleItem serviceImg={service_img_3} />
                        </div>
                    </div>
                </div>
            </div>
            <ServicesDetailsContent />
        </section>
    )
}
export default ServiceSectionWrap;