import React from "react";
import rate from "../../Images/rate.png";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteReview, getReview } from "../../redux/actions/reviewsAction";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";

const PersonRate = ({ review }) => {
  const { id } = useParams();

  console.log(id);
  console.log(review);

  const user = JSON.parse(localStorage.getItem("user"));

  console.log(user);

  let isTheUser = false;

  if (user.name === review.user.name) {
    isTheUser = true;
  }

  const dispatch = useDispatch();

  const deleteFunc = async () => {
    try {
      await dispatch(deleteReview(review._id));

      notify("تم مسح المنتج");

      setTimeout(() => {
        dispatch(getReview(id));
      }, 1000);
    } catch (e) {
      notify("حدث خطأ أثناء حذف التعليق");
    }
  };

  const notify = (msg) => toast(msg);

  return (
    <div className="border-bottom pt-3 pb-1">
      <div
        class="modal fade"
        id={`exampleModal-${review._id}`}
        tabindex="-1"
        aria-labelledby={`#exampleModal-${review._id}`}
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
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
            data-bs-target={`#exampleModal-${review._id}`}
            style={{ cursor: "pointer", fontSize: "20px", color: "red" }}
          />

          <FaEdit
            style={{ cursor: "pointer", fontSize: "20px", color: "blue" }}
          />
        </div>
      ) : null}

      <ToastContainer />
    </div>
  );
};

export default PersonRate;
