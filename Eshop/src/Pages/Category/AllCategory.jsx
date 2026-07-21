import React, { useEffect } from 'react'
import CategoryContainer from '../../Componants/Category/CategoryContainer'
import PaginationComponant from '../../Componants/Utility/PaginationComponant'
import baseUrl from '../../Api/baseUrl'
import axios from 'axios'

const AllCategory = () => {

  const get = async ()=>{
    const res = await baseUrl.get('/categories?fields=name')
    console.log(res.data.data);
  }

  useEffect(()=>{
    get()
  },[])


  return (
    <div>
        <CategoryContainer/>
        <PaginationComponant/>
    </div>
  )
}

export default AllCategory