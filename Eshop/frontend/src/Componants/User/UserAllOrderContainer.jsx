import React from "react";
import UserAllOrderCard from "./UserAllOrderCard";
import deleteIcon from "../../Images/delete.png";


const UserAllOrderContainer = ({ item, nums }) => {
  console.log(item);
  return (
    <div className="payment1 p-2 rounded-2 my-3" style={{backgroundColor:'#faefef77'}}>
      <div className="mb-3 border-bottom border-1  p-2 d-flex justify-content-between">
        <span> طلب رفم # {nums + 1}</span>

        <span className="d-flex align-items-center gap-2 " style={{cursor:'pointer'}}>
          <img height="20px" width="20px" src={deleteIcon} alt="" />
          <p className="mb-0 slider-title fs-6">ازاله</p>
        </span>

      </div>

      {item?.cartItems?.map((cartItem, index) => (
        <UserAllOrderCard cartItem={cartItem} key={index} />
      ))}

      <div className="d-flex justify-content-between">
        <div className="d-flex gap-3">
          <div className="d-flex gap-2">
            <h5 className="fw-bold">الدفع</h5>
            <span>{item?.isPaid === false ? "لم يتم" : "تم"}</span>
          </div>
          <div className="d-flex gap-2">
            <h5 className="fw-bold">التوصيل</h5>
            <span>{item?.isDelivered === false ? "لم يتم" : "تم"}</span>
          </div>
        </div>

        <p className="fw-bold">{item.totalOrderPrice} جنيه</p>
      </div>
    </div>
  );
};

export default UserAllOrderContainer;
