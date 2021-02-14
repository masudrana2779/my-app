import React from 'react';

const LatestWorkItem = ({latestWrkImg, linkIcon, link}) => {
    return (
        <div className='latest_work_item col'>
            <div className="work_single_item wow fadeInUp">
                <div className="img_wrap">
                    <img src={latestWrkImg} alt="img"/>
                    <div className="hover_content">
                        <div className="hover_inner">
                            <a href={link}><img src={linkIcon} alt="icon"/></a>
                        </div>
                    </div>
                </div>
                <div className="work_details">
                    <h4 className="details_title"><a href={link}>The best team state</a></h4>
                </div>
            </div>
        </div>
    )
}
export default LatestWorkItem;