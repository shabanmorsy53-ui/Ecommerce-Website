import React, { useEffect, useState } from "react";
import UserAllOrderContainer from "./UserAllOrderContainer";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrder } from "../../redux/actions/orderAction";

const UserAllOrder = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [myOrder, setMyOrder] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

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
      <div className="slider-title bg-light p-2 text-end">
        اهلا... <span style={{ color: "black" }}>{user.name}</span>
      </div>

      {myOrder.length >= 1 ? (
        myOrder.map((item, index) => (
          <UserAllOrderContainer key={index} nums={index} item={item} />
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
  );
};

export default UserAllOrder;
