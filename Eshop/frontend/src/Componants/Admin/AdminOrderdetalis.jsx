import React, { useEffect, useState } from "react";
import AdminOrderDetalisCard from "./AdminOrderDetalisCard";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDeliverOrder,
  changePayOrder,
  getOneOrder,
} from "../../redux/actions/orderAction";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";

const AdminOrderdetalis = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [order, setOrder] = useState();
  const [cartItem, setCartItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isPay, setIsPay] = useState();
  const [payLoading, setPayLoading] = useState(true);
  const [deliver, setIsDeliver] = useState("");
  const [deliverLoading, setDeliverLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getOneOrder(id));
      setLoading(false);
    };
    get();
  }, []);

  const oneOrder = useSelector((state) => state.allOrder.oneorder);

  useEffect(() => {
    if (loading === false) {
      if (oneOrder?.data) {
        setOrder(oneOrder.data);
        setCartItem(oneOrder.data.cartItems);
        setIsPay(oneOrder.data.isPaid);
        setIsDeliver(oneOrder.data.isDelivered);
      }
    }
  }, [loading]);

  console.log(order);
  // ================================

  const pay = async () => {
    setPayLoading(true);
    await dispatch(changePayOrder(id));
    setPayLoading(false);
  };

  const payorder = useSelector((state) => state.allOrder?.pay);

  const handleChangePay = () => {
    if (isPay === "true") {
      pay();
    } else if (isPay === "0") {
      notify("من فضلك قم ب الاختيار");
    }

    console.log(isPay);
  };

  useEffect(() => {
    if (payLoading === false) {
      if (payorder.status === "success") {
        notify("تم الحفظ");
      }
    }
  }, [payLoading]);

  console.log(payorder);

  //   ====================================

  const delivered = async () => {
    setDeliverLoading(true);
    await dispatch(changeDeliverOrder(id));
    setDeliverLoading(false);
  };

  const handleChangeDeliver = () => {
    if (deliver === "true") {
      delivered();
    } else if (deliver === "0") {
      notify("من فضلك قم ب الاختيار");
    }
  };

  const deliverOrder = useSelector((state) => state.allOrder?.deliver);

  useEffect(() => {
    if (deliverLoading === false) {
      if (deliverOrder.status === "success") {
        notify("تم الحفظ");
      }
    }
  }, [deliverLoading]);

  console.log(deliverOrder);

  const notify = (msg) => toast(msg);

  return (
    <div>
      <div className="admin-content-text mb-3 bg-light p-2">
        {" "}
        تفاصيل الطلب :
      </div>
      <div>
        {cartItem.map((item, index) => (
          <AdminOrderDetalisCard item={item} num={index} key={index} />
        ))}
      </div>

      <div className="payment1 p-3">
        <h5 className="fw-bold mb-3">تفاصيل العميل</h5>

        <div className="d-flex gap-2 ">
          <p className="fw-bold">الاسم</p>
          <span>{order?.user?.name}</span>
        </div>

        <div className="d-flex gap-2 ">
          <p className="fw-bold">رقم الهاتف</p>
          <span>{order?.shippingAddress?.phone}</span>
        </div>

        <div className="d-flex gap-2">
          <p className="fw-bold">الايميل</p>
          <span>{order?.user?.email}</span>
        </div>

        <div className="w-100 border border-2 rounded-2 p-2  text-center">
          المجموع{" "}
          <span style={{ fontWeight: "bold" }}>{order?.totalOrderPrice}</span>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-3 gap-2">
          <select
            onChange={(e) => setIsDeliver(e.target.value)}
            name=""
            className="select input-form-area w-50  text-center"
            id=""
            value={deliver}
          >
            <option value="0">حالة التوصيل</option>
            <option value="false">قيد التنفيذ</option>
            <option value="true">تم </option>
          </select>

          <button className="btn btn-dark" onClick={handleChangeDeliver}>
            حفظ
          </button>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-3 gap-2">
          <select
            name=""
            onChange={(e) => setIsPay(e.target.value)}
            className="select input-form-area w-50  text-center"
            id=""
            value={isPay}
          >
            <option value="0">حالة الدفع</option>
            <option value="false">قيد التنفيذ</option>
            <option value="true">تم </option>
          </select>

          <button className="btn btn-dark" onClick={handleChangePay}>
            حفظ
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminOrderdetalis;
