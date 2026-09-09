import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/actions/authAction";
import { Audio } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setNewConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSubmit = async () => {

    if(newPassword === ''){
        notify('please enter your password');
        return
    }

    if(newPassword !== confirmNewPassword){
        notify('please sure from your confirm password');
        return;
    }

    setLoading(true)
    await dispatch(
      resetPassword({
        email:localStorage.getItem('myemail'),
        newPassword: newPassword,
      }),
    );
    setLoading(false)
  };

  const data = useSelector((state) => state.authReducer.resetPassword);


  useEffect(()=>{
    if(data){
        if(data.token){
            notify('تم تغيير كلمة السر'),
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        }
        if(data.data?.status === 'error'){
            notify(`${data.data.message}`)
        }
    }
  },[data])

    
    
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
        <h2 className="text-center mb-5">ادخل كلمة السر الجديده</h2>

        <input
          onChange={(e) => setNewPassword(e.target.value)}
          type="text"
          placeholder="كلمة السر الجديده"
          className="form-control mb-4"
          value={newPassword}
        />
        <input
          onChange={(e) => setNewConfirmPassword(e.target.value)}
          type="text"
          placeholder="تاكيد كلمة السر الجديده"
          className="form-control mb-4"
          value={confirmNewPassword}
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
            " حفظ "
          )}
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
