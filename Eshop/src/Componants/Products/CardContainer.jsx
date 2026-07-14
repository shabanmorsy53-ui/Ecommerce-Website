import React from 'react'
import SubTitle from '../Utility/SubTitle'
import ProductCard from './ProductCard'
import cardImage from '../../Images/labtop.png'

const CardContainer = ({title,btnTitle}) => {
  return (
    <div>
        <div className="container my-4">

            <SubTitle title={title} btnTitle={btnTitle}/>

            <div className="row m-3">

                <ProductCard title='labtop' img={cardImage} />
                <ProductCard title='labtop' img={cardImage} />
                <ProductCard title='labtop' img={cardImage} />
                <ProductCard title='labtop' img={cardImage} />

            </div>

        </div>
    </div>
  )
}

export default CardContainer