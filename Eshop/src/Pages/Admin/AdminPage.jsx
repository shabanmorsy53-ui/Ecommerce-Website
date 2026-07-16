import React from 'react'
import SideBar from '../../Componants/Admin/SideBar'
import AdminAllProduct from '../../Componants/Admin/AdminAllProduct'
import PaginationComponent from '../../Componants/Utility/PaginationComponant'

const AdminPage = () => {
  return (
    <div className='container my-3' style={{minHeight:'430px'}}>

        <div className="row">

            <div className="col-sm-2 col-md-3 col-lg-3">

                <SideBar/>
                
            </div>

            <div className="col-sm-10 col-md-9 col-lg-9">

                <AdminAllProduct/>
                <PaginationComponent/>

            </div>

        </div>

    </div>
  )
}

export default AdminPage