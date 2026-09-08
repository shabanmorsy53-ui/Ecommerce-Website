import React, { useEffect, useState } from "react";
import avatar from "../../Images/avatar (1).png";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/actions/categoryAction";
import { ToastContainer, toast } from "react-toastify";

const AdminAllBrand = () => {
  const dispatch = useDispatch();

  const [img, setImge] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const res = useSelector((state) => state.allBrand.brand);



  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImge(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (name === "" || selectedFile === null) {
      notify("من فضلك اكمل البيانات", "warn");

      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);

    setLoading(true);
    setIsPress(true);
    await dispatch(createCategory(formData));

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImge(avatar);
      setName("");
      setSelectedFile(null);

      console.log("تم الانتهاء");
      setLoading(true);
      setIsPress(false);

      if (res.status === 201) {
        notify("تم الاضافه بنجاح", "success");
      } else notify("هناك مشكله في عملية الاضافه", "error");
    }
  }, [loading]);

  const notify = (msg) => toast(msg);

  return (
    <div>
      <h4 className="mb-4">اضف ماركه جديده</h4>

      <p className="slider-title mb-0 text-end fs-6">صورة الماركه</p>
      <div>
        <label htmlFor="upload-photo">
          <img style={{ cursor: "pointer" }} src={img} width="120px" alt="" />
        </label>

        <input
          type="file"
          name="photo"
          onChange={onImageChange}
          id="upload-photo"
        />
      </div>

      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="اسم الماركه"
        className="d-block select my-3 px-2"
      />

      <div className="text-start">
        <button onClick={onSubmitHandler} className="btn btn-dark ms-auto">
          حفظ التعديلات
        </button>
      </div>

      {isPress ? loading ? <h3>جاري االتحميل</h3> : <h3>تم الانتهاء</h3> : null}

      <ToastContainer />
    </div>
  );
};

export default AdminAllBrand;
