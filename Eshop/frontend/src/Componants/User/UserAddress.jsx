import React from 'react'
import UserAddressCard from './UserAddressCard'
import { Link } from 'react-router-dom'

const UserAddress = () => {
  return (
    <div>

        <div className="slider-title p-2 bg-light text-end fs-5">دفتر العناوين</div>

        <UserAddressCard/>
        <UserAddressCard/>
        <UserAddressCard/>

        <div className="text-center">

            <Link to='/user/newaddress' style={{textDecoration:'none'}}>
                <button className="btn btn-dark">اضافة عنوان جديد</button>
            </Link>
        </div>

    </div>
  )
}

export default UserAddress