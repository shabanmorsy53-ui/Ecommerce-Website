import React from 'react'
import AdminAllOrderCard from './AdminAllOrderCard'

const AdminAllOrder = () => {
  return (
    <div >
        
        <div className='admin-content-text mb-3 bg-light p-2'>ادارة جميع الطلبات:</div>

        <div>
            <AdminAllOrderCard/>
            <AdminAllOrderCard/>
            <AdminAllOrderCard/>
        </div>

    </div>
  )
}

export default AdminAllOrder