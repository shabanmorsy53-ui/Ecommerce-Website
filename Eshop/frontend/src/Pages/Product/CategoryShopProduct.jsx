import React, { useEffect } from 'react'
import ProductNav from '../../Componants/Utility/ProductNav'
import SearchCountResult from '../../Componants/Utility/SearchCountResult'
import SideFilter from '../../Componants/Utility/SideFilter'
import CardContainer from '../../Componants/Products/CardContainer'
import PaginationComponent from '../../Componants/Utility/PaginationComponant'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions/productAtion'

const CategoryShopProduct = () => {

 const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getAllProduct())
  },[])


  const allProdcut = useSelector((state) => state.allProduct.allProduct);
  

  console.log(allProdcut.data);



  return (
    <div style={{minHeight:'450px'}}>
        <ProductNav/>

        <div className="container">
            <SearchCountResult title={`هناك اكتر من   ${allProdcut.data.length}منتج `}/>

            <div className="row">

                <div className="col-2">
                    <SideFilter/>
                </div>

                <div className="col-10">
                    <CardContainer myProduct={allProdcut.data}/>
                    <PaginationComponent/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CategoryShopProduct