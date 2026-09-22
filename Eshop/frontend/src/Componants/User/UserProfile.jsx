import React, { useEffect, useState } from "react";
import deleteIcon from "../../Images/delete.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentUser,
  upDateUserData,
  upDateUserPass,
} from "../../redux/actions/authAction";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const [loading, setLoading] = useState(true);
  const [passLoading, setPassLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getCurrentUser());
      setLoading(false);
    };
    get();
  }, []);

  const currentuser = useSelector((state) => state.authReducer.currentuser);

  useEffect(() => {
    if (loading === false) {
      if (currentuser?.data) {
        setUser(currentuser.data);
      }
    }
  }, [loading]);

  //   ======================================

  const changePass = async () => {
    setPassLoading(true);
    await dispatch(
      upDateUserPass({
        password: newPass,
      }),
    );
    setPassLoading(false);
  };

  const newPassword = useSelector((state) => state.authReducer.changepass);

  useEffect(() => {
    if (passLoading === false) {
      if (newPassword) {
        notify("تم تغيير كلمة السر بنجاح");
        setTimeout(() => {
          navigate("/login");
          localStorage.removeItem("user");
          localStorage.removeItem("tkn");
        }, 2000);
      } else {
        notify("هناك مشكلة في تغيير كلمة السر");
      }
    }
  }, [passLoading]);

  // =========================================

  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');

  useEffect(() => {
  if (currentuser?.data) {
    const data = currentuser.data;

    setUser(data);
    setNewName(data.name || "");
    setNewEmail(data.email || "");
    setNewPhone(data.addresses?.[0]?.phone || "");
  }
}, [currentuser]);

  const handleUpdate = async () => {
    await dispatch(
      upDateUserData({
        name: newName,
        email: newEmail,
        phone: newPhone,
      }),
    );
  };

  const upDatedUser = useSelector((state) => state.authReducer.updateuser);

  console.log(upDatedUser);


  const notify = (msg) => toast(msg);

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                تعديل البيانات
              </h1>
            </div>
            <div className="modal-body">
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                type="text"
                className="select"
                placeholder="تغيير الاسم"
              />
              <input
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                type="text"
                className="select"
                placeholder="تغيير الايميل"
              />
              <input
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                type="text"
                className="select"
                placeholder="تغيير الهاتف"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                تراجع
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleUpdate}
              >
                تاكيد
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-title bg-light p-2 text-end"> الصفحه الشخصيه </div>

      <div className="payment1 p-2 my-3">
        <div className="d-flex justify-content-between ">
          <div className="d-flex gap-2">
            <p className="fw-bold">الاسم</p>
            <span>{user.name}</span>
          </div>

          <div
            className="d-flex gap-2 align-items-center"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <img src={deleteIcon} width="20px" height="20px" alt="" />
            <span>تعديل</span>
          </div>
        </div>

        <div className="d-flex gap-2">
          <p className="fw-bold">رقم التليفون</p>
          <span style={{ display: "flex", gap: "10px" }}>
            {user.addresses
              ?.map((item) => (
                <div
                  style={{
                    backgroundColor: "#e8cccc",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  {item.phone}
                </div>
              ))
              .splice(0, 2)}
          </span>
        </div>

        <div className="d-flex gap-2">
          <p className="fw-bold"> الايميل</p>
          <span>{user.email}</span>
        </div>
      </div>

      <div className="mt-4 text-start" style={{ width: "80%" }}>
        <h4 className="text-end">تغير كلمة المرور</h4>

        <input
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          type="text"
          className="select"
          placeholder=" كلمة المرور الجديده"
        />

        <button className="btn btn-dark mt-3" onClick={changePass}>
          حفظ كلمة السر
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default UserProfile;
