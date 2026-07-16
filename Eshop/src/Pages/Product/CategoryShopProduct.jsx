import React from 'react'
import ProductNav from '../../Componants/Utility/ProductNav'
import SearchCountResult from '../../Componants/Utility/SearchCountResult'
import SideFilter from '../../Componants/Utility/SideFilter'
import CardContainer from '../../Componants/Products/CardContainer'
import PaginationComponent from '../../Componants/Utility/PaginationComponant'

const CategoryShopProduct = () => {
  return (
    <div style={{minHeight:'450px'}}>
        <ProductNav/>

        <div className="container">
            <SearchCountResult title='يوجد اكثر من 600 منتج ...'/>

            <div className="row">

                <div className="col-2">
                    <SideFilter/>
                </div>

                <div className="col-10">
                    <CardContainer/>
                    <PaginationComponent/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CategoryShopProduct