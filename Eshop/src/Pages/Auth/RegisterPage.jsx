import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="container">
      <div
        style={{
          width: "50%",
          margin: "auto",
          minHeight: "380px",
          marginTop: "80px",
        }}
      >
        <h2 className="text-center mb-5">تسجيل حساب</h2>

        <input
          type="text"
          placeholder="اسم المستخدم"
          className="form-control mb-4"
        />
        <input
          type="email"
          placeholder="الايميل"
          className="form-control mb-4"
        />
        <input
          type="password"
          placeholder="الباسورد..."
          className="form-control mb-4"
        />
        <button className="btn btn-success w-100 mb-4">تسجيل الحساب</button>
        <div className="d-flex justify-content-center">
          <p> لديك حساب؟</p>
          <Link style={{ textDecoration: "none", color: "red" }} to="/login">
            اضغط هنا
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
