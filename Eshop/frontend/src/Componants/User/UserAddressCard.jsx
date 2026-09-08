import React from 'react'
import deleteIcon from '../../Images/delete.png'
import { Link } from 'react-router-dom'

const UserAddressCard = () => {
  return (
    <div className='payment1 p-2 my-4'>
        <div className="d-flex justify-content-between align-items-center mb-2">
            <p className='fw-bold'>المنزل</p>

            <div className="d-flex gap-3">

                <Link to='/user/edit' style={{textDecoration:'none', color:'black'}}>
                    <div className="d-flex align-items-center gap-1">
                        <img src={deleteIcon} width='20px' height='20px' alt="" />
                        <p className='mb-0'>تعديل</p>
                    </div>
                </Link>

                <div className="d-flex gap-1 align-items-center">
                    <img src={deleteIcon} width='20px' height='20px' alt="" />
                    <p className='mb-0'>ازاله</p>
                </div>

            </div>
        </div>

        <h4 className="slider-title text-end fs-5 mt-0">القاهره مدينة نصر شارع التسعين عماره 19</h4>

        <div className='d-flex gap-2'>
            <p className="fw-bold">رقم الهاتف</p>
            <span>01022365178</span>
        </div>

    </div>
  )
}

export default UserAddressCard