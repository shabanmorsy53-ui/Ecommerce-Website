import React from 'react'

const AdminSubCategory = () => {
  return (
    <div className='payment1 p-3'>

        <div className='slider-title text-end mb-4'>اضافة تصنيف فرعي جديد</div>

        <input type="text" className='select px-2' placeholder='اسم التصنيف الفرعي' />

        <select name="" className='select my-3' id="">
            <option value="">التصنيف الاول</option>
            <option value="">التصنيف الثاني</option>
            <option value="">التصنيف الثالث</option>
            <option value="">التصنيف الرابع</option>
        </select>

        <div className="text-start">
            <button className='btn btn-dark'>حفظ التعديلات</button>
        </div>

    </div>
  )
}

export default AdminSubCategory