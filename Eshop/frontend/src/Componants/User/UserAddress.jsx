import React, { useEffect } from "react";
import UserAddressCard from "./UserAddressCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserAddress } from "../../redux/actions/addresseAction";

const UserAddress = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAddress());
  }, []);

  const allAddress = useSelector((state) => state.alladdress.alladdress);

  

  return (
    <div>
      <div className="slider-title p-2 bg-light text-end fs-5">
        دفتر العناوين
      </div>

      {allAddress?.data?.length >= 1 ? (
        allAddress?.data?.map((address, index) => (
          <UserAddressCard key={index} item={address} />
        ))
      ) : (
        <div
          style={{
            width: "100%",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f4eeee",
            marginBlock: "10px",
          }}
        >
          <h3>لايوجد عناوين</h3>
        </div>
      )}
      <div className="text-center">
        <Link to="/user/newaddress" style={{ textDecoration: "none" }}>
          <button className="btn btn-dark">اضافة عنوان جديد</button>
        </Link>
      </div>
    </div>
  );
};

export default UserAddress;
