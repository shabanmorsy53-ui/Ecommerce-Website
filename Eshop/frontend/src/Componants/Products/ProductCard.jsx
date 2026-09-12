import React from 'react'
import heart from '../../Images/fav-Off.png'
import rate from '../../Images/rate.png'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {

    console.log(item);
  return (
    <div className='col-6 col-md-4 col-lg-3 my-2'>

        <div className="card " style={{width: "100%" , boxShadow:'0 2px 2px 0 rgba(151,151,151,0.5)', border:'none' , backgroundColor:'#ffffff', borderRadius:'8px'}}>
            <Link to={`/product/${item.id}`}>
               <img  src={`http://localhost:8000/products/${item.imageCover}`} className="card-img-top" alt="card"/>
            </Link>
           <div className="card-body">
                <div className='fav-off'>
                    <img src={heart} />
                </div>

                <div>
                    <p className="card-title">{item.title}</p>
                </div>
                
                <div className='d-flex justify-content-between'>

                    <div className='d-flex align-items-center justify-content-center gap-2'>
                        <img className='rate' src={rate} alt="" />
                        <p className='card-rate'>4.5</p>
                    </div>

                    <div className='d-flex align-items-center justify-content-center gap-2'>
                        <h5 className='card-price mb-0'>{item.price}</h5>
                        <p className='card-currency mb-0'>جنيه</p>
                    </div>  

                </div>
            </div>

        </div>

    </div>
  )
}

export default ProductCard