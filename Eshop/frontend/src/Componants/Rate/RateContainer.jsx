import React, { useEffect } from 'react'
import rate from '../../Images/rate.png'
import PersonRate from './PersonRate'
import UserRate from './UserRate'
import PaginationComponent from '../Utility/PaginationComponant'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getReview } from '../../redux/actions/reviewsAction'
import { getOneProduct } from '../../redux/actions/productAtion'

const RateContainer = ({item}) => {

  const dispatch = useDispatch();
  const {id} = useParams()

  useEffect(()=>{
    const get =async ()=> {
      await dispatch(getReview(id))
    
    }

    get()
  },[id])

  const reviews = useSelector((state) => state.allReview.personReview);

  console.log(reviews.data);


  return (
    <div className='rate-dev p-3'>
        
        <div className="d-flex align-items-center gap-3 mb-3">
            <div className="slider-title">التقيمات</div>
            <img width='20px' height='20px' src={rate} alt="" />
            <p className='card-rate'>{item.ratingAvg}</p>
            <p className='slider-title mb-0'>{`${item?.numberOfRatings} تقييم` || 0}</p>
        </div>

        <UserRate item={item}/>

        {
          reviews.data ? (
            reviews.data?.map((review,index)=>(

              <PersonRate review={review} key={index}/>
            ))
          ) : (<h4>لايوجد تعليقات</h4>)
        }


        <PaginationComponent/>

    </div>
  )
}

export default RateContainer