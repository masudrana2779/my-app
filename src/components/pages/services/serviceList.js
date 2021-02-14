import React from 'react';
import ServicesSingleItem from "../../common/sections/services/servicesSingleItem";
import service_img_1 from "../../../static/assets/images/services-img-1.jpg";
import service_img_2 from "../../../static/assets/images/services-img-2.jpg";
import service_img_3 from "../../../static/assets/images/services-img-3.jpg";
import service_img_4 from "../../../static/assets/images/services-img-4.jpg";
import service_img_5 from "../../../static/assets/images/services-img-5.jpg";
import service_img_6 from "../../../static/assets/images/services-img-6.jpg";

const ServiceList = () => {
    return(
        <div className={'serviceListWrap'}>
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
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <ServicesSingleItem serviceImg={service_img_4} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <ServicesSingleItem serviceImg={service_img_5} />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <ServicesSingleItem serviceImg={service_img_6} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export  default ServiceList;