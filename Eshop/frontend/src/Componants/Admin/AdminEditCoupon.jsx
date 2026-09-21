import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editCoupon, getOneCoupon } from "../../redux/actions/couponAction";
import { toast, ToastContainer } from "react-toastify";

export default function AdminEditCoupon() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [discount, setDiscount] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();
  const oneCoupon = useSelector((state) => state.allCoupon?.onecoupon);

  useEffect(() => {
    const get = async () => {
      await dispatch(getOneCoupon(id));
    };
    get();
  }, [id]);

  useEffect(() => {
    if (oneCoupon?.data) {
      setName(oneCoupon?.data?.name);
      setDate(new Date(oneCoupon?.data?.expire).toLocaleDateString("en-GB"));
      setDiscount(oneCoupon?.data?.discount);
    }
  }, [oneCoupon]);

  const onSubmit = async () => {
    if (name === "" || date === "" || discount === "") {
      notify("من فضلك ادخل البيانات");
      return;
    }

    await dispatch(
      editCoupon(id, {
        name: name,
        expire: date,
        discount: discount,
      }),
    );

    if (editItem?.data) {
      notify("تم تعديل المنتج بنجاح");
    }

    setTimeout(() => {
      navigate("/admin/addCoupon");
    }, 1500);
  };

  const editItem = useSelector((state) => state.allCoupon.editcoupon);

  console.log(editItem);

  const notify = (msg) => toast(msg);

  return (
    <div>
      <div className="slider-title bg-light p-2 text-end"> تعديل الكوبون </div>

      <input
        type="text"
        className="select mt-3 px-2"
        placeholder="اسم الكوبون"
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={date || ""}
        className="select mt-3 px-2"
        placeholder="تاريخ الانتهاء"
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        className="select mt-3 px-2"
        placeholder="نسبة الخصم"
        value={discount || ""}
        onChange={(e) => setDiscount(e.target.value)}
      />

      <div className="text-start">
        <button className="btn btn-dark mt-3" onClick={onSubmit}>
          تاكيد
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
