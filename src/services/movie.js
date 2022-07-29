// chứa các api
import { request } from "../configs/axios";

const fetchMovieListApi = () => {
    // nếu không có return sẽ trar3 về function mà không có kết quả
    // nếu có sẽ trả về 1 promise
   return request({
        url: `/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        method: 'GET',
    })
}

const fetchMovieDetailApi = (movieId) => {
    return request({
        url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
        method: 'GET',
    })
}

export {fetchMovieListApi, fetchMovieDetailApi}