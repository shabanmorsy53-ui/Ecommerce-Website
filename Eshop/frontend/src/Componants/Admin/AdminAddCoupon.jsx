import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCoupon, getAllCoupon } from "../../redux/actions/couponAction";
import { ToastContainer, toast } from "react-toastify";
import AdminCouponCard from "./AdminCouponCard";

export default function AdminAddCoupon() {
  const dateRef = useRef();

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [discount, setDiscount] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const get = async () => {

    if(name === '' || date === '' || discount === ''){
        notify('من فضلك ادخل البيانات')
        return
    }

    setLoading(true);
    await dispatch(
      createCoupon({
        name: name,
        expire: date,
        discount: discount,
      }),
    );
    await dispatch(getAllCoupon());
    setLoading(false);
  };

  const coupon = useSelector((state) => state.allCoupon.coupon);

  useEffect(() => {
    if (loading === false) {
      if (coupon?.name != "") {
        notify("تم اضافة الكوبون بنجاح");
        setDate("");
        setDiscount("");
        setName("");
      } else {
        notify("هناك مسكله ما");
      }
    }
  }, [loading]);

  //   get all coupon =================

  const allCoupon = useSelector((state) => state.allCoupon.allcoupon);

  useEffect(() => {
    dispatch(getAllCoupon());
  }, []);

  let allCoupons = [];
  if (allCoupon) {
    allCoupons = allCoupon.data;
  } else {
    allCoupons = [];
  }

  

  const notify = (msg) => toast(msg);

  return (
    <div>
      <div className="slider-title bg-light p-2 text-end">
        {" "}
        اضافة كوبون جديد{" "}
      </div>

      <input
        type="text"
        className="select mt-3 px-2"
        placeholder="اسم الكوبون"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        ref={dateRef}
        value={date}
        className="select mt-3 px-2"
        placeholder="تاريخ الانتهاء"
        onFocus={() => (dateRef.current.type = "date")}
        onBlur={() => (dateRef.current.type = "text")}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        className="select mt-3 px-2"
        placeholder="نسبة الخصم"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />

      <div className="text-start">
        <button className="btn btn-dark mt-3" onClick={get}>
          اضافة كوبون
        </button>
      </div>

      {allCoupons?.map((coupon, index) => (
        <AdminCouponCard key={index} coupon={coupon} />
      ))}

      <ToastContainer />
    </div>
  );
}
