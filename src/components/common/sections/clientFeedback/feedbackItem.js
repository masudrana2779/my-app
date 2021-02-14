import React from 'react';
import comma from '../../../../static/assets/images/comma_icon.png';

const  FeedSingleItem = ({teamImg}) => {
    return(
        <div className="feedback_content wow fadeInUp">
            <div className="team_img text-center">
                <img src={teamImg} alt="img" />
            </div>
            <h4 className="team_name text-center">Wisteria Ravenclaw</h4>
            <h5 className="team_title text-center">Web designer</h5>
            <p className="team_details text-center">The BBC bubble and squeak hunky-dory I easy peasy
                daft my lady wind up, faff about codswallop barmy my good sir mush me old mucker up the
                duff, excuse my French gutted mate pardon me are you taking the piss.!</p>
            <div className="comma_icon text-center">
                <img src={comma} alt="img" />
            </div>
        </div>
    )
}
export default FeedSingleItem;