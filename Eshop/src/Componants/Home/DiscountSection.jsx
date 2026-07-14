import React from 'react'
import laptops from '../../Images/laptops.png'

const DiscountSection = () => {
  return (
    <div className='container '>

        <div className="row discount-backcolor  d-flex my-3 mx-2 align-items-center  ">
          

            <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="discount-title text-center px-5 mx-5">
                    خصم يصل حتي 20% علي اجهزة اللابتوب
                </div>
            </div>

            <div className="col-sm-12 col-md-6 text-center col-lg-6">
              <img src={laptops} className='dicount-img' alt="" />
            </div>

        </div>

    </div>
  )
}

export default DiscountSection