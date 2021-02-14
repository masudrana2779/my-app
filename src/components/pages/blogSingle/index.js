import React from 'react';
import BlogSingleBanner from "../../common/sections/innerBanner/blogSingleBanner";
import BlogDetailsBody from "./blogDetailsBody";
import {useParams} from "react-router-dom";

const BlogDetails = () => {
    let {topicId} = useParams();
    return (
        <>
            <BlogSingleBanner/>
            <BlogDetailsBody topicId={topicId} />
        </>
    )
}

export default BlogDetails;