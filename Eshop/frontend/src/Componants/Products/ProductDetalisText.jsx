import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItem } from "../../redux/actions/cartAction";
import { toast, ToastContainer } from "react-toastify";


const ProductDetalisText = ({ item, category }) => {
  
  const [colorIndex, setColorIndex] = useState("");
  const [chooseColor, setChooseColor] = useState("");
  const [loading, setLoading] = useState(true);

  const handleColor = (color, index) => {
    setColorIndex(index);
    setChooseColor(color);
  };

  const dispatch = useDispatch();

  const addToUserCart = async () => {

    if(item.colors.length >= 1){
      if(chooseColor === ''){
        notify('من فضلك اختر لون')
        return
      }
    }

    setLoading(true)
    await dispatch(
      addToCart({
        productId: item._id,
        color: chooseColor,
      }),
    );
    setTimeout(() => {
      window.location.reload()
    }, 2000);
    setLoading(false)
  };

  const addCart = useSelector((state) => state.allCart.addtocart);

  useEffect(()=>{
    if(loading === false){
      if(addCart.status === "success"){
        notify('تم اضافة المنتج الي العربه')
      }else{
         notify('هناك مشكله في عملية الاضافه')
      }
    }
  },[loading])


    const notify = (msg) => toast(msg);
  

  return (
    <div>
      <h4 className="sub-text">{category?.name || ""}</h4>
      <div className="sub-tile">
        {item.title}
        <p className="card-rate">{item?.ratingAvg}</p>
      </div>
      <div className="d-flex gap-2">
        <p>الماركه</p>
        <h5>سامسونج</h5>
      </div>
      <div className="parent d-flex gap-3 my-3">
        {item.colors
          ? item.colors.map((color, index) => (
              <div
                key={index}
                onClick={() => handleColor(color, index)}
                className="box"
                style={{
                  backgroundColor: `${color}`,
                  border: `${colorIndex === index ? "solid 1px red" : "none"}`,
                }}
              ></div>
            ))
          : null}
      </div>
      <div>
        <h4 className="sub-text">المواصفات:</h4>
        <p style={{ maxWidth: "100%", overflowWrap: "anywhere" }}>
          {item.description}
        </p>
      </div>
      <div className="d-flex gap-2">
        <div className="btn btn-light">{item?.price}جنيه</div>
        <button className="btn btn-dark" onClick={addToUserCart}>اضف للعربه</button>
      </div>

      <ToastContainer/>
    </div>
  );
};

export default ProductDetalisText;
