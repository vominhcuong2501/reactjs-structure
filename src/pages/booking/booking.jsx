import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chair from "../../modules/chair/chair";
import { fetchRoomListApi } from "../../services/booking";

export default function Booking() {
  const params = useParams();
  const [roomList, setRoomList] = useState();
  const [danhSachGhe, setDanhSachGhe] = useState([]);
  useEffect(() => {
    fectRoomList();
  }, []);

  const fectRoomList = async () => {
    const result = await fetchRoomListApi(params.maLichChieu);
    console.log(result.data.content);
    setRoomList(result.data.content);
  };

  const handleSelect = (selectedChair) => {
    const data = [...danhSachGhe];
    const index = data.findIndex((ele) => ele.tenGhe === selectedChair.tenGhe);
    // console.log(selectedChair);
    if (index !== -1) {
      data.splice(index, 1);
    } else {
      data.push(selectedChair);
    }
    setDanhSachGhe(data);
    // console.log(data);
  };

  return roomList ? (
    <div className="container-fluid">
      <div className="row w-75mx-auto my-5 ">
        <div className="col-8 text-center">
          {roomList?.danhSachGhe?.map((ele, index) => {
            return (
              <Fragment key={ele.tenGhe}>
                <Chair
                  handleSelect={handleSelect}
                  // key={ele.tenGhe}
                  item={ele}
                />
                {(index + 1) % 16 === 0 && <br />}
              </Fragment>
            );
          })}
        </div>
        <div className="col-4">
          <img
            className="text-center"
            src={roomList?.thongTinPhim?.hinhAnh}
            alt="Image"
          />
          <h4>{roomList?.thongTinPhim?.tenPhim}</h4>
          <p>Ngày chiếu: {roomList?.thongTinPhim?.ngayChieu}</p>
          <p>Giờ chiếu: {roomList?.thongTinPhim?.gioChieu}</p>
          <p>
            Ghế:{" "}
            {danhSachGhe.map((ele, index) => {
              return <span key={index}>{ele.tenGhe}</span>;
            })}
          </p>
          <p>
            Tổng tiền:{" "}
            {danhSachGhe
              .reduce((preValue, curValue) => {
                return (preValue += curValue.giaVe);
              }, 0)
              .toLocaleString()}{" "}
            VNĐ
          </p>
        </div>
      </div>
    </div>
  ) : (
    "Loading"
  );
}
