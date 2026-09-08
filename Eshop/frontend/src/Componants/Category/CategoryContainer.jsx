import React, { useEffect } from 'react'
import SubTitle from '../Utility/SubTitle'
import CategoryCard from '../Category/CategoryCard'
import clothes from '../../Images/clothe.png'
import cat2 from '../../Images/cat2.png'
import labtop from '../../Images/labtop.png'
import sale from '../../Images/sale.png'
import pic from '../../Images/pic.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'


const CategoryContainer = () => {

      
   const dispatch = useDispatch()
  
    useEffect(()=>{
      dispatch(getAllCategory())
    },[])
  
    const data = useSelector((state)=>state.allCategory.category)

    console.log(data);
    const loading = useSelector((state)=>state.allCategory.loading)
  
    const colors = ["#ffd3e8" , "#f4dba5" , "#55cfdf" , "#ff6262" , "#0034ff" ,"#ffd3e8"]
  



  return (
    <div>
        <div className="container py-3">

            <SubTitle title=' كل التصنيفات'/>

            <div className="row d-flex justify-content-start mb-5">


              
              {
                loading === false ?  (
                data ? 
                (
                  data.map((item,index)=>( <CategoryCard  title={item.name} img={clothes} background={colors[Math.floor(Math.random()*5)+1]} key={index} />) )
                )
                 : 
                (<h1>لايوجد تصنيفات لعرضها</h1>)) : 
                (
                  <div className="m-auto spinner-border text-primary" role="status">
                    <span className=" visually-hidden">Loading...</span>
                  </div>
                )
              }

            </div>


        </div>
    </div>
  )
}

export default CategoryContainer