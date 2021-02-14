import React from 'react';
import BlogSingleItem from "./blogPostSingleItem";
import PaginationContent from "./paginationContent";
import BlogSidebar from "./blogSidebar";

const BlogPostBody = ({
                          items,
                          loading,
                          postPerPage,
                          posts,
                          paginate,
                          currentPage,
                          setNextPageNumber,
                          setPrevPageNumber,
                          endPageNumber,
                          startPageNumber
                      }) => {
    return (
        <section className="blog_wrap pd_120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 offset-lg-1">
                        <div className="blog_content">
                            {items.map((item, i) =>
                                <BlogSingleItem item={item} loading={loading} key={i}/>
                            )}
                            <PaginationContent postPerPage={postPerPage} totalPots={posts.length}
                                               endPageNumber={endPageNumber} startPageNumber={startPageNumber}
                                               paginate={paginate} setPrevPageNumber={setPrevPageNumber}
                                               setNextPageNumber={setNextPageNumber} currentPage={currentPage}/>
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
export default BlogPostBody;