import React, { useEffect, useState } from "react";
import ProductNav from "../../Componants/Utility/ProductNav";
import SearchCountResult from "../../Componants/Utility/SearchCountResult";
import SideFilter from "../../Componants/Utility/SideFilter";
import CardContainer from "../../Componants/Products/CardContainer";
import PaginationComponent from "../../Componants/Utility/PaginationComponant";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProduct,
  getSearchProduct,
  getSortProduct,
} from "../../redux/actions/productAtion";

const CategoryShopProduct = () => {
  const dispatch = useDispatch();

  const allProdcut = useSelector((state) => state.allProduct.allProduct||{});

  const [word, setWord] = useState(localStorage.getItem("word") || "");
  const [sortWord, setSortWord] = useState(
    localStorage.getItem("sortEvent") || "",
  );

  useEffect(() => {
    const handleSearch = () => {
      setWord(localStorage.getItem("word") || "");
    };

    window.addEventListener("searchChanged", handleSearch);

    return () => {
      window.removeEventListener("searchChanged", handleSearch);
    };
  }, []);

  useEffect(() => {
    const handleSort = () => {
      setSortWord(localStorage.getItem("sortEvent"));
    };

    window.addEventListener("sortEvent", handleSort);

    return () => {
      window.removeEventListener("sortEvent", handleSort);
    };
  }, []);

  useEffect(() => {
    if (word === "" && sortWord === "") {
      dispatch(getAllProduct());
    }
    if (word !== "" && sortWord === "") {
      dispatch(getSearchProduct(word));
    }
    if (word === "" && sortWord !== "") {
      dispatch(getSortProduct(sortWord));
    }
    if (word !== "" && sortWord !== "") {
      dispatch(getSearchProduct(word,sortWord));
    }
  }, [sortWord, word, dispatch]);

  return (
    <div style={{ minHeight: "450px" }}>
      <ProductNav />

      <div className="container">
        <SearchCountResult
          title={`هناك اكتر من   ${allProdcut.data?.length}منتج `}
        />

        <div className="row">
          <div className="col-2">
            <SideFilter />
          </div>

          <div className="col-10">
            <CardContainer myProduct={allProdcut.data} />
            <PaginationComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryShopProduct;
