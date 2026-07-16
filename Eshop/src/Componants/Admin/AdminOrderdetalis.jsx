import React from 'react'
import AdminOrderDetalisCard from './AdminOrderDetalisCard'

const AdminOrderdetalis = () => {
  return (
    <div>
        <div className='admin-content-text mb-3 bg-light p-2'> تفاصيل الطلب :</div>
        <div>
            <AdminOrderDetalisCard/>
            <AdminOrderDetalisCard/>
            <AdminOrderDetalisCard/>
        </div>

        <div className='payment1 p-3'>

            <h5 className='fw-bold mb-3'>تفاصيل العميل</h5>

            <div className='d-flex gap-2 '>
                <p className='fw-bold'>الاسم</p>
                <span>شعبان مرسي</span>
            </div>

            <div className='d-flex gap-2 '>
                <p className='fw-bold'>رقم الهاتف</p>
                <span> 01022365178</span>
            </div>

            <div className='d-flex gap-2'>
                <p className='fw-bold'>الايميل</p>
                <span>shabanmorsy53@gmail.com</span>
            </div>

            <div className='w-100 border border-2 rounded-2 p-2  text-center'>المجموع 400</div>

            <div className="d-flex justify-content-center align-items-center mt-3 gap-2">
                <select name="" className='select input-form-area w-50  text-center' id="">
                    <option value="val">حالة الطلب</option>
                    <option value="val1">قيد التنفيذ</option>
                    <option value="val2">تم الانتهاء</option>
                    <option value="val3">الغاء</option>
                </select>

                <button className='btn btn-dark'>حفظ</button>

            </div>


        </div>
    </div>
  )
}

export default AdminOrderdetalis