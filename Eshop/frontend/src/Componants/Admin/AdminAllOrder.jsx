import React, { useEffect, useState } from "react";
import AdminAllOrderCard from "./AdminAllOrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrder } from "../../redux/actions/orderAction";

const AdminAllOrder = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getUserOrder());
      setLoading(false);
    };
    get();
  }, []);

  const userOrder = useSelector((state) => state.allOrder.getorder);

  console.log(userOrder);

  useEffect(() => {
    if (loading === false) {
      if (userOrder?.data) {
        setMyOrder(userOrder.data);
      }
    }
  }, [loading]);

  console.log(myOrder);

  return (
    <div>
      <div className="admin-content-text mb-3 bg-light p-2">
        ادارة جميع الطلبات:
      </div>

      <div>
        {myOrder.length >= 1 ? (
          myOrder.map((order, index) => (
            <AdminAllOrderCard
              key={index}
              num={index}
              order={order}
            />
          ))
        ) : (
          <div
            style={{
              backgroundColor: "#dfd1d1",
              width: "100%",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5>لايوجد طلبات</h5>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminAllOrder;
