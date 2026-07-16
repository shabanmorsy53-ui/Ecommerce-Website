import React from 'react'

const PaymentMethod = () => {
  return (
    <div>

        <h2 className='slider-title text-end '>اختر طريقة الدفع:</h2>

        <div className='payment1 p-3 my-3'>

            <div className='mb-4'>
                <input type="radio" id='card' />
                <label htmlFor="card" className='mx-2'>الدفع عن طريقة البطاقه الائتمانيه</label>
            </div>
                
            <div>
                <input type="radio" id='arr' />
                <label htmlFor="arr" className='mx-2'>الدفع عند الاستلام</label>
            </div>

        </div>

        <div className='d-flex gap-2 w-100 justify-content-end'>
            <div className='border border-2 py-2 px-3 rounded-2'>3400 جنيه</div>
            <button className='btn btn-dark'>اتمام الشراء</button>
        </div>

    </div>
  )
}

export default PaymentMethod