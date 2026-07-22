import React, { useEffect } from 'react'
import CategoryContainer from '../../Componants/Category/CategoryContainer'
import PaginationComponant from '../../Componants/Utility/PaginationComponant'
import baseUrl from '../../Api/baseUrl'
import axios from 'axios'

const AllCategory = () => {



  return (
    <div>
        <CategoryContainer/>
        <PaginationComponant/>
    </div>
  )
}

export default AllCategory