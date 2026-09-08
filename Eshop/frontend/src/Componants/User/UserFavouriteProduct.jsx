import React from 'react'
import ProductCard from '../Products/ProductCard'
import cardImage from '../../Images/labtop.png'

const UserFavouriteProduct = () => {
  return (
    <div>

        <div className='slider-title bg-light p-2 text-end '>قائمة المفضله</div>

        <div className="row">

            <ProductCard title='labtop' img={cardImage}/>
            <ProductCard title='labtop' img={cardImage}/>
            <ProductCard title='labtop' img={cardImage}/>
            <ProductCard title='labtop' img={cardImage}/>
            <ProductCard title='labtop' img={cardImage}/>
            <ProductCard title='labtop' img={cardImage}/>
        </div>


    </div>
  )
}

export default UserFavouriteProduct