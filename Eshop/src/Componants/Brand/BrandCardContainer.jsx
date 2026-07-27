import React, { useEffect } from "react";
import BrandCard from "./BrandCard";
import brandImage from "../../Images/brand1.png";
import brandImage2 from "../../Images/brand2.png";
import brandImage3 from "../../Images/brand3.png";
import SubTitle from "../Utility/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrand } from "../../redux/actions/brandAction";

const BrandCardContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrand());
  }, []);

  const data = useSelector((state) => state.allBrand.brand);
  const loading = useSelector((state) => state.allBrand.loading);

  console.log(data);


  return (
    <div className="container">
      <SubTitle title="اشهر الماركات" btnTitle="المزيد" pathTitle="/allbrand" />
      <div className="row mx-3">

        {
          loading === false ?
          (
          data ? 
            (
              data.map((item)=>( <BrandCard name={item.name} brandImage={brandImage2} key={item._id}/>) )
            ):
            (<h3>لايوجد ماركات لعرضها</h3>)
          ):
          (
            <div className="m-auto spinner-border text-primary" role="status">
              <span className=" visually-hidden">Loading...</span>
            </div>
          )

        }


       
      </div>
    </div>
  );
};

export default BrandCardContainer;
