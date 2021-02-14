import React from 'react';
import recent_post_img_1 from "../../../static/assets/images/recent_post/recent_post_img_1.jpg";

const RecentPostItem = () => {
    return (
        <div className="media">
            <div className="media-left">
                <a href="#">
                    <img className="media-object" src={recent_post_img_1} alt="img"/>
                </a>
            </div>
            <div className="media-body">
                <h6 className="tn_tittle"><a href="#"> Coinbase will support bitcoin cash afterall</a></h6>
                <ul className="recent_post_meta">
                    <li>October 4, 2019</li>
                </ul>
            </div>
        </div>
    )
}
export default RecentPostItem;