import React from 'react'
import avatar from '../../Images/avatar (1).png'

const AdminCategory = () => {
  return (
        <div>
            
            <h4 className='mb-4'>اضف تصنيف جديد</h4>
    
            <p className='slider-title mb-0 text-end fs-6'>صورة التصنيف</p>
            <img src={avatar} width='120px' alt="" />
    
            <input type="text" placeholder='اسم التصنيف' className='d-block select my-3 px-2' />
    
            <div className='text-start'>
             <button className='btn btn-dark ms-auto'>حفظ التعديلات</button>
            </div>
    
        </div>
  )
}

export default AdminCategory