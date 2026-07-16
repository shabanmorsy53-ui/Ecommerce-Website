import React from 'react'
import rate from '../../Images/rate.png'
import PersonRate from './PersonRate'
import UserRate from './UserRate'
import PaginationComponent from '../Utility/PaginationComponant'

const RateContainer = () => {
  return (
    <div className='rate-dev p-3'>
        
        <div className="d-flex align-items-center gap-3 mb-3">
            <div className="slider-title">التقيمات</div>
            <img width='20px' height='20px' src={rate} alt="" />
            <p className='card-rate'>4.5</p>
            <p className='slider-title mb-0'>(160 تقييم)</p>
        </div>

        <UserRate/>

        <PersonRate/>
        <PersonRate/>
        <PersonRate/>
        <PersonRate/>

        <PaginationComponent/>

    </div>
  )
}

export default RateContainer