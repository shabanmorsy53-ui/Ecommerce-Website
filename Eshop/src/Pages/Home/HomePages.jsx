import React from 'react'
import Slider from '../../Componants/Home/Slider'
import HomeCategory from '../../Componants/Home/HomeCategory'
import CardContainer from '../../Componants/Products/CardContainer'
import DiscountSection from '../../Componants/Home/DiscountSection'
import BrandCardContainer from '../../Componants/Brand/BrandCardContainer'


const HomePages = () => {
  return (
    <div>
        
        <Slider/>
        <HomeCategory/>
        <CardContainer title='الاكثر مبيعا' btnTitle="المزيد"/>
        <DiscountSection/>
        <CardContainer title="احدث الازياء" btnTitle="المزيد"/>
        <BrandCardContainer/>
      
    </div>
  )
}

export default HomePages