import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/authAction";
import { toast, ToastContainer } from "react-toastify";
import { Audio } from "react-loader-spinner";

const LoginPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const validation = () => {

    if (email === "" || !email.includes("@")) {
      notify(" Invalid emai ");
      return;
    }
    if (password === "" || password.length < 8) {
      notify("Password must be at least 8 character");
      return;
    }

  };

  const data = useSelector((state) => state.authReducer.loginUser);

  

  const onSubmit = async () => {
    validation()
    setLoading(true);
    await dispatch(
      loginUser({
        email: email,
        password: password,
      }),
    );
    setLoading(false);
  };

  useEffect(() => {
    if (data) {
      console.log("LOGIN DATA:", data);

      if (data.token) {
        localStorage.setItem("tkn", data.token);
        notify("تم التسجيل بنجاح");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }else{
        localStorage.removeItem('token')
      }
      
      
      if(data.data.error){
        notify(`${data.data.message}`)
      }
    }
  }, [data]);

  const notify = (msg) => toast(msg);

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
        <h2 className="text-center mb-5">تسجيل الدخول</h2>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="الايميل"
          className="form-control mb-4"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="الباسورد..."
          className="form-control mb-4"
          value={password}
        />
        <button
          onClick={onSubmit}
          className="btn btn-success w-100 mb-4"
          style={{ display: "flex", justifyContent: "center", gap: "10px" }}
        >
          {loading ? (
            <Audio
              height="20"
              width="20"
              color="#fff"
              ariaLabel="audio-loading"
              wrapperStyle={{ textAlign: "center" }}
              wrapperClass="wrapper-class"
              visible={true}
            />
          ) : (
            'دخول'
          )}
        </button>
        <div className="d-flex justify-content-center">
          <p>ليس لديك حساب؟</p>
          <Link style={{ textDecoration: "none", color: "red" }} to="/register">
            اضغط هنا
          </Link>
        </div>
      </div>

      <Link
        style={{ textDecoration: "none", color: "red", display: "block" }}
        to="/admin/product"
      >
        اضغط هنا
      </Link>

      <Link
        style={{ textDecoration: "none", color: "red" }}
        to="/user/allorder"
      >
        user هنا
      </Link>

      <ToastContainer />
    </div>
  );
};

export default LoginPage;
