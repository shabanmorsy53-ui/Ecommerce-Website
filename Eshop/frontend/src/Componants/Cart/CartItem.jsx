import React, { useEffect, useState } from "react";
import mobile from "../../Images/mobile.png";
import deleteIcon from "../../Images/delete.png";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSpaceficCartItem,
  upDateCartItemQ,
} from "../../redux/actions/cartAction";
import { toast, ToastContainer } from "react-toastify";

const CartItem = ({ item }) => {
  const [loading, setLoading] = useState(true);
  const [upDateLoading, setUpDateLoading] = useState(true);

  const dispatch = useDispatch();

  const removeFunc = async () => {
    setLoading(true);
    await dispatch(removeSpaceficCartItem(item._id));
    setLoading(false);
  };

  const afterRemove = useSelector((state) => state.allCart.removespacefic);

  useEffect(() => {
    if (loading === false) {
      if (afterRemove.status === "success") {
        notify("تم جذف العنصر بنجاح");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        notify("هناك مشكله");
      }
    }
  }, [loading]);

  //   ========================================

  const [upDateQu, setUpDateQu] = useState(item.quantity);

  const upDateCart = (e) => {
    setUpDateQu(e.target.value);
  };

  const changedQuantity = async () => {
    setUpDateLoading(true)
    await dispatch(
      upDateCartItemQ(item._id, {
        quantity: upDateQu,
      }),
    );
    setUpDateLoading(false)
  };

  const afterUpdate = useSelector((state) => state.allCart.updatequancart);

  console.log(afterUpdate);

  useEffect(() => {
    if (upDateLoading === false) {
      if (afterUpdate.status === "success") {
        notify("تم بنجاح");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        notify("هناك مشكله");
      }
    }
  }, [upDateLoading]);

  const notify = (msg) => toast(msg);

  return (
    <div className="d-flex gap-2 mb-3 ps-3 bg-light p-2">
      <div
        className="modal fade"
        id={`exampleModal-${item._id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel-${item._id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                حذف المنتج
              </h1>
            </div>
            <div className="modal-body">هل انت متاكد من عملية الحذف؟</div>
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
                onClick={removeFunc}
              >
                تاكيد
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex gap-3 w-100">
        <div
          style={{
            height: "100%",
            width: "30%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={
              `http://localhost:8000/products/${item.product.imageCover}` ||
              item.product.imageCover
            }
            width="100%"
            height="140px"
            alt=""
          />
        </div>

        <div style={{ width: "70%" }}>
          <div className="d-flex justify-content-between">
            <h5 className="slider-title fs-5">الالكترونيات</h5>

            <span
              className="d-flex align-items-center gap-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal-${item._id}`}
            >
              <img height="20px" width="20px" src={deleteIcon} alt="" />
              <p className="mb-0 slider-title fs-6">ازاله</p>
            </span>
          </div>

          <div className="w-100">
            <p>{item.product.title}</p>
          </div>

          <div className="d-flex gap-2">
            <p>الماركه:</p>
            <span className="fw-bold fs-5">ابل</span>
          </div>

          {item.color !== "" ? (
            <div
              className="box"
              style={{ backgroundColor: `${item.color}` }}
            ></div>
          ) : null}

          <div className="d-flex justify-content-between my-2">
            <div className="d-flex gap-2">
              <p>الكميه:</p>
              <input
                type="number"
                value={upDateQu}
                onChange={(e) => upDateCart(e)}
                className="form-control"
                style={{ width: "60px", height: "35px" }}
              />

              <button className="btn btn-dark" onClick={changedQuantity}>
                تطبيق
              </button>
            </div>

            <span>{item.price} جنيه</span>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default CartItem;
