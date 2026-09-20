import React, { useEffect, useState } from 'react'
import SubTitle from '../Utility/SubTitle'
import ProductCard from './ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWishlist } from '../../redux/actions/wishlistAction'
// import cardImage from '../../Images/labtop.png'

const CardContainer = ({title,btnTitle,myProduct}) => {

  const dispatch = useDispatch();

  const [favProd , setFavProd] = useState([])
  const [loading , setLoading] = useState(true)


  useEffect(()=>{

    const get = async ()=> {
      setLoading(true)
      await dispatch(getAllWishlist())
      setLoading(false)
    }

    get()

  },[])

  const wishList = useSelector((state) => state.allWishlist.allwishlist || {});

  

  useEffect(()=>{
    if(loading === false){
      setFavProd(wishList?.data?.wishList.map((favProduct)=> favProduct._id))
    }

  },[loading])
  
  console.log(favProd);
  return (
    <div>
        <div className="container my-4">

            <SubTitle title={title} btnTitle={btnTitle} pathTitle='/product'/>

            <div className="row m-3">

              {
                myProduct ? (
                  myProduct.map((item,index)=>(
                    <ProductCard item={item} favP={favProd}/>
                    
                  ))
                ) : null
              }

            </div>

        </div>
    </div>
  )
}

export default CardContainer