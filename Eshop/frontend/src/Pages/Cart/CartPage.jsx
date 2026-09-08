import React from 'react'
import CartItem from '../../Componants/Cart/CartItem'
import CheckOut from '../../Componants/Cart/CheckOut'

const CartPage = () => {
  return (
    <div className='container my-3 ' style={{minHeight:'450px'}}>

        <div className='fw-bold bg-light p-2'>عربة التسوق</div>

        <div className="row  my-3 ">

            <div className="col-sm-12 me-auto p-2 col-md-7">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>

            <div className="col-sm-12 me-auto col-md-4  p-2 mx-4">
                <CheckOut/>
            </div>

        </div>

    </div>
  )
}

export default CartPage