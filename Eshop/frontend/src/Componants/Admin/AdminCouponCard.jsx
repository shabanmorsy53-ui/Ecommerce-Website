import React from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../../Images/delete.png";
import { useDispatch} from "react-redux";
import { deleteCoupon, getAllCoupon } from "../../redux/actions/couponAction";

export default function AdminCouponCard({ coupon }) {
  

  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dispatch(deleteCoupon(coupon._id));
    await dispatch(getAllCoupon());
  };


  return (
    <div className="payment1 p-2 my-4">
      <div
        className="modal fade"
        id={`exampleModal-${coupon._id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel-${coupon._id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                حذف الكوبون
              </h1>
            </div>
            <div className="modal-body">هل انت متاكد من حذف الكوبون</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                تراجع
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleDelete}
              >
                تاكيد
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="fw-bold">اسم الكوبون : {coupon.name}</p>

        <div className="d-flex gap-3">
          <Link
            to={`/admin/editcoupon/${coupon._id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="d-flex align-items-center gap-1">
              <img src={deleteIcon} width="20px" height="20px" alt="" />
              <p className="mb-0">تعديل</p>
            </div>
          </Link>

          <div
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal-${coupon._id}`}
            className="d-flex gap-1 align-items-center"
            style={{ cursor: "pointer" }}
          >
            <img src={deleteIcon} width="20px" height="20px" alt="" />
            <p className="mb-0">ازاله</p>
          </div>
        </div>
      </div>

      <h4 className="slider-title text-end fs-5 mt-0">
        تاريخ الانتهاء : {new Date(coupon.expire).toLocaleDateString("en-GB")}
      </h4>

      <div className="d-flex gap-2">
        <p className="fw-bold">نسبه الخصم :</p>
        <span>{coupon.discount}%</span>
      </div>
    </div>
  );
}
