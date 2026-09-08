import React from 'react'

const UserNewAddress = () => {
  return (
    <div>

        <div className="slider-title bg-light p-2 text-end"> اضافة عنوان جديد </div>

        <input type="text" className="select mt-3 px-2"  placeholder='تسمية العنوان مثلا (المنزل - العمل)'/>

        <textarea name="" className='select mt-3 px-2' placeholder='العنوان بالتفصيل'  id=""></textarea>

        <input type="number" className="select mt-3 px-2"  placeholder= 'رقم الهاتف' />

        <div className="text-start">
            <button className="btn btn-dark mt-3">اضافة عنوان</button>
        </div>



    </div>
  )
}

export default UserNewAddress