import React from 'react'
import ProductNav from '../../Componants/Utility/ProductNav'
import ProductDetalis from '../../Componants/Products/ProductDetalis'
import RateContainer from '../../Componants/Rate/RateContainer'
import CardContainer from '../../Componants/Products/CardContainer'

const ProductDetalisPage = () => {
  return (
    <div style={{minHeight:'450px'}}>
        <ProductNav/>

        <div className="container my-3">
            <ProductDetalis/>
            <RateContainer/>    
           <CardContainer title=" المنتجات..." />
        </div>


    </div>
  )
}

export default ProductDetalisPage