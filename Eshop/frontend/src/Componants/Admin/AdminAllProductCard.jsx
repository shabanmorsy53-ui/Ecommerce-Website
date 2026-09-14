import React from "react";
import { Link } from "react-router-dom";
import rate from "../../Images/rate.png";
import heart from "../../Images/fav-Off.png";
import img from "../../Images/labtop.png";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/actions/productAtion";

const AdminAllProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const deleteFunc = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload();
  };

  return (
    <div className="col-sm-12 col-md-3 col-lg-4 mb-3">
      <div
        class="modal fade"
        id={`exampleModal-${product._id}`}
        tabindex="-1"
        aria-labelledby={`exampleModalLabel-${product._id}`}
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                تاكيد الحذف
              </h1>
            </div>
            <div class="modal-body">هل انت متاكد من عملية الحذف؟</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                تراجع
              </button>
              <button
                onClick={() => deleteFunc(product._id)}
                data-bs-dismiss="modal"
                type="button"
                class="btn btn-primary"
              >
                تاكيد
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card "
        style={{
          width: "100%",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          border: "none",
          backgroundColor: "#ffffff",
          borderRadius: "8px",
        }}
      >
        <div className="d-flex justify-content-between p-2">
          <Link to={`/admin/update/${product.id}`}>
            <span className="btn btn-success">تعديل</span>
          </Link>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#exampleModal-${product.id}`}
          >
            أزاله
          </button>
        </div>
        <Link to={`/product/${product.id}`}>
          <img
            src={`http://localhost:8000/products/${product.imageCover}`}
            className="card-img-top"
            alt="card"
          />
        </Link>
        <div className="card-body">
          <div className="fav-off">
            <img src={heart} />
          </div>

          <div>
            <p className="card-title">{product.title}</p>
          </div>

          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center justify-content-center gap-2">
              <img className="rate" src={rate} alt="" />
              <p className="card-rate">{product.ratingAvg}</p>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-2">
              <h5 className="card-price mb-0">{product.price}</h5>
              <p className="card-currency mb-0">جنيه</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllProductCard;
