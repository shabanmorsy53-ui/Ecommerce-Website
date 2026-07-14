import React from 'react'

const BrandCard = ({brandImage}) => {
  return (
    <div className='col-6 col-md-4 col-lg-2 my-4'>

        <div className="card" style={{width: "100%"}}>
            <img src={brandImage} className="card-img-top" alt="brand_img"/>
        </div>

    </div>
  )
}

export default BrandCard