import React, { useEffect } from 'react'
import CategoryContainer from '../../Componants/Category/CategoryContainer'
import PaginationComponant from '../../Componants/Utility/PaginationComponant'
import baseUrl from '../../Api/baseUrl'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'

const AllCategory = () => {

  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])

  const data = useSelector((state)=>state.allCategory.category)
  const loading = useSelector((state)=>state.allCategory.loading)


  console.log(data);
  console.log(loading);

  return (
    <div>
        <CategoryContainer/>
        <PaginationComponant/>
    </div>
  )
}

export default AllCategory