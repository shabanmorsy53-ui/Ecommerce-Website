import React, { useState } from "react";
import avatar from "../../Images/avatar (1).png";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../redux/actions/categoryAction";

const AdminCategory = () => {
  const dispatch = useDispatch();

  const [img, setImge] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImge(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);


    dispatch(createCategory(formData));

  };

  return (
    <div>
      <h4 className="mb-4">اضف تصنيف جديد</h4>

      <p className="slider-title mb-0 text-end fs-6">صورة التصنيف</p>

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
        value={name}
        type="text"
        placeholder="اسم التصنيف"
        className="d-block select my-3 px-2"
      />

      <div className="text-start">
        <button onClick={onSubmitHandler} className="btn btn-dark ms-auto">
          حفظ التعديلات
        </button>
      </div>
    </div>
  );
};

export default AdminCategory;
