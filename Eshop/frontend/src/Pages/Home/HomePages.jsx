import React, { useEffect } from 'react'
import Slider from '../../Componants/Home/Slider'
import HomeCategory from '../../Componants/Home/HomeCategory'
import CardContainer from '../../Componants/Products/CardContainer'
import DiscountSection from '../../Componants/Home/DiscountSection'
import BrandCardContainer from '../../Componants/Brand/BrandCardContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions/productAtion'


const HomePages = () => {

  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getAllProduct())
  },[])


  const allProdcut = useSelector((state) => state.allProduct?.allProduct);
  let slicedProduct = [];
  
  if(allProdcut?.data){
    slicedProduct = allProdcut.data.slice(0,4)
  }else{
    slicedProduct = []
  }
  
  

  


  return (
    <div>
        
        <Slider/>
        <HomeCategory/>
        <CardContainer myProduct={slicedProduct} title='الاكثر مبيعا' btnTitle="المزيد"/>
        <DiscountSection/>
        <CardContainer myProduct={slicedProduct} title="احدث الازياء" btnTitle="المزيد"/>
        <BrandCardContainer/>
      
    </div>
  )
}

export default HomePages