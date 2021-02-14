import React, {useState} from 'react';
import {Link} from "react-router-dom";

const PaginationContent = ({postPerPage, totalPots, paginate, currentPage,setNextPageNumber,setPrevPageNumber, endPageNumber, startPageNumber}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPots / postPerPage); i++) {
        pageNumbers.push(i);
    }



    return (
        <div className="pagination_content wow fadeInUp">
            <nav className="navigation">
                <ul className="pagination justify-content-center">
                    {startPageNumber < 5 ? "" :
                        <li><Link to={'#'} onClick={() => setPrevPageNumber(currentPage - 5)}><i className="arrow_left"></i></Link>
                        </li>}
                    {pageNumbers.slice(startPageNumber, endPageNumber).map((pageNumber, i) =>
                        <li className={pageNumber === currentPage ? 'active' : ''} key={i}>
                            <Link to="#" onClick={() => paginate(pageNumber)}>{pageNumber}</Link>
                        </li>
                    )}
                    {endPageNumber > pageNumbers.length - 1 ? "" :
                        <li><Link to={'#'} onClick={() => setNextPageNumber(currentPage + 5)}><i className="arrow_right"></i></Link>
                        </li>}
                </ul>
            </nav>
        </div>
    )
}

export default PaginationContent;