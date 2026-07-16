import React from 'react'
import { Link } from 'react-router-dom'

const CheckOut = () => {
  return (
    <div className='bg-light p-2'>

        <div className='d-flex bg-white'>
            <input type="text" placeholder='كود الخصم' className='text-center w-100  border-2 p-2' />
            <button className='btn btn-dark'>تطبيق</button>
        </div>

        <div className='w-100 border bg-white p-2  border-2 rounded-2 text-center my-3'>
             34000 جنيه
        </div>

        <Link to='/order/payment'>
            <button className='btn btn-dark w-100'>اتمام الشراء</button>
        </Link>    


    </div>
  )
}

export default CheckOut