import React, {useState, useEffect} from 'react';
import axios from "axios";
import PostsApi from '../../../api.json';
import InnerBanner from "../../common/sections/innerBanner/innerBanner";
import BlogPostBody from "./blogPostBody";
import bgImg from '../../../static/assets/images/blog_bg.jpg';

const BlogFunctional = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);
    const [startPageNumber, setStartPageNumber] = useState(0);
    const [endPageNumber, setEndPageNumber] = useState(5);


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(PostsApi.posts);
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, [])


    // Get current posts
    const indexOfLatestPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLatestPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLatestPost)

    // paginate to change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // paginate to change page number
    const setPrevPageNumber = (pageNumber) => {
        setStartPageNumber(startPageNumber - 5);
        setEndPageNumber(startPageNumber);
        paginate(pageNumber);
    }
    const setNextPageNumber = (pageNumber) => {
        setStartPageNumber(endPageNumber);
        setEndPageNumber(endPageNumber + 5);
        paginate(pageNumber);
    }

    return (
        <div className={'aboutPageWrap'}>
            <InnerBanner title={'Classic Blog'} bgImg={bgImg}/>
            <BlogPostBody items={currentPosts} loading={loading} postPerPage={postsPerPage} posts={posts}
                          paginate={paginate} setPrevPageNumber={setPrevPageNumber}
                          setNextPageNumber={setNextPageNumber} currentPage={currentPage}
                          startPageNumber={startPageNumber} endPageNumber={endPageNumber}/>
        </div>
    )
}

export default BlogFunctional;