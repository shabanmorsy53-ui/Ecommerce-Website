import React, { useEffect, useState } from "react";
import deleteIcon from "../../Images/delete.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAddress, getUserAddress } from "../../redux/actions/addresseAction";

const UserAddressCard = ({ item }) => {


  const [loading , setLoading] = useState(true)

  const dispatch = useDispatch();

  const removeAddress = async () => {
    setLoading(true)
    await dispatch(deleteUserAddress(item._id))
    setLoading(false)
  }

  const newAddress = useSelector((state) => state.alladdress.alladdress);

  console.log(newAddress);

  useEffect(()=>{
    if(loading === false){
        if(newAddress?.status === "success"){
           dispatch( getUserAddress() )

        }
    }
  },[loading])


  return (
    <div className="payment1 p-2 my-4">
      <div
        className="modal fade"
        id={`exampleModal-${item._id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel-${item._id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                حذف العنوان
              </h1>
            </div>
            <div className="modal-body">هل انت متاكد من عملية الحذف؟</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
              تراجع
              </button>
              <button type="button"  data-bs-dismiss="modal" className="btn btn-primary" onClick={removeAddress}>
                تاكيد
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-2">
        <p className="fw-bold">{item.alias}</p>

        <div className="d-flex gap-3">
          <Link
            to="/user/edit"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="d-flex align-items-center gap-1">
              <img src={deleteIcon} width="20px" height="20px" alt="" />
              <p className="mb-0">تعديل</p>
            </div>
          </Link>

          <div
            className="d-flex gap-1 align-items-center"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal-${item._id}`}
          >
            <img src={deleteIcon} width="20px" height="20px" alt="" />
            <p className="mb-0">ازاله</p>
          </div>
        </div>
      </div>

      <h4 className="slider-title text-end fs-5 mt-0">{item.details}</h4>

      <div className="d-flex gap-2">
        <p className="fw-bold">رقم الهاتف</p>
        <span>{item.phone}</span>
      </div>
    </div>
  );
};

export default UserAddressCard;
