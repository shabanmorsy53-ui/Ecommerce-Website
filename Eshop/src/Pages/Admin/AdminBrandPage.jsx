import React from 'react'
import AdminAllBrand from '../../Componants/Admin/AdminAllBrand'
import SideBar from '../../Componants/Admin/SideBar'

const AdminBrandPage = () => {
  return (

    <div className='container my-3' style={{minHeight:'430px'}}>

        <div className="row">

            <div className="col-sm-2 col-md-3 col-lg-3">

                <SideBar/>
                
            </div>

            <div className="col-sm-10 col-md-9 col-lg-9">

                <AdminAllBrand/>
    

            </div>

        </div>

    </div>
  )
}

export default AdminBrandPage