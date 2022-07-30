import { request } from "../configs/axios"



export const loginApi = (data) => {
    return request({
        url: `/QuanLyNguoiDung/DangNhap`,
        method: 'POST',
        data: data
    })
}