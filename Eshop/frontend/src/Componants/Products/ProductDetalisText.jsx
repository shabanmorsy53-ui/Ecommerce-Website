import React from "react";

const ProductDetalisText = ({item,category}) => {
  return (
    <div>
      <h4 className="sub-text">{category.name}</h4>
      <div className="sub-tile">
        {item.title}
        <p className="card-rate">{item.ratingAvg}</p>
      </div>
      <div className="d-flex gap-2">
        <p>الماركه</p>
        <h5>سامسونج</h5>
      </div>
      <div className="parent d-flex gap-3 my-3">

        {
          item.colors ? (item.colors.map((color,index)=>(
            
            <div className="box" style={{backgroundColor:`${color}`}}></div>
          ))) : null
        }
      </div>
      <div>

      <h4 className="sub-text">المواصفات:</h4>
      <p style={{maxWidth:'100%',overflowWrap:'anywhere'}}>
        {
          item.description
        }
      </p>
      </div>
      <div className="d-flex gap-2">
        <div className="btn btn-light">{item.price}جنيه</div>
        <button className="btn btn-dark">اضف للعربه</button>
      </div>
    </div>
  );
};

export default ProductDetalisText;
