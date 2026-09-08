import React from 'react'
import UserSideBar from '../../Componants/User/UserSideBar'
import UserNewAddress from '../../Componants/User/UserNewAddress'

const UserNewAddressPage = () => {
  return (
     <div className='container my-3' style={{minHeight:'400px'}}>

        <div className="row">

            <div className="col-sm-2 col-md-3 col-lg-4">

                <UserSideBar/>
                
            </div>

            <div className="col-sm-10 col-md-9 col-lg-8">

               <UserNewAddress/>             

            </div>

        </div>

    </div>
  )
}

export default UserNewAddressPage