import React from "react";
import PageContext from "../../context/Navigator";

export default function Navigator() {
  const { page, setPage } = React.useContext(PageContext);

  function handlePrev() {
    if (page.pageno > 0) {
      setPage((oldValue) => ({
        pageno: oldValue.pageno - 1,
      }));
    }
  }

  function handleNext() {
    setPage((oldValue) => ({
      pageno: oldValue.pageno + 1,
    }));
  }

  // console.log(page.pageno);

  return (
    <div className="fixed-bottom bg-dark text-white p-3 mt-0">
      <div className="container d-flex flex-row align-items-center justify-content-between">
        <button className="btn btn-warning" onClick={handlePrev}>
          previous
        </button>
        <span className="fs-3 fw-bolder">{page.pageno}</span>
        <button className="btn btn-warning" onClick={handleNext}>
          next
        </button>
      </div>
    </div>
  );
}
