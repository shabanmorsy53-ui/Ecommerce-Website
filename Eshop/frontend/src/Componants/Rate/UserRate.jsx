import React, { useEffect } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createReviews, getReview } from "../../redux/actions/reviewsAction";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../redux/actions/productAtion";

const UserRate = ({ item }) => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [value, setValue] = useState(4.5);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUserName(JSON.parse(localStorage.getItem("user")));
    }
  }, []);



  const review = useSelector((state) => state.allReview.review);
  console.log(review);

  

const onSubmit = async () => {
  if (comment === "") {
    notify("من فضلك اكتب تعليق");
    return;
  }

  if (value <= 1) {
    notify("من فضلك اضف تقييم للمنتج");
    return;
  }

  try {
    setLoading(true);

    await dispatch(
      createReviews(id, {
        title: comment,
        rating: value,
      })
    );
    notify("تم اضافة التعليق");
    await dispatch(getReview(id));
    await dispatch(getOneProduct(id));

    setComment("");


  } catch (e) {
    notify(
      e.response?.data?.errors?.[0]?.msg ||
      "يوجد مشكله في عملية التعليق"
    );
    await dispatch(getOneProduct(id));
    setComment('')
  } finally {
    setLoading(false);
  }
};



  const notify = (msg) => toast(msg);

  return (
    <div className=" my-3">
      <div
        className="d-flex gap-2 align-items-center justify-content-end"
        dir="ltr"
      >
        <Rating
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />

        <span className="fw-bold">{value}</span>
        <div className="fw-bold ms-4">{userName.name}</div>
      </div>

      <div className="text-start">
        <textarea
          placeholder="اكتب تعليقك..."
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          className="form-control my-3 p-2"
          rows={3}
          id=""
        ></textarea>
        <button onClick={onSubmit} className="btn btn-dark">
          سجل تعليقك
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default UserRate;
