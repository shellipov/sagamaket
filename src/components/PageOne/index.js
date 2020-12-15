import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { startLoading } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Loading from '../Loading'

function PageOne() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.main.data);
  const error = useSelector((state) => state.main.error);
  const loading = useSelector((state) => state.main.loading);

  useEffect(() => {
    dispatch(startLoading());
  }, [dispatch]);

  return (
    <>
      <div className="col">
        <div className="row justify-content-center">
          <h1>Page One</h1>
        </div>

        <div className="row justify-content-center">
          <Link className="btn btn-primary btn-sm" to="/page2">
            to page two
          </Link>
        </div>

        <div className="row justify-content-center">
          {loading && <Loading />}

          {data && (
            <div>
              {data.map((item) => (
                <h3 key={item.dt}>{item.dt}</h3>
              ))}
            </div>
          )}

          {error && <div>{error}</div>}
        </div>
      </div>
    </>
  );
}

export default PageOne;
