import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { createNewUser } from "../../redux/actions/authAction";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const validation = () => {
    if (name === "") {
      notify("من فضلك ادخل الاسم");
      return;
    }
    if (email === "" || !email.includes("@")) {
      notify(" Invalid emai ");
      return;
    }
    if (password === "" || password.length < 8) {
      notify("Password must be at least 8 character");
      return;
    }
    if (confirmpassword !== password) {
      notify("Passwords do not match");
      return;
    }
  };

  const data = useSelector((state) => state.authReducer.createUser);


  const onSubmit = async () => {
    validation();
    setLoading(true)
    await dispatch(
      createNewUser({
        name: name,
        email: email,
        password: password,
        passwordConfirm: confirmpassword,
      }),
    );
    setLoading(false)
  };

  useEffect(()=>{
    if(loading === false){
      console.log(data);
      if(data.token){
        localStorage.setItem('token',data.token)
        notify('تم انشاء الحساب بنجاح')
        setTimeout(() => {
          navigate('/login')
          
        }, 2000);
      }
      if(data.data.errors){
        notify(`${data.data.errors[0].msg}`)
      }
    }
  },[loading])

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
        <h2 className="text-center mb-5">تسجيل حساب</h2>

        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="اسم المستخدم"
          className="form-control mb-4"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="الايميل"
          className="form-control mb-4"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="الباسورد..."
          className="form-control mb-4"
        />
        <input
          value={confirmpassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          type="password"
          placeholder="تاكيد الباسورد..."
          className="form-control mb-4"
        />
        <button onClick={onSubmit} className="btn btn-success w-100 mb-4">
          تسجيل الحساب
        </button>
        <div className="d-flex justify-content-center">
          <p> لديك حساب؟</p>
          <Link style={{ textDecoration: "none", color: "red" }} to="/login">
            اضغط هنا
          </Link>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
