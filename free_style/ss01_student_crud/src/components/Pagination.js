export const Pagination = (props) => {
  const { previous, next, page, totalPages } = props;

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={previous}>
              Previous
            </button>
          </li>

          <li className="page-item">
            <span className="page-link">{page + 1}</span>
          </li>
          <li className="page-item">
            <span className="page-link">/</span>
          </li>
          <li className="page-item">
            <span className="page-link">{totalPages}</span>
          </li>

          <li className="page-item">
            <button className="page-link" onClick={next}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};
