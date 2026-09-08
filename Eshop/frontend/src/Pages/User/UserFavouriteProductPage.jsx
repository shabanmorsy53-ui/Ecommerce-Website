import React from 'react'
import UserSideBar from '../../Componants/User/UserSideBar'
import UserFavouriteProduct from '../../Componants/User/UserFavouriteProduct'

const UserFavouriteProductPage = () => {
  return (
     <div className='container my-3' style={{minHeight:'400px'}}>

        <div className="row">

            <div className="col-sm-2 col-md-3 col-lg-4">

                <UserSideBar/>
                
            </div>

            <div className="col-sm-10 col-md-9 col-lg-8">

                <UserFavouriteProduct/>               

            </div>

        </div>

    </div>
  )
}

export default UserFavouriteProductPage