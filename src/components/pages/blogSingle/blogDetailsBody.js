import React, {useEffect, useState} from 'react';
import BlogSidebar from "../bolg/blogSidebar";
import post_single_img from '../../../static/assets/images/blog/post_single_img.jpg';
import authorImg from '../../../static/assets/images/author/author-img.jpg';
import user_1 from '../../../static/assets/images/author/user_1.jpg';
import user_2 from '../../../static/assets/images/author/user_2.jpg';
import user_3 from '../../../static/assets/images/author/user_3.jpg';
import axios from "axios";

const BlogDetailsBody = ({topicId}) => {
    const [postDetails, setPostDetails] = useState([]);
    const [loaddingData, setloaddingData] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            setloaddingData(true);
            const res = await axios.get(`http://jsonplaceholder.typicode.com/posts/${topicId}`);
            setPostDetails(res.data);
            setloaddingData(false);
        }
        fetchPosts();
    }, [])
    return (
        <section className="blog_wrap pt_90">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 cus_pad_left">
                        <div className="blog_content blog_single_content pb_100">
                            <div className="blog_single_item wow fadeInUp">
                                <h3 className="blog_inner_title">{postDetails.title}</h3>
                                <p>{postDetails.body}</p>
                                <div className="blog_simg_img">
                                    <img src={`https://robohash.org/${postDetails.id}.png?set=set4&size=450x450`} className="img-fluid" alt="img" />
                                </div>
                                <p>{postDetails.body} {postDetails.body}</p>

                                <p>{postDetails.body} {postDetails.body} {postDetails.body}</p>
                                <blockquote>
                                    <p>{postDetails.body}</p>
                                </blockquote>

                                <p>{postDetails.body} {postDetails.body}</p>

                                <div className="blog_simg_img">
                                    <img src={post_single_img} className="img-fluid" alt="img" />
                                </div>

                                <h3 className="blog_inner_title">Spend a penny bits and bobs nice one a blinding
                                    shot</h3>
                                <p>{postDetails.body}{postDetails.body}{postDetails.body}{postDetails.body}</p>

                                <p>{postDetails.body}{postDetails.body}{postDetails.body}</p>

                            </div>
                            <div className="blog_sing_tags wow fadeInUp">
                            <span className="sing_tags">
                                <b>Tags:</b>
                                <a href="#">Construction,</a>
                                <a href="#">Droitlab,</a>
                                <a href="#">UI design</a>
                            </span>
                                <span className="sing_share float-right">
                                <b>Share:</b>
                                <a href="#"><i className="social_facebook"></i></a>
                                <a href="#"><i className="social_twitter"></i></a>
                                <a href="#"><i className="social_pinterest"></i></a>
                                <a href="#"><i className="social_linkedin"></i></a>
                            </span>
                            </div>
                            <div className="author_about wow fadeInUp">
                                <div className="media">
                                    <div className="media-left"><img className="media-object"
                                                                     src={authorImg}
                                                                     alt="img" /></div>
                                    <div className="media-body">
                                        <h6 className="author_name"> Lurch Schpellchek </h6>
                                        <p className="author_info">Author</p>
                                        <p className="author_details">Nice one smashing I don't want no agro the BBC do
                                            one squiffy lemon squeezy cockup off his nut it's all gone to pot,
                                            pardon.!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="comment_reply wow fadeInUp">
                                <div className="comment_text">
                                    <h2 className="comment-title"> 3 Comments </h2>
                                </div>
                                <div className="comment_reply_form">
                                    <ul className="comment-list">
                                        <li>
                                            <div className="media">
                                                <div className="media-left"><img className="media-object"
                                                                                 src={user_1}
                                                                                 alt="img" /></div>
                                                <div className="media-body">
                                                    <div className="reply_body">
                                                        <h6 className="author_name"> Hanson Deck </h6>
                                                        <p className="author_info">January 7, 2019 at 1:44 pm</p>
                                                        <p className="author_details">Only a quid up the duff give us a
                                                            bell gosh golly gosh bobby dropped a clanger jolly good
                                                            burke on your bike mate matie boy, lavatory plastered.!</p>
                                                        <a href="#" className="reply_link"><i
                                                            className="arrow_back"></i>Reply</a>
                                                    </div>
                                                    <ul className="comment-list">
                                                        <li>
                                                            <div className="media">
                                                                <div className="media-left"><img
                                                                    className="media-object"
                                                                    src={user_2} alt="img" />
                                                                </div>
                                                                <div className="media-body">
                                                                    <div className="reply_body">
                                                                        <h6 className="author_name"> Hanson Deck </h6>
                                                                        <p className="author_info">January 7, 2019 at
                                                                            1:44 pm</p>
                                                                        <p className="author_details">Only a quid up the
                                                                            duff give us a bell gosh golly gosh bobby
                                                                            dropped a clanger jolly good burke on your
                                                                            bike mate matie boy, lavatory
                                                                            plastered.!</p>
                                                                        <a href="#" className="reply_link"><i
                                                                            className="arrow_back"></i>Reply</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="media">
                                                <div className="media-left"><img className="media-object"
                                                                                 src={user_3}
                                                                                 alt="img" /></div>
                                                <div className="media-body">
                                                    <div className="reply_body">
                                                        <h6 className="author_name"> Hanson Deck </h6>
                                                        <p className="author_info">January 7, 2019 at 1:44 pm</p>
                                                        <p className="author_details">Only a quid up the duff give us a
                                                            bell gosh golly gosh bobby dropped a clanger jolly good
                                                            burke on your bike mate matie boy, lavatory plastered.!</p>
                                                        <a href="#" className="reply_link"><i
                                                            className="arrow_back"></i>Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="leave_comment wow fadeInUp">
                                <div className="comment_text">
                                    <h2 className="comment-title"> Leave a comment </h2>
                                </div>
                                <div className="comment-respond">
                                    <form action="#" method="post" className="contact-form">
                                        <div className="row">
                                            <div className="col-sm-6 col-xs-12 form-group">
                                                <input type="text" className="form-control" name="author"
                                                       placeholder="Name" required />
                                            </div>
                                            <div className="col-sm-6 col-xs-12 form-group">
                                                <input type="text" className="form-control" name="author"
                                                       placeholder="Phone" />
                                            </div>
                                            <div className="col-sm-6 col-xs-12 form-group">
                                                <input type="email" className="form-control" name="email"
                                                       placeholder="Email" required />
                                            </div>
                                            <div className="col-sm-6 col-xs-12 form-group">
                                                <input type="url" className="form-control" placeholder="Website" />
                                            </div>
                                            <div className="col-sm-12 col-xs-12 form-group">
                                                <textarea name="comment" className="form-control"
                                                          placeholder="Your Comment" required></textarea>
                                            </div>
                                            <div className="col-sm-12 col-xs-12 form-group">
                                                <div className="form-submit"><input name="submit" type="submit"
                                                                                    className="btn sub_btn"
                                                                                    value="Post Comment" /></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12 offset-lg-1 cus_pad_right">
                        <BlogSidebar/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogDetailsBody;