import React, { useState } from "react";
import rate from "../../Images/rate.png";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteReview,
  getReview,
  upDateReview,
} from "../../redux/actions/reviewsAction";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";

const PersonRate = ({ review }) => {
  const { id } = useParams();

  console.log(id);
  console.log(review);

  const user = JSON.parse(localStorage.getItem("user") || "");

  console.log(user);

  let isTheUser = false;

  if (user.name === review.user.name) {
    isTheUser = true;
  }

  const dispatch = useDispatch();

  const deleteFunc = async () => {
    try {
      await dispatch(deleteReview(review._id));

      notify("تم مسح التعليق");

      await dispatch(getReview(id));
    } catch (e) {
      notify("حدث خطأ أثناء حذف التعليق");
    }
  };

  // ================================

  const [value, setValue] = useState(review.rating);
  const [newComment, setNewComment] = useState(review.title);

  const upDatFunc = async () => {
    try {
      await dispatch(
        upDateReview(review._id, {
          title: newComment,
          rating: value,
        }),
      );
      
      await dispatch(getReview(id));
      

      notify("تم التعديل بنجاح");
    } catch (e) {
      console.log(e);
      notify("هناك مشكله في عملية التعديل");
    }
  };

  const notify = (msg) => toast(msg);

  return (
    <div className="border-bottom pt-3 pb-1">
      <div
        class="modal fade"
        id={`deleteModal-${review._id}`}
        tabindex="-1"
        aria-labelledby={`deleteModalLabel-${review._id}`}
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id={`deleteModalLabel-${review._id}`}>
                تاكيد الحذف
              </h1>
            </div>
            <div class="modal-body">هل انت متاكد من عملية الحذف؟</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                تراجع
              </button>
              <button
                data-bs-dismiss="modal"
                type="button"
                class="btn btn-primary"
                onClick={deleteFunc}
              >
                تاكيد
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id={`editModal-${review._id}`}
        tabindex="-1"
        aria-labelledby={`editModalLabel-${review._id}`}
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id={`editModalLabel-${review._id}`}>
                تعديل التعليق
              </h1>
            </div>
            <div class="modal-body">
              <Rating
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <input
                type="text"
                style={{ width: "100%" }}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                تراجع
              </button>
              <button
                data-bs-dismiss="modal"
                type="button"
                class="btn btn-primary"
                onClick={upDatFunc}
              >
                تعديل
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex gap-3 align-items-center">
        <div className="fw-bold">{review.user.name}</div>
        <img src={rate} height="10px" width="10px" alt="" />
        <p className="card-rate">{review.rating}</p>
      </div>

      <p className="slider-title text-end mb-0 fs-6">{review.title}</p>

      {isTheUser ? (
        <div className="d-flex justify-content-end">
          <MdDelete
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#deleteModal-${review._id}`}
            style={{ cursor: "pointer", fontSize: "20px", color: "red" }}
          />

          <FaEdit
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#editModal-${review._id}`}
            style={{ cursor: "pointer", fontSize: "20px", color: "blue" }}
          />
        </div>
      ) : null}

      <ToastContainer />
    </div>
  );
};

export default PersonRate;
