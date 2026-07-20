import React from 'react'
import UserSideBar from '../../Componants/User/UserSideBar'
import UserProfile from '../../Componants/User/UserProfile'

const UserProfilePage = () => {
  return (
    <div className='container my-3' style={{minHeight:'400px'}}>

        <div className="row">

            <div className="col-sm-2 col-md-3 col-lg-4">

                <UserSideBar/>
                
            </div>

            <div className="col-sm-10 col-md-9 col-lg-8">

                <UserProfile/>                          

            </div>

        </div>

    </div>
  )
}

export default UserProfilePage