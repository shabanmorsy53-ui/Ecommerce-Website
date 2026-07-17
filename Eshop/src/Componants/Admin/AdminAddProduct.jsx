import React from "react";
import avatar from "../../Images/avatar (1).png";
import add from '../../Images/add (1).png'
import Select from "react-select";
import { useState } from "react";

const AdminAddProduct = () => {
const options = [
  { value: "apple", label: "Apple" },
  { value: "samsung", label: "Samsung" },
  { value: "xiaomi", label: "Xiaomi" },
];


   const [selected, setSelected] = useState([]);


  return (
    <div>
      <div className="slider-title text-end mb-3">اضافة منتج جديد</div>

      <p className="fs-6 slider-text text-end mb-0">صور المنتج</p>
      <img src={avatar} width="120px" alt="" />

      <input type="text" placeholder="اسم النتج" className="mt-3 px-2 select" />
      <textarea
        name=""
        placeholder="وصف المنتج"
        id=""
        className="select px-2 mt-3"
      ></textarea>
      <input
        type="number"
        placeholder=" السعر قبل الخصم"
        className="mt-3 px-2 select"
      />
      <input
        type="number"
        placeholder=" سعر المنتج"
        className="mt-3 px-2 select"
      />
      <select name="" className="select mt-3 px-2" id="">
        <option value="">التصنيف الرئيسي</option>
        <option value="">التصنيف الاول</option>
        <option value="">التصنيف الثاني</option>
        <option value="">التصنيف الثالث</option>
        <option value="">التصنيف الرابع</option>
      </select>

    <Select
      className="mt-3"
      options={options}
      isMulti
      value={selected}
      onChange={setSelected}
      placeholder="التصنيف الفرعي"
    />

    <select name="" className="select mt-3 px-2" id="">
        <option value=""> الماركه</option>
        <option value="">التصنيف الاول</option>
        <option value="">التصنيف الثاني</option>
        <option value="">التصنيف الثالث</option>
        <option value="">التصنيف الرابع</option>
    </select>

    <p className="slider-title fs-6 text-end mt-3">الالوان المتاحه للمنتج</p>
    <div className="d-flex gap-2 align-items-center">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <img src={add} width='40px' alt="" />
    </div>

    <div className="text-start ةف-3">
        <button className="btn btn-dark">حفظ التعديلات</button>
    </div>
    
    </div>
  );
}

export default AdminAddProduct
