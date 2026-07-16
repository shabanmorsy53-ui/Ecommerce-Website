import React from 'react'
import ProductGallery from './ProductGallery'
import ProductDetalisText from './ProductDetalisText'

const ProductDetalis = () => {
  return (
    <div className='row'>
        
        <div className="col-md-4 col-sm-12 mb-3">
            <ProductGallery/>
        </div>

        <div className="col-md-8 col-sm-12 px-3">
            <ProductDetalisText/>
        </div>

    </div>
  )
}

export default ProductDetalis