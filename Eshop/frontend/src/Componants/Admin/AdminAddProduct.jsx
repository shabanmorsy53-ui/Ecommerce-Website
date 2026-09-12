import React from "react";
import avatar from "../../Images/avatar (1).png";
import add from "../../Images/add (1).png";
import Select from "react-select";
import { useState, useEffect } from "react";
import MultiImageInput from "react-multiple-image-input";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { getAllBrand } from "../../redux/actions/brandAction";
import { CompactPicker } from "react-color";
import { getDependSubCategory } from "../../redux/actions/subCategoryAction";
import { createProducts } from "../../redux/actions/productAtion";
import { ToastContainer, toast } from 'react-toastify';


const AdminAddProduct = () => {
  const dispatch = useDispatch();

  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState([]);
  const [images, setImages] = useState({});
  const [prodName, setProdName] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [priceBefore, setBriceBefore] = useState("");
  const [priceAfter, setPriceAfter] = useState("");
  const [prodQty, setProdQty] = useState("");
  const [selectedCatId, setSelectedCat] = useState("0");
  const [selctedBrandId, setSelectedBrand] = useState("0");
  const [showPick, setShowPick] = useState(false);
  const [colors, setColors] = useState([]);
  const [loading,setLoading] = useState(true)
  
  const subCat = useSelector((state) => state.subCategory.subCategory);
  


  const onSelectCategory = async (e) => {
    const categoryId = e.target.value;

    setSelectedCat(categoryId);

    if (categoryId != 0) {
      await dispatch(getDependSubCategory(e.target.value));
    }
  };

  useEffect(() => {
    if (Array.isArray(subCat)) {
      const formattedOptions = subCat.map((item) => ({
        value: item._id,
        label: item.name,
      }));
      setOptions(formattedOptions);
    }
  }, [subCat]);

  const addColor = (color) => {
    setColors([...colors, color.hex]);
    setShowPick(false);
  };

  const removeColor = (color) => {
    const filterdColor = colors.filter((e) => e != color);
    setColors(filterdColor);
  };

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const data = useSelector((state) => state.allCategory.category);



  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  const brand = useSelector((state) => state.allBrand.brand);

  const base64ToFile = (base64, filename) => {
    const arr = base64.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];

    const bstr = atob(arr[1]);
    let n = bstr.length;

    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {
      type: mime,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if(prodName === ''){
      notify('من فضلك ادخل اسم المنتج')
      return
    }

    if(prodDesc.length <= 20){
      notify('من فضلك ادخل وصف مفصل عن ذالك')
      return;
    }

    if(Object.keys(images).length < 1){
      notify('من فضلك اختر صوره')
      return
    }



    const formData = new FormData();

    formData.append("title", prodName);
    formData.append("description", prodDesc);
    formData.append("price", priceBefore);
    formData.append("priceAfterDiscount", priceAfter);
    formData.append("availableQuantity", prodQty);

    colors.map((color)=> formData.append('colors[]',color)) 

    formData.append("category", selectedCatId);

    const subCategoryIds = selected.map((item) => item.value);

    subCategoryIds.forEach((id) => {
      formData.append("subCategories[]", id);
    });

    const imageFiles = Object.values(images).map((base64, index) =>
      base64ToFile(base64, `product-${index}.jpeg`),
    );

    if (imageFiles.length > 0) {
      formData.append("imageCover", imageFiles[0]);

      imageFiles.slice(1).forEach((file) => {
        formData.append("imagesOfProduct", file);
      });
    }

    for (let pair of formData.entries()) {

    }

    setLoading(true)

    await dispatch(createProducts(formData));

    setLoading(false)
  };

  const product = useSelector((state) => state.allProduct.product);






  useEffect(()=>{

    if(product.data){
      notify('تم اضافة المنتج')
    }
    if(product.errors){
      notify(`${product.errors[0].msg}`)
    }

    setProdName('')
    setProdDesc('')
    setImages({})
    setColors([])
    setPriceAfter('')
    setPriceAfter('')


  },[loading])


  const notify = (msg) => toast(msg);
  

  return (
    <div>
      <div className="slider-title text-end mb-3">اضافة منتج جديد</div>

      <p className="fs-6 slider-text text-end mb-0">صور المنتج</p>

      <MultiImageInput
        images={images}
        setImages={setImages}
        theme="light"
        max={5}
        cropConfig={{
          crop,
          ruleOfThirds: true,
        }}
      />

      <input
        type="text"
        value={prodName}
        onChange={(e) => setProdName(e.target.value)}
        placeholder="اسم النتج"
        className="mt-3 px-2 select"
      />
      <textarea
        value={prodDesc}
        onChange={(e) => setProdDesc(e.target.value)}
        name=""
        placeholder="وصف المنتج"
        id=""
        className="select px-2 mt-3"
      ></textarea>
      <input
        value={priceBefore}
        onChange={(e) => setBriceBefore(e.target.value)}
        type="number"
        placeholder=" السعر قبل الخصم"
        className="mt-3 px-2 select"
      />
      <input
        value={priceAfter}
        onChange={(e) => setPriceAfter(e.target.value)}
        type="number"
        placeholder=" السعر بعد الخصم"
        className="mt-3 px-2 select"
      />
      <input
        value={prodQty}
        onChange={(e) => setProdQty(e.target.value)}
        type="number"
        placeholder=" كمية المنتج"
        className="mt-3 px-2 select"
      />
      <select
        name="cat"
        className="select mt-3 px-2"
        id=""
        value={selectedCatId}
        onChange={(e) => onSelectCategory(e)}
      >
        <option value="0">التصنيف الرئيسي</option>

        {Array.isArray(data)
          ? data.map((item, index) => (
              <option value={item._id} key={index}>
                {item.name}
              </option>
            ))
          : null}
      </select>

      <Select
        className="mt-3"
        options={options}
        isMulti
        value={selected}
        onChange={setSelected}
        placeholder="التصنيف الفرعي"
      />

      <select
        name=""
        className="select mt-3 px-2"
        id=""
        value={selctedBrandId}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value="0"> الماركه</option>

        {Array.isArray(brand)
          ? brand.map((item, index) => (
              <option value={item._id} key={index}>
                {item.name}
              </option>
            ))
          : null}
      </select>

      <p className="slider-title fs-6 text-end mt-3">الالوان المتاحه للمنتج</p>
      <div className="d-flex gap-2 align-items-center">
        {colors.length >= 1
          ? colors.map((color, index) => (
              <div
                className="box"
                key={index}
                onClick={() => removeColor(color)}
                style={{ backgroundColor: `${color}` }}
              ></div>
            ))
          : null}

        <img
          src={add}
          onClick={() => setShowPick(!showPick)}
          width="40px"
          alt=""
          style={{ cursor: "pointer" }}
        />
        {showPick === true ? (
          <CompactPicker onChangeComplete={addColor} />
        ) : null}
      </div>

      <div className="text-start ">
        <button onClick={onSubmit} className="btn btn-dark">
          حفظ التعديلات
        </button>
      </div>


      <ToastContainer />
      
    </div>
  );
};

export default AdminAddProduct;
