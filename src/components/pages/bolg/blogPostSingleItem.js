import React from 'react';
import post_img_1 from '../../../static/assets/images/blog/post_img_1.jpg'
import {blogDetails} from "../../../route";
import {Link, useRouteMatch, useParams} from "react-router-dom";

const BlogSingleItem = ({item, loading}) => {
    let match = useRouteMatch();
    if (loading) {
        return <p>Loading....</p>
    }
    return (
        <div className="blog_single_item wow fadeInUp">
            <div className="date_content">
                <span className="date">22</span>
                <span className="month">July </span>
                <span className="year">2019 </span>
            </div>
            <div className="blog_post">
                <div className="post_img">
                    <a href={`${blogDetails}/${item.id}`}>
                        <img src={`https://robohash.org/${item.id}.png?set=set5&size=450x450`} className="img-fluid" alt="img" />
                        {/*<img src={post_img_1} alt="img"/>*/}
                    </a>
                </div>
                <div className="post_content">
                    <h3 className="post_title"><a href={`${blogDetails}/${item.id}`}>{item.title} {item.id}</a></h3>
                    <ul className="post_info">
                        <li><span className="post_time">2 hours ago </span></li>
                        <li><span className="author">by Hanson Deck</span></li>
                    </ul>
                    <p className="post_details">{item.body}</p>
                    <a href={`${blogDetails}/${item.id}`} className="read_more">Read More <i
                        className="arrow_right"></i></a>
                </div>
            </div>
        </div>
    )
}

export default BlogSingleItem;
