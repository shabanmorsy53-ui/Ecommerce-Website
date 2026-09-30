import React from "react";

const UserAllOrderCard = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <div className="d-flex gap-2 mb-3 p-3">
      <div className="w-100">
        <div className="d-flex justify-content-between">
          <h5 className="slider-title fs-5">{cartItem.product.title}</h5>
        </div>

        <div className="box" style={{backgroundColor: cartItem.color ? `${cartItem.color}` : null}}></div>

        <div className="d-flex justify-content-between my-2">
          <div className="d-flex gap-2">
            <p>الكميه:</p>
            <input
              type="number"
              value={cartItem.quantity}
              className="form-control"
              style={{ width: "60px", height: "35px" }}
            />
          </div>

          <span>{cartItem.price} جنيه</span>
        </div>
      </div>
    </div>
  );
};

export default UserAllOrderCard;
