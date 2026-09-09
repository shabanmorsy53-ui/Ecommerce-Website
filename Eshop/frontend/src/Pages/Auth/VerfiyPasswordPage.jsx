import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Audio } from "react-loader-spinner";
import { verfiyPassword } from '../../redux/actions/authAction';


export default function VerfiyPasswordPage() {

    const [code,setCode] = useState('');
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = async ()=> {

        if(code === ''){
            notify('please enter the code')
            return
        }

        setLoading(true)
        await dispatch(verfiyPassword({
            "resetCode" : code 
        }))
        setLoading(false)
    }

  const data = useSelector((state) => state.authReducer.verfiyPassword);


    useEffect(()=>{

        if(data){
            console.log(data);
            if(data.status === "success"){
                notify('تم تاكيد الكود')
                setTimeout(() => {
                    navigate('/user/reset-password')
                    
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
        <h2 className="text-center mb-5"> اكتب كود التغيير</h2>

        <input
          onChange={(e) => setCode(e.target.value)}
          type="text"
          placeholder="الكود"
          className="form-control mb-4"
          value={code}
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
            "اكتب كود التغيير"
          )}
        </button>
      </div>

      <ToastContainer />
    </div>
  )
}
