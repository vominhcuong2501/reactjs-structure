import React, { useState } from "react";
import { loginApi } from "../../services/user";

export default function Login() {
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await loginApi(state);

    // lưu local
    localStorage.setItem("USER_INFO_KEY", JSON.stringify(result.data.content));
  };

  return (
    <form onSubmit={handleSubmit} className="w-25 mx-auto my-5">
      <div className="form-group">
        <label htmlFor="">Tài khoản</label>
        <input
          type="text"
          className="form-control"
          name="taiKhoan"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Mật khẩu</label>
        <input
          type="text"
          className="form-control"
          name="matKhau"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className="btn btn-success">LOGIN</button>
      </div>
    </form>
  );
}
