import React from "react";

const ProductDetalisText = () => {
  return (
    <div>
      <h4 className="sub-text">الالكترونيات...</h4>
      <div className="sub-tile">
        ايفون XR بذاكره 170 جيجا بايت ويدعم تقنية 4GLTC
        <p className="card-rate">4.5</p>
      </div>
      <div className="d-flex gap-2">
        <p>الماركه</p>
        <h5>سامسونج</h5>
      </div>
      <div className="parent d-flex gap-3 my-3">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <h4 className="sub-text">المواصفات:</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aspernatur
        ullam, ab dolores maiores, eveniet natus, obcaecati architecto
        asperiores et dolorum iste earum? Ab ut molestiae, incidunt qui officiis
        quibusdam?
      </p>
      <div className="d-flex gap-2">
        <div className="btn btn-light">2200</div>
        <button className="btn btn-dark">اضف للعربه</button>
      </div>
    </div>
  );
};

export default ProductDetalisText;
