import React, { useEffect, useState } from "react";
import heart from "../../Images/fav-Off.png";
import heart2 from "../../Images/fav-On.png";
import rate from "../../Images/rate.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addWishlist,
  deleteFromWishlist,
} from "../../redux/actions/wishlistAction";
import { toast, ToastContainer } from "react-toastify";

const ProductCard = ({ item, favP = [] }) => {
  console.log(favP);
  console.log(item);

  console.log("PRODUCT CARD RENDER");

  let fav = favP.some((fitem) => fitem === item._id);

  const user = JSON.parse(localStorage.getItem("user"));

  const [favImg, setFavImg] = useState(heart);
  const [isFav, setIsFav] = useState(fav);
  const [addloading, setAddLoading] = useState(true);
  const [removeloading, setRemoveLoading] = useState(true);

  const dispatch = useDispatch();

  const handleWishlist = () => {
    if (user?.role !== "user") return;

    if (isFav === true) {
      deleteWishlist();
    } else {
      addToWishlist();
    }
  };

  useEffect(() => {
    setIsFav(fav);
    setFavImg(fav ? heart2 : heart);
  }, [fav]);

  const data = useSelector((state) => state.allWishlist.addToWishlist || {});
  const data2 = useSelector(
    (state) => state.allWishlist.deleteFromWislist || {},
  );

  console.log(data);

  const addToWishlist = async () => {
    setAddLoading(true);
    await dispatch(
      addWishlist({
        productId: item._id,
      }),
    );

    setAddLoading(false);
  };

  useEffect(() => {
    if (addloading === false) {
      if (data.status === "success") {
        setIsFav(true);
        setFavImg(heart2);
        notify("تم اضافة المنتج الي لمفضله");
      }
    }
  }, [addloading]);

  const deleteWishlist = async () => {
    setRemoveLoading(true);

    await dispatch(deleteFromWishlist(item._id));

    setRemoveLoading(false);
  };

  useEffect(() => {
    if (removeloading === false) {
      if (data2.status === "success") {
        setIsFav(false);
        setFavImg(heart);

        notify("تم حذف المنتج من المفضله");
      }
    }
  }, [removeloading]);

  const notify = (msg) => toast(msg);

  return (
    <div className="col-6 col-md-4 col-lg-3 my-2">
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
        <Link to={`/product/${item.id}`}>
          <img
            src={`http://localhost:8000/products/${item.imageCover}`}
            className="card-img-top"
            alt="card"
          />
        </Link>
        <div className="card-body">
          <div className="fav-off">
            <img src={favImg} onClick={handleWishlist} />
          </div>

          <div>
            <p className="card-title">{item.title}</p>
          </div>

          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center justify-content-center gap-2">
              <img className="rate" src={rate} alt="" />
              <p className="card-rate">4.5</p>
            </div>

            <div className="d-flex align-items-center justify-content-center gap-2">
              <h5 className="card-price mb-0">{item.price}</h5>
              <p className="card-currency mb-0">جنيه</p>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProductCard;
