import React from 'react'
import rate from '../../Images/rate.png'

const PersonRate = () => {
  return (
    <div className='border-bottom pt-3 pb-1'>

        <div className='d-flex gap-3 align-items-center'>
            <div className="fw-bold">شعبان مرسي</div>
            <img src={rate} height='10px' width='10px' alt="" />
            <p className='card-rate'>4.5</p>
        </div>

        <p className='slider-title text-end mb-0 fs-6'>سعره مناسب جدا وجميل في الاستعمال</p>

    </div>
  )
}

export default PersonRate