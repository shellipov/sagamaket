import React from "react";
import { Link } from "react-router-dom";

function PageTwo() {
  return (
    <>
      <div className="col">
        <div className="row justify-content-center">
          <h1>Page Two</h1>
        </div>

        <div className="row justify-content-center">
          <Link className="btn btn-primary btn-sm" to="/">
            to page one
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageTwo;
