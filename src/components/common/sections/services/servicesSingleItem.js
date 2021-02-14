import React from 'react';

const ServicesSingleItem =({serviceImg}) => {
    return(
        <div className="services_single_item wow fadeInUp">
            <div className="service_img">
                <img src={serviceImg} alt="img" className="img-fluid" />
            </div>
            <div className="service_img_details">
                <h3 className="ser_img_title"><a href="#">Building Construction</a></h3>
                <p className="er_img_para">Nice one a blinding shot cor blimey guvnor Harry bubble
                    and squeak James bond.</p>
                <a href="#" className="view_ser">View Service <i className="arrow_right"></i></a>
            </div>
        </div>
    )
}
export default ServicesSingleItem;