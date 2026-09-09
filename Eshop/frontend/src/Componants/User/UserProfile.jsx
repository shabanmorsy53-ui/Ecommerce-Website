import React, { useEffect, useState } from 'react'
import deleteIcon from '../../Images/delete.png'

const UserProfile = () => {

    const [user , setUser] = useState('');

    
    useEffect(()=>{
        if(localStorage.getItem('user') != null){
            setUser(JSON.parse(localStorage.getItem('user')));
        }
        
    },[])

  return (
    <div>

        <div className="slider-title bg-light p-2 text-end"> الصفحه الشخصيه </div>

        <div className="payment1 p-2 my-3">

            <div className="d-flex justify-content-between ">

                <div className="d-flex gap-2">
                    <p className="fw-bold">الاسم</p>
                    <span>{user.name}</span>
                </div>

                <div className="d-flex gap-2 align-items-center">
                    <img src={deleteIcon} width='20px' height='20px' alt="" />
                    <span>تعديل</span>
                </div>

            </div>

                <div className="d-flex gap-2">
                    <p className="fw-bold">رقم التليفون</p>
                    <span> 01022345178</span>
                </div>

                <div className="d-flex gap-2">
                    <p className="fw-bold"> الايميل</p>
                    <span>{user.email}</span>
                </div>

        </div>

        <div className='mt-4 text-start'  style={{width:'80%'}}>

            <h4 className='text-end'>تغير كلمة المرور</h4>

            <input type="text"  className="select my-3"  placeholder='تغيير كلمة المرور'/>
            <input type="text"  className="select"  placeholder=' كلمة المرور الجديده'/>

            <button className="btn btn-dark mt-3">حفظ كلمة السر</button>

        </div>


    </div>
  )
}

export default UserProfile