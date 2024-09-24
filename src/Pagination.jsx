import App from "./App";
import { AppButton } from "./components/AppButton";
import "./Pagination.css";
import React from "react";

export function Pagination({ totalPages, paginate, currentPage }) {
  function handleClick(page) {
    if (page !== currentPage) {
      paginate(page);
    }
  }

  //---------------------------------------------------------------------------------

  function renderPages() {
    const pages = [];

    // Первая страница
    pages.push(
      <AppButton
        // key={1}
        className={currentPage === 1 ? "active" : ""}
        onClick={() => handleClick(1)}
      >
        1
      </AppButton>
    );

    // показ второй страницы если есть
    if (totalPages > 1) {
      pages.push(
        <AppButton
          // key={2}
          className={currentPage === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          2
        </AppButton>
      );
    }

    // троеточие
    if (currentPage > 4) {
      pages.push(<span key="dots">...</span>);
    }

    // текущая страница и соседние
    for (
      let i = Math.max(3, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(
        <AppButton
          // key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handleClick(i)}
        >
          {i}
        </AppButton>
      );
    }

    // Троеточие перед последней страницей
    if (currentPage < totalPages - 3) {
      pages.push(<span key="dots2">...</span>);
    }

    // Последняя страница
    if (totalPages > 2) {
      pages.push(
        <AppButton
          // key={totalPages}
          className={currentPage === totalPages ? "active" : ""}
          onClick={() => handleClick(totalPages)}
        >
          {totalPages}
        </AppButton>
      );
    }

    return pages;
  }
  return (
    <div className="pagination">
      <AppButton onClick={() => handleClick(1)} disabled={currentPage === 1}>
        Первая страница
      </AppButton>

      {renderPages()}

      <AppButton
        onClick={() => handleClick(totalPages)}
        disabled={currentPage === totalPages}
      >
        Последняя страница
      </AppButton>
    </div>
  );

  //-------------------------------------------------------------------------------------

  //   const pageNumbers = [];
  //   const maxPagesToShow = 2; // Количество страниц, которые будут отображаться перед многоточием

  //   // список страниц - массив с номерами
  //   for (let i = 1; i <= totalPages; i++) {
  //     pageNumbers.push(i);
  //   }

  //   function renderPageNumbers() {
  //     const pagesToShow = [];

  //     // Первая страница
  //     if (currentPage > 1) {
  //       pagesToShow.push(
  //         <button
  //           key={1}
  //           onClick={() => paginate(1)}
  //           className={currentPage === 1 ? "active" : ""}
  //         >
  //           1
  //         </button>
  //       );
  //     }

  //     // Многоточие перед текущей страницей
  //     if (currentPage > maxPagesToShow + 1) {
  //       pagesToShow.push(<span key="start-dots">...</span>);
  //     }

  //     // Отображаем страницы вокруг текущей
  //     for (
  //       let i = Math.max(2, currentPage - maxPagesToShow);
  //       i <= Math.min(totalPages - 1, currentPage + maxPagesToShow);
  //       i++
  //     ) {
  //       pagesToShow.push(
  //         <button
  //           key={i}
  //           onClick={() => paginate(i)}
  //           className={currentPage === i ? "active" : ""}
  //         >
  //           {i}
  //         </button>
  //       );
  //     }

  //     // Многоточие после текущей страницы
  //     if (currentPage < totalPages - maxPagesToShow) {
  //       pagesToShow.push(<span key="end-dots">...</span>);
  //     }

  //     // Последняя страница
  //     if (currentPage < totalPages) {
  //       pagesToShow.push(
  //         <button
  //           key={totalPages}
  //           onClick={() => paginate(totalPages)}
  //           className={currentPage === totalPages ? "active" : ""}
  //         >
  //           {totalPages}
  //         </button>
  //       );
  //     }

  //     return pagesToShow;
  //   }

  //   return (
  //     <div className="pagination">
  //       <button
  //         onClick={() => paginate(currentPage - 1)}
  //         disabled={currentPage === 1}
  //       >
  //         Предыдущая
  //       </button>
  //       {renderPageNumbers()}
  //       <button
  //         onClick={() => paginate(currentPage + 1)}
  //         disabled={currentPage === totalPages}
  //       >
  //         Следующая
  //       </button>
  //     </div>
  //   );
}

// export function Pagination({
//   picturesPerPage,
//   totalPictures,
//   paginate,
//   currentPage,
// }) {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPictures / picturesPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         {pageNumbers.map((number) => (
//           <li
//             key={number}
//             className={`page-item ${currentPage === number ? "active" : ""}`}
//           >
//             <button onClick={() => paginate(number)} className="page-link">
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }
