import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { forgetPassword } from "../../redux/actions/authAction";
import { Audio } from "react-loader-spinner";


export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit =async () => {

    if(email === ''){
        notify('please enter your email');
        return;
    }

    localStorage.setItem('myemail',email)

    setLoading(true)
    await dispatch(
      forgetPassword({
        email,
      }),
    );

    setLoading(false)
  };

  const data = useSelector((state) => state.authReducer.forgetPassword);

  useEffect(() => {
    if (data) {
      console.log(data);
      if (data.status === "success") {
        notify(`${data.message}`);
        setTimeout(() => {
          
          navigate('/user/verify-code')
        }, 2000);
      }
      if (data.data?.status === "error") {
        notify(`${data.data.message}`);
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
        <h2 className="text-center mb-5"> تغيير كلمة السر</h2>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="الايميل"
          className="form-control mb-4"
          value={email}
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
            "ارسال كود التغيير"
          )}
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
