import React from 'react'
import SubTitle from '../Utility/SubTitle'
import CategoryCard from '../Category/CategoryCard'
import clothes from '../../Images/clothe.png'
import cat2 from '../../Images/cat2.png'
import labtop from '../../Images/labtop.png'
import sale from '../../Images/sale.png'
import pic from '../../Images/pic.png'

const HomeCategory = () => {
  return (
    <div>
        <div className="container py-3">

            <SubTitle title='التصنيفات' btnTitle='المزيد'/>

            <div className="row d-flex justify-content-between">
            <CategoryCard  title='اجهزه منزليه' img={clothes} background='#f4dba4' />
            <CategoryCard  title='اجهزه منزليه' img={cat2} background='#f4dba4' />
            <CategoryCard  title='اجهزه منزليه' img={pic} background='#f4dba4' />
            <CategoryCard  title='اجهزه منزليه' img={labtop} background='#f4dba4' />
            <CategoryCard  title='اجهزه منزليه' img={sale} background='#f4dba4' />
            <CategoryCard  title='اجهزه منزليه' img={pic} background='#f4dba4' />

            </div>


        </div>
    </div>
  )
}

export default HomeCategory