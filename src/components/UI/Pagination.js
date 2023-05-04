import React from 'react';

const Pagination = ({postsPerPage, totalPosts, setCurrentPage, currentPage}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <ul className="pagination">
            {
                pageNumbers.map(num => (
                    <li className={ num === currentPage ? "page_active" : "page_item"} key={num}>
                        <button value={num} onClick={() => setCurrentPage(num)}>{num}</button>
                    </li>
                ))
            }
        </ul>

    );
};

export default Pagination;