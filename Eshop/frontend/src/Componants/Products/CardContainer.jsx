import React from 'react'
import SubTitle from '../Utility/SubTitle'
import ProductCard from './ProductCard'
// import cardImage from '../../Images/labtop.png'

const CardContainer = ({title,btnTitle,myProduct}) => {

  console.log(myProduct);
  return (
    <div>
        <div className="container my-4">

            <SubTitle title={title} btnTitle={btnTitle} pathTitle='/product'/>

            <div className="row m-3">

              {
                myProduct ? (
                  myProduct.map((item,index)=>(
                    <ProductCard item={item} />
                    
                  ))
                ) : null
              }

            </div>

        </div>
    </div>
  )
}

export default CardContainer