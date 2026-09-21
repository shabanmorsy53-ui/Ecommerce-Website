import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";
import { getAllCategory } from "../../redux/actions/categoryAction";

const SideFilter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrand());
    };

    get();
  }, []);

  const allCat = useSelector((state) => state.allCategory?.category);
  const allBrand = useSelector((state) => state.allBrand?.brand);

  console.log(allCat);
  console.log(allBrand);

  const  [catChecked, setCatChecked] = useState([])

  const checked = (e) => {
    let value = e.target.value;

    if(value === '0'){
        setCatChecked([])
    }else{
        if(e.target.checked === true){
            setCatChecked([...catChecked,value])
        }
        if(e.target.checked === false){
            setCatChecked(catChecked.filter((check)=> check != value))
        }
    }
  }
  const  [brandChecked, setBrandChecked] = useState([])

  const checkBrand = (e) => {
    let value = e.target.value;

    if(value === '0'){
        setBrandChecked([])
    }else{
        if(e.target.checked === true){
            setBrandChecked([...brandChecked,value])
        }
        if(e.target.checked === false){
            setBrandChecked(catChecked.filter((check)=> check != value))
        }
    }
  }

  let cat = [];

  if(allCat){
    cat = allCat
  }else{
    cat = []
  }


  return (
    <div>
      <div className="row">
        <div className="d-flex flex-column">
          <div className="sub-tile">الفئه</div>

          <div className="d-flex gap-2 my-2 align-items-center">
            <input type="checkbox" value='0' onChange={checked}/>
            <div>الكل</div>
          </div>

          {cat ? (
            cat?.map((cat, index) => (
              <div className="d-flex gap-2 my-2 align-items-center">
                <input type="checkbox"  value={cat._id} onChange={checked}/>
                <div>{cat.name}</div>
              </div>
            ))
          ) : (
            <h2>لايوجد تصنيفات</h2>
          )}

          <div className="sub-tile my-2">الماركه</div>

          <div className="d-flex gap-2 mb-2 align-items-center">
            <input onChange={checkBrand} value='0'  type="checkbox" />
            <div>الكل</div>
          </div>

          {allBrand ? (
            allBrand?.map((brand, index) => (
              <div className="d-flex gap-2 my-2 align-items-center">
                <input onChange={checkBrand} value={brand._id} type="checkbox" />
                <div>{brand.name}</div>
              </div>
            ))
          ) : (
            <h2>لايوجد ماركات</h2>
          )}

          <div className="sub-tile my-2">السعر</div>

          <div className="d-flex gap-2 my-2 align-items-center">
            <div>من</div>
            <input style={{ width: "60px" }} type="text" />
          </div>

          <div className="d-flex gap-2 my-2 align-items-center">
            <div>الي</div>
            <input style={{ width: "60px" }} type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideFilter;
