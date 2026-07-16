import React from 'react'
import { Link } from 'react-router-dom'
import rate from '../../Images/rate.png'
import heart from '../../Images/fav-Off.png'
import img from '../../Images/labtop.png'


const AdminAllProductCard = () => {
  return (
    <div className='col-sm-12 col-md-3 col-lg-4 mb-3'>


        <div className="card " style={{width: "100%" , boxShadow:'0 2px 2px 0 rgba(151,151,151,0.5)', border:'none' , backgroundColor:'#ffffff', borderRadius:'8px'}}>
            <div className="d-flex justify-content-between p-2">
                <span className='item-delete-edit'>تعديل</span>
                <span className='item-delete-edit'>ازاله</span>
            </div>
            <Link to='/product/:id'>
               <img src={img} className="card-img-top" alt="card"/>
            </Link>
           <div className="card-body">
                <div className='fav-off'>
                    <img src={heart} />
                </div>

                <div>
                    <p className="card-title">سود ساعة يد ذكيه بيب اس اسود</p>
                </div>
                
                <div className='d-flex justify-content-between'>

                    <div className='d-flex align-items-center justify-content-center gap-2'>
                        <img className='rate' src={rate} alt="" />
                        <p className='card-rate'>4.5</p>
                    </div>

                    <div className='d-flex align-items-center justify-content-center gap-2'>
                        <h5 className='card-price mb-0'>880</h5>
                        <p className='card-currency mb-0'>جنيه</p>
                    </div>  

                </div>
            </div>

        </div>

    </div>
  )
}

export default AdminAllProductCard