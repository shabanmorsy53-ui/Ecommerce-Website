import React from "react";
import mobile from "../../Images/mobile.png";
import deleteIcon from "../../Images/delete.png";

const AdminOrderDetalisCard = ({ item,num }) => {
  console.log(item);
  return (
    <div className="d-flex gap-2 mb-3 ps-3 ">
    
        <img
          src={`http://localhost:8000/products/${item.product.imageCover}`}
          height="100%"
          style={{margin:'auto'}}
          width="110px"
          alt=""
        />
      

      <div className="w-100">
        <div className="d-flex justify-content-between">
          <h5 className="slider-title fs-5">طلب رقم #{num+1}</h5>
        </div>

        <div className="w-100">
          <p>{item.product.title}</p>
        </div>

        <div className="box" style={{backgroundColor:`${item.color}`}}></div>

        <div className="d-flex justify-content-between my-2">
          <div className="d-flex gap-2">
            <p>الكميه:</p>
            <input
              type="number"
              className="form-control"
              style={{ width: "60px", height: "35px" }}
              value={item.quantity}
            />
          </div>

          <span>{item.price} جنيه</span>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetalisCard;
