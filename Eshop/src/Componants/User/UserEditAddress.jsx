import React from 'react'

const UserEditAddress = () => {
  return (
    <div>

        <div className="slider-title bg-light p-2 text-end"> تعديل العنوان </div>

        <input type="text" className="select mt-3 px-2"  placeholder= 'المنزل'/>

        <textarea name="" className='select mt-3 px-2' placeholder=' القاهره 6 اكتوبر'  id=""></textarea>

        <input type="number" className="select mt-3 px-2"  placeholder= '01022365178' />

        <div className="text-start">
            <button className="btn btn-dark mt-3">حفظ تعديل عنوان</button>
        </div>


    </div>
  )
}

export default UserEditAddress