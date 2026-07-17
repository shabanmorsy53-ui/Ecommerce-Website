import React from 'react'
import { Link } from 'react-router-dom'

const UserSideBar = () => {
  return (
    <div className='sidebar'>

        <Link to='/user/allorder' style={{textDecoration:'none', color:'black'}}>
            <div className=' border-1 border-bottom border-dark text-center child p-3'>
                ادارة الطلبات
            </div>
        </Link>

        <Link to='/user/favourite' style={{textDecoration:'none', color:'black'}}>
            <div className=' border-1 border-bottom border-dark text-center child p-3'>
                قائمة المفضله
            </div>
        </Link>

        <Link to='/user/address' style={{textDecoration:'none', color:'black'}}>
            <div className=' border-1 border-bottom border-dark text-center child p-3'>
                العناوين الشخصيه
            </div>
        </Link>

        <div className=' border-1 border-bottom border-dark text-center child p-3'>
             الملف الشخصي
        </div>

    </div>
  )
}

export default UserSideBar