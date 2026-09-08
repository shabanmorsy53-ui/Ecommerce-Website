import React from "react";
import mobile from "../../Images/mobile.png";
import deleteIcon from "../../Images/delete.png";
import { Link } from "react-router-dom";

const AdminAllOrderCard = () => {
  return (
    <Link to="/admin/order/:id" style={{textDecoration:'none', color:'black'}}>
      <div className="d-flex gap-2 mb-3 ps-3 bg-light">
        <div style={{ height: "100%" }}>
          <img src={mobile} height="100%" width="110px" alt="" />
        </div>

        <div className="w-100">
          <div className="d-flex justify-content-between">
            <h5 className="slider-title fs-5">طلب رقم #33456</h5>
            <span className="d-flex align-items-center gap-2 ">
              <img height="20px" width="20px" src={deleteIcon} alt="" />
              <p className="mb-0 slider-title fs-6">ازاله</p>
            </span>
          </div>

          <div className="w-100">
            <p>ايفون برو ماكس ممتاز جدا في الاستعمال</p>
          </div>

          <div className="d-flex gap-2">
            <p>الماركه:</p>
            <span className="fw-bold fs-5">ابل</span>
          </div>

          <div className="box"></div>

          <div className="d-flex justify-content-between my-2">
            <div className="d-flex gap-2">
              <p>الكميه:</p>
              <input
                type="number"
                className="form-control"
                style={{ width: "60px", height: "35px" }}
              />
            </div>

            <span>300 جنيه</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AdminAllOrderCard;
