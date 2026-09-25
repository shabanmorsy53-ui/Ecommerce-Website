import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  discountCoupon,
  getCartItem,
} from "../../redux/actions/cartAction";
import { toast, ToastContainer } from "react-toastify";

const CheckOut = ({ totalPrice }) => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const clearcartfunc = async () => {
    setLoading(true);
    await dispatch(clearCart());
    setLoading(false);
  };

  const cartclear = useSelector((state) => state.allCart.clearcart);

  useEffect(() => {
    if (loading === false) {
      notify("تم حذف العربه");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [loading]);

  // ===============================

  const [couponName, setCouponName] = useState("");
  const [couponLoading, setCouponLoading] = useState(true);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState('');

const handleCoupon = async () => {
  setCouponLoading(true);

  try {
    await dispatch(
      discountCoupon({
        coupon: couponName.trim(),
      })
    );

    setCouponLoading(false);
  } catch (error) {
    setCouponLoading(false);
  }
};

  const discountState = useSelector((state) => state.allCart.discountcoupon);

  console.log(discountState);

useEffect(() => {
  if (couponLoading === false) {
    if (discountState?.status === "success") {
      setPriceAfterDiscount(
        discountState?.data?.totalPriceAfterDiscount
      );

      notify("تم تفعيل كود الخصم");
    } 
  }
}, [discountState, couponLoading]);




  const notify = (msg) => toast(msg);

  return (
    <div className="bg-light p-2">
      <div className="d-flex bg-white">
        <input
          value={couponName}
          onChange={(e) => setCouponName(e.target.value)}
          type="text"
          placeholder="كود الخصم"
          className="text-center w-100  border-2 p-2"
        />
        <button className="btn btn-dark" onClick={handleCoupon}>تطبيق</button>
      </div>

      <div className="w-100 border bg-white p-2  border-2 rounded-2 text-center my-3">
        {
          priceAfterDiscount ? (`بعد الخصم ${priceAfterDiscount} `) : (totalPrice)
        }
          جنيه
      </div>

      <Link to="/order/payment">
        <button className="btn btn-dark w-100">اتمام الشراء</button>
      </Link>

      <button className="btn btn-dark w-100 mt-2" onClick={clearcartfunc}>
        اخلاء العربه
      </button>

      <ToastContainer />
    </div>
  );
};

export default CheckOut;
