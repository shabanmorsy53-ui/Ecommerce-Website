import React from "react";
import mobile from "../../Images/mobile.png";
import deleteIcon from "../../Images/delete.png";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <div className="d-flex gap-2 mb-3 ps-3 bg-light p-2">
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
            <span className="d-flex align-items-center gap-2 ">
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
                value={item.quantity}
                className="form-control"
                style={{ width: "60px", height: "35px" }}
              />
            </div>

            <span>{item.price} جنيه</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
