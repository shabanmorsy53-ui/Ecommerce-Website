import React from "react";
import mobile from "../../Images/mobile.png";
import deleteIcon from "../../Images/delete.png";
import { Link } from "react-router-dom";

const AdminAllOrderCard = ({order,num}) => {

  console.log(order);
  return (
    <Link to={`/admin/order/${order._id}`} style={{textDecoration:'none', color:'black'}}>
      <div className="d-flex gap-2 mb-3 p-3 bg-light">

        <div className="w-100">
          <div className="d-flex justify-content-between">
            <h5 className="slider-title fs-5">طلب رقم #{num + 1 }</h5>
            <span className="d-flex align-items-center gap-2 ">
              <img height="20px" width="20px" src={deleteIcon} alt="" />
              <p className="mb-0 slider-title fs-6">ازاله</p>
            </span>
          </div>

          <div className="w-100">
            <span style={{fontWeight:'bold'}}>الايميل</span>
            <p>{order.user.email}</p>
          </div>

          <div className="d-flex gap-2">
            <p>اسم العميل:</p>
            <span className="fw-bold fs-6">{order.user.name}</span>
          </div>

          <div className="d-flex justify-content-end">
            <span>{order.totalOrderPrice} جنيه</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdminAllOrderCard;
