import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination-container">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        «
      </button>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className="pagination-button"
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        >
      </button>
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        >>
      </button>
    </div>
  );
}

export default Pagination;
