import React from 'react'
import SideBar from '../../Componants/Admin/SideBar'
import AdminEditCoupon from '../../Componants/Admin/AdminEditCoupon'


const AdminEditCouponPage = () => {
  return (
    <div className='container my-3' style={{minHeight:'430px'}}>

        <div className="row">

            <div className="col-sm-2 col-md-3 col-lg-3">

                <SideBar/>
                
            </div>

            <div className="col-sm-10 col-md-9 col-lg-9">

                <AdminEditCoupon/>

            </div>

        </div>

    </div>
  )
}

export default AdminEditCouponPage