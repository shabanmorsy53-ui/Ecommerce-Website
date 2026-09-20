import React, { useEffect, useState } from 'react'
import ProductCard from '../Products/ProductCard'
import cardImage from '../../Images/labtop.png'
import CardContainer from '../Products/CardContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWishlist } from '../../redux/actions/wishlistAction'

const UserFavouriteProduct = () => {

  const dispatch = useDispatch();
  const [loading,setLoading] = useState(true);
  const [item,setItems] = useState([]);

  const data = useSelector((state) => state.allWishlist.allwishlist || {});

  
  
  useEffect(()=>{
    const get = async () => {

      setLoading(true)
      await dispatch(getAllWishlist())
      setLoading(false)
    }
    get()
  },[])
  
  useEffect(()=>{
    if(loading === false){
      if(data){
        setItems(data.data.wishList)
      }
    }
  },[loading])

  console.log(item);

  return (
    <div>

        <div className='slider-title bg-light p-2 text-end '>قائمة المفضله</div>

        <div className="row">

          <div className="col-12">
            <CardContainer myProduct={item}/>

          </div>

        </div>


    </div>
  )
}

export default UserFavouriteProduct