import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewAddress } from "../../redux/actions/addresseAction";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const UserNewAddress = () => {
  const [alias, setAlias] = useState("");
  const [addrese, setAddrese] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSubmitAdress = async () => {

    if(alias === '' || addrese === '' || phone === '' || city === '' || code === ''){
      notify('من فضلك اكمل البيانات')
      return;
    }

    setLoading(true);
    await dispatch(
      addNewAddress({
        alias: alias,
        details: addrese,
        phone: phone,
        city: city,
        postalCode: code,
      }),
    );
    setLoading(false)
  };

  const newAddress = useSelector((state) => state.alladdress.addresse);



  useEffect(()=>{

    if(loading === false){
      if(newAddress?.status === "success"){
        notify('تم اضافة العنوان بنجاح');
        setTimeout(() => {
          navigate('/user/address')
        }, 2000);

      }else{
        notify('هناك مشكله في عملية اضافة العنوان')
      }
    }

  },[loading])


    const notify = (msg) => toast(msg);
  

  return (
    <div>
      <div className="slider-title bg-light p-2 text-end">
        {" "}
        اضافة عنوان جديد{" "}
      </div>

      <input
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        type="text"
        className="select mt-3 px-2"
        placeholder="تسمية العنوان مثلا (المنزل - العمل)"
      />

      <textarea
        value={addrese}
        onChange={(e) => setAddrese(e.target.value)}
        className="select mt-3 px-2"
        placeholder="العنوان بالتفصيل"
      ></textarea>

      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="number"
        className="select mt-3 px-2"
        placeholder="رقم الهاتف"
      />

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        className="select mt-3 px-2"
        placeholder="المدينه"
      />

      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        type="text"
        className="select mt-3 px-2"
        placeholder="كود البوستا"
      />

      <div className="text-start">
        <button className="btn btn-dark mt-3" onClick={onSubmitAdress}>اضافة عنوان</button>
      </div>


      <ToastContainer/>
    </div>
  );
};

export default UserNewAddress;
