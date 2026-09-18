import React, { useEffect } from 'react'
import ProductGallery from './ProductGallery'
import ProductDetalisText from './ProductDetalisText'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct } from '../../redux/actions/productAtion'
import { getOneCategory } from '../../redux/actions/categoryAction'

const ProductDetalis = () => {

  const {id} = useParams()
  console.log(id);

  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getOneProduct(id))
  },[id])


  const oneProduct = useSelector((state) => state.allProduct.oneProduct);
  

  let item = [];

  if(oneProduct?.data){
    item = oneProduct.data;
  }else{
    item = []
  }

  console.log(item);

  // ===========================================================

  const spaceficCat = useSelector((state) => state.allCategory.oneCategory||{});

console.log("SPACEFIC CATEGORY:", spaceficCat);



  useEffect(()=>{
   
    if(item?.category){
      
      dispatch(getOneCategory(item.category))

      
    }
  },[item?.category,dispatch])


  


  return (
    <div className='row'>
        
        <div className="col-md-4 col-sm-12 mb-3">
            <ProductGallery item={item}/>
        </div>

        <div className="col-md-8 col-sm-12 px-3">
            <ProductDetalisText category={spaceficCat} item={item}/>
        </div>

    </div>
  )
}

export default ProductDetalis