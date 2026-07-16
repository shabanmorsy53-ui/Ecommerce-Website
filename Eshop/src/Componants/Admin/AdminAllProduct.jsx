import React from 'react'
import AdminAllProductCard from './AdminAllProductCard'

const AdminAllProduct = () => {
  return (
    <div className='row'>
        <div className='admin-content-text'>ادارة جميع المنتجات:</div>
        <AdminAllProductCard/>
        <AdminAllProductCard/>
        <AdminAllProductCard/>
        <AdminAllProductCard/>
        <AdminAllProductCard/>
    </div>
  )
}

export default AdminAllProduct