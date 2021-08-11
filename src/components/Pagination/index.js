import React, { useEffect, useState } from 'react';

const Pagination = ({ page, totalPages, onChange }) => {
  const [totalPage, settotalPage] = useState([]);

  useEffect(() => {
    let maxPages = 10;

    // ensure current page isn't out of range
    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    let startPage, endPage;
    if (totalPages <= maxPages) {
      // total pages less than max so show all pages
      startPage = 1;
      endPage = totalPages;
    } else {
      // total pages more than max so calculate start and end pages
      let maxPagesBeforepage = Math.floor(maxPages / 2);
      let maxPagesAfterpage = Math.ceil(maxPages / 2) - 1;
      if (page <= maxPagesBeforepage) {
        // current page near the start
        startPage = 1;
        endPage = maxPages;
      } else if (page + maxPagesAfterpage >= totalPages) {
        // current page near the end
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        // current page somewhere in the middle
        startPage = page - maxPagesBeforepage;
        endPage = page + maxPagesAfterpage;
      }
    }

    let pages = Array.from(Array(endPage + 1 - startPage).keys()).map((i) => startPage + i);
    settotalPage(pages);
  }, [page]);

  const handlePageClick = (e) => onChange(e);
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li>
            <div className="pagination-item" onClick={() => handlePageClick(page - 1)}>
              <span aria-hidden="true">&laquo;</span>
            </div>
          </li>
          {totalPage?.map((item, i) => (
            <li>
              <div className={`pagination-item ${item === page ? 'active' : ''} `} onClick={() => handlePageClick(item)}>
                {item}
              </div>
            </li>
          ))}

          <li>
            <div className="pagination-item" onClick={() => handlePageClick(page + 1)}>
              <span aria-hidden="true">&raquo;</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

// <Row className="mt-3">
//   <Col lg="12" className="d-flex justify-content-center mt-2">
//     <Pagination className="pagination pagination-rounded justify-content-end mb-2">
//       <PaginationItem disabled={page === 1}>
//         <PaginationLink previous onClick={() => handlePageClick(page - 1)} />
//       </PaginationItem>
//       {totalPage?.map((item, i) => (
//         <PaginationItem active={item === page} key={i}>
//           <PaginationLink onClick={() => handlePageClick(item)}>{item}</PaginationLink>
//         </PaginationItem>
//       ))}
//       <PaginationItem disabled={page === totalPage[totalPage.length - 1]}>
//         <PaginationLink next onClick={() => handlePageClick(page + 1)} />
//       </PaginationItem>
//     </Pagination>
//   </Col>
// </Row>;
