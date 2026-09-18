import React, { useEffect } from "react";
import ProductNav from "../../Componants/Utility/ProductNav";
import ProductDetalis from "../../Componants/Products/ProductDetalis";
import RateContainer from "../../Componants/Rate/RateContainer";
import CardContainer from "../../Componants/Products/CardContainer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getLikeProduct,
  getOneProduct,
} from "../../redux/actions/productAtion";

const ProductDetalisPage = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  const oneProduct = useSelector((state) => state.allProduct.oneProduct || {});

  let item = [];

  if (oneProduct.data) {
    item = oneProduct?.data;
  } else {
    item = [];
  }

  console.log(item);

  // ======================================

  const productLike = useSelector(
    (state) => state.allProduct.productLike || {},
  );

  useEffect(() => {
    if (item.category) {
      dispatch(getLikeProduct(item.category));
    }
  }, [item.category, dispatch]);

  useEffect(() => {
    
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  
  }, [id]);

  return (
    <div style={{ minHeight: "450px" }}>
      <ProductNav />

      <div className="container my-3">
        <ProductDetalis />
        <RateContainer item={item} />
        <CardContainer
          myProduct={productLike.data?.slice(0, 4)}
          title=" المنتجات..."
        />
      </div>
    </div>
  );
};

export default ProductDetalisPage;
