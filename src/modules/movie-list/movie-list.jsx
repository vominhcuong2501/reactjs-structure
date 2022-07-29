// chứa nội dung thực hiện các action

import React, { useEffect, useState } from "react";
import { fetchMovieDetailApi, fetchMovieListApi } from "../../services/movie";
import {useNavigate} from "react-router-dom"


export default function Movielist() {
  const navigate = useNavigate()
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovieList();

    // ham IIFE
    // (async () => {
    //   const result = await fetchMovieListApi();
    //   console.log(result);
    // })();
  }, []);

  const fetchMovieList = async () => {
    const result = await fetchMovieListApi();
    setMovieList(result.data.content);
  };

  const renderMovieList = () => {
    return movieList.map((ele) => {
      return (
        <div className="col-3" key={ele.maPhim}>
          <div
            className="card movie-card"
            style={{ marginBottom: 20, height: 500 }}
          >
            <img
              style={{ height: 350, objectFit: "cover" }}
              className="card-img-top"
              src={ele.hinhAnh}
              alt="movie"
            />
            <div className="card-body">
              <h5 className="card-title">{ele.tenPhim}</h5>
              <button onClick={() => navigate(`/movie/${ele.maPhim}`)} className="btn btn-info">XEM CHI TIẾT</button>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div className="row mt-3 mx-auto w-75">{renderMovieList()}</div>;
}
