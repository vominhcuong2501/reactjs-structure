import React, { useEffect, useState } from "react";
import { fetchMovieShowTimesApi } from "../../services/cinema";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

export default function ShowTimes() {
  const [showTimes, setShowTimes] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetchMovieShowTimes();
  }, []);

  const fetchMovieShowTimes = async () => {
    const result = await fetchMovieShowTimesApi(params.movieId);
    setShowTimes(result.data.content);
    console.log(result.data.content);
  };

  const renderTab = () => {
    return showTimes?.heThongRapChieu?.map((ele, index) => {
      return (
        <a
          key={ele.maHeThongRap}
          className={`nav-link text-capitalize  ${index === 0 && "active"}`}
          data-toggle="pill"
          href={`#${ele.maHeThongRap}`}
          role="tab"
          aria-selected="true"
        >
          {ele.tenHeThongRap}
        </a>
      );
    });
  };

  const renderContent = () => {
    return showTimes?.heThongRapChieu?.map((ele, index) => {
      return (
        <div
          className={`tab-pane fade show ${index === 0 && "active"}`}
          id={ele.maHeThongRap}
          role="tabpanel"
          key={ele.maHeThongRap}
        >
          {ele.cumRapChieu.map((ele) => {
            return (
              <div className="row mb-5" key={ele.maCumRap}>
                <div className="col-1">
                  <img className="img-fluid rounded" src={ele.hinhAnh} />
                </div>
                <div className="col-11 pl-0">
                  <h5>{ele.tenCumRap}</h5>
                  <span className="text-muted">{ele.diaChi}</span>
                </div>
                <div className="col-12">
                  <div className="row">
                    {ele.lichChieuPhim.map((ele) => {
                      return (
                        <div className="col-3" key={ele.maLichChieu}>
                          {/* set up ngay gio cai npm i moment */}
                          <Link to={`/booking/${ele.maLichChieu}`}>{moment(ele.ngayChieuGioChieu).format('LLL')}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    });
  };
  return (
    <div className="row">
      <div className="col-3">
        <div
          className="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {renderTab()}
        </div>
      </div>
      <div className="col-9">
        <div className="tab-content" id="v-pills-tabContent">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
