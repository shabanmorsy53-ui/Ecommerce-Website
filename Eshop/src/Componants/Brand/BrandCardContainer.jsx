import React from 'react'
import BrandCard from './BrandCard'
import brandImage from '../../Images/brand1.png'
import brandImage2 from '../../Images/brand2.png'
import brandImage3 from '../../Images/brand3.png'
import SubTitle from '../Utility/SubTitle'

const BrandCardContainer = () => {
  return (
    <div className='container'>
        <SubTitle title='اشهر الماركات' btnTitle='المزيد' pathTitle='/allbrand'/>
        <div className="row mx-3">
            <BrandCard brandImage={brandImage3}/>
            <BrandCard brandImage={brandImage2}/>
            <BrandCard brandImage={brandImage}/>
            <BrandCard brandImage={brandImage3}/>
            <BrandCard brandImage={brandImage}/>
            <BrandCard brandImage={brandImage2}/>
        </div>
    </div>
  )
}

export default BrandCardContainer