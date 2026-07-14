import React from 'react'
import NavBarLogin from '../../Componants/Utility/NavBarLogin'
import Slider from '../../Componants/Home/Slider'
import HomeCategory from '../../Componants/Home/HomeCategory'
import CardContainer from '../../Componants/Products/CardContainer'
import DiscountSection from '../../Componants/Home/DiscountSection'
import BrandCardContainer from '../../Componants/Brand/BrandCardContainer'
import Footer from '../../Componants/Utility/Footer'

const HomePages = () => {
  return (
    <div>
        <NavBarLogin/>
        <Slider/>
        <HomeCategory/>
        <CardContainer title='الاكثر مبيعا' btnTitle="المزيد"/>
        <DiscountSection/>
        <CardContainer title="احدث الازياء" btnTitle="المزيد"/>
        <BrandCardContainer/>
        <Footer/>
    </div>
  )
}

export default HomePages