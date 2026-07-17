import React from 'react'
import UserAllOrderCard from './UserAllOrderCard'

const UserAllOrderContainer = () => {
  return (
    <div className='payment1 p-2 rounded-2 my-3'>

        <div className='mb-3 border-bottom border-1  p-2 '>طلب رفم #33345</div>


        <UserAllOrderCard/>
        <UserAllOrderCard/>


        


        <div className="d-flex justify-content-between">


            <div className="d-flex gap-2">
                <h5 className="fw-bold">الحاله</h5>
                <span>قيد التنفيذ</span>
            </div>

            <p className="fw-bold">4000 جنيه</p>

        </div>

    </div>
  )
}

export default UserAllOrderContainer