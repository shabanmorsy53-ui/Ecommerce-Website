import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className="d-flex flex-column">
            
            <Link to='/admin/allorder' style={{textDecoration:'none', color:'black'}}>
                <div className='child border-bottom border-1 border-dark text-center p-3'>
                    ادارة الطلبات
                </div>
            </Link>

            <Link to='/admin/product' style={{textDecoration:'none', color:'black'}}>
                <div className='child border-bottom border-1 border-dark  text-center p-3'>
                    ادارة المنتجات
                </div>
            </Link>

            <Link to='/admin/allbrand' style={{textDecoration:'none', color:'black'}}>
                <div className='child border-bottom border-1 border-dark  text-center p-3'>
                    اضف ماركه
                </div>
            </Link>

            <Link to='/admin/category' style={{textDecoration:'none', color:'black'}}>
                <div className='child border-bottom border-1 border-dark  text-center p-3'>
                    اضف تصنيف
                </div>
            </Link>

            <Link to='/admin/subctegory' style={{textDecoration:'none', color:'black'}}>
                <div className='child border-bottom border-1 border-dark  text-center p-3'>
                    اضف تصنيف فرعي
                </div>
            </Link>

            <Link to='/admin/addproduct' style={{textDecoration:'none', color:'black'}}>
            <div className='child border-bottom border-1 border-dark  text-center p-3'>
                اضف منتج
            </div>
            </Link>

        </div>
    </div>
  )
}

export default SideBar