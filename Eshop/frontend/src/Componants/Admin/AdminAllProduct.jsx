import React from 'react'
import AdminAllProductCard from './AdminAllProductCard'

const AdminAllProduct = ({myProduct}) => {
  return (
    <div className='row'>
        <div className='admin-content-text'>ادارة جميع المنتجات:</div>

        {
          myProduct.map((product,index)=>(
            <AdminAllProductCard product={product} key={index}/>
          ))
        }
    </div>
  )
}

export default AdminAllProduct