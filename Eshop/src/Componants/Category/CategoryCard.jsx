import React from 'react'

const CategoryCard = ({background , img , title}) => {
  return (
    <div className='col-6 col-md-4 col-lg-2'>

        <div className='allCard my-4 m-auto'>

            <div className='categoty-card' style={{backgroundColor: `${background}`}}></div>
            <img src={img} className='categoty-card-img' alt="" />
            <p className='categoty-card-text'>{title}</p>

        </div>

    </div>
  )
}

export default CategoryCard