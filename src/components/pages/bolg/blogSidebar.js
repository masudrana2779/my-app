import React from 'react';
import recent_post_img_1 from '../../../static/assets/images/recent_post/recent_post_img_1.jpg';
import RecentPostItem from "./recentPostItem";

const BlogSidebar = () => {
    return (
        <div className="blog_sidebar">
            <div className="widget sidebar-widget widget_search wow fadeInUp">
                <form action="#" className="search-form input-group">
                    <input name="search" className="form-control" placeholder="Search" type="search"/>
                    <span className="search_btn">
                        <button type="submit"><i className="icon_search"></i></button>
                    </span>
                </form>
            </div>
            <div className="widget sidebar-widget widget_catagory wow fadeInUp">
                <h2 className="widget_title">Categories</h2>
                <ul>
                    <li><a href="#">Engine Upgrade <span>(09)</span></a></li>
                    <li><a href="#">Technology <span>(16)</span></a></li>
                    <li><a href="#">Interviews <span>(05)</span></a></li>
                    <li><a href="#">Dent Services <span>(03)</span></a></li>
                    <li><a href="#">Construction <span>(07)</span></a></li>
                    <li><a href="#">Suspension Services <span>(04)</span></a></li>
                    <li><a href="#">Uncategorized <span>(Uncategorized)</span></a></li>
                </ul>
            </div>
            <div className="widget sidebar-widget widget_recent_post wow fadeInUp">
                <h2 className="widget_title">Recent Posts</h2>
                {[0, 1, 2, 3].map((item, i) =>
                    <RecentPostItem key={i} />
                )}
            </div>
            <div className="widget sidebar-widget widget_tags wow fadeInUp">
                <h2 className="widget_title">Tags</h2>
                <ul>
                    <li><a href="#">Repair</a></li>
                    <li><a href="#">Con Design</a></li>
                    <li><a href="#">UI/UX</a></li>
                    <li><a href="#">Cooling System </a></li>
                    <li><a href="#">Wheels</a></li>
                    <li><a href="#">Car Repair </a></li>
                    <li><a href="#">Driver</a></li>
                    <li><a href="#">Oil </a></li>
                </ul>
            </div>
            <div className="widget sidebar-widget widget_subscribe wow fadeInUp">
                <h2 className="widget_title">Subscribe</h2>
                <form action="#" className="subscribe-form input-group">
                    <input name="subscribe" className="form-control" placeholder="Enter your email" type="email"
                           required/>

                    <span className="subscribe_btn"><button type="submit">Subscribe</button></span>
                </form>
            </div>
            <div className="widget sidebar-widget widget_archive wow fadeInUp">
                <h2 className="widget_title">Archives</h2>
                <ul>
                    <li><a href="#">October 2019 <span>(09)</span></a></li>
                    <li><a href="#">July 2019 <span>(16)</span></a></li>
                    <li><a href="#">September 2019 <span>(05)</span></a></li>
                    <li><a href="#">August 2019 <span>(03)</span></a></li>
                    <li><a href="#">March 2019 <span>(07)</span></a></li>
                    <li><a href="#">November 2019 <span>(04)</span></a></li>
                    <li><a href="#">April 2019 <span>(05)</span></a></li>
                </ul>
            </div>
        </div>
    )
}
export default BlogSidebar;