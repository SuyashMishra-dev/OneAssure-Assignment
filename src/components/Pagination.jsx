import React from 'react'


const Pagination = ({total, perPage,changePage}) => {
  let pageNumber = [];
  for (
    let i = 1;
    i <= Math.ceil(total / perPage);
    i++
  ) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumber.map(num => {
          return (
            <li className="page-item" key={num}>
              <span
                onClick={(e) => changePage(e,num)}
                className="page-link pointer"
              >
                {num}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Pagination