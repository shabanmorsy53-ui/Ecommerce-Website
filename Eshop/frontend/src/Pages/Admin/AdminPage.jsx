import React, { useEffect } from "react";
import SideBar from "../../Componants/Admin/SideBar";
import AdminAllProduct from "../../Componants/Admin/AdminAllProduct";
import PaginationComponent from "../../Componants/Utility/PaginationComponant";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/productAtion";

const AdminPage = () => {


  const allProdcut = useSelector((state) => state.allProduct.allProduct || {} );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  let slicedProduct = [];

  if (allProdcut.data) {
    slicedProduct = allProdcut.data
  } else {
    slicedProduct = [];
  }

  console.log(allProdcut.data);

  return (
    <div className="container my-3" style={{ minHeight: "430px" }}>
      <div className="row">
        <div className="col-sm-2 col-md-3 col-lg-3">
          <SideBar />
        </div>

        <div className="col-sm-10 col-md-9 col-lg-9">
          <AdminAllProduct myProduct={slicedProduct}/>
          <PaginationComponent />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
