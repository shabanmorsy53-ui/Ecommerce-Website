import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { ToastContainer, toast } from 'react-toastify';
import { createSubCategory } from '../../redux/actions/subCategoryAction';


const AdminSubCategory = () => {
      
   const dispatch = useDispatch()

   const [id , setID] = useState('0');
   const [name , setName] = useState('');
   const [loading , setLoading] = useState(true);
  
    useEffect(()=>{
      dispatch(getAllCategory())
    },[])
  
    const data = useSelector((state)=>state.allCategory.category)
  

    const subCategory = useSelector((state)=>state.subCategory.subCategory)
    
    const handleChange = (e) => {
      e.persist()
      setID(e.target.value)
    }


    const submitSubCategory = async (e) => {
      e.preventDefault();

      if( id === '0'){

        notify('من فضلك اختر تصنيف رئيسي')
        
        return
      }

      if( name === ''){

        notify('من فضلك ادخل اسم التصنيف')
        
        return
      }

      setLoading(true)

      await dispatch(createSubCategory({
        name : name , 
        category :  id,
      }))

      setLoading(false)
    }

    useEffect(()=>{

      if(loading === false){
        setName('')
        setID('0')

        if(subCategory.status === 201){
          notify('تمت الاضافه بنجاح')
        }else{
          notify('هناك مشكله في عملية الاضافه')
        }
      }

      setLoading(true)

    },[loading])

    const notify = (msg) => toast(msg);
    



  return (
    <div className='payment1 p-3'>

        <div className='slider-title text-end mb-4'>اضافة تصنيف فرعي جديد</div>

        <input onChange={(e)=> setName(e.target.value)} type="text" className='select px-2' placeholder='اسم التصنيف الفرعي' />

        <select name="category" className='select my-3' id="cat" onChange={handleChange}>
            <option value="0">التصنيف الرئيسي</option>

            {
              data ? (data.map((item)=>( <option value={item._id} key={item._id}>{item.name}</option>))) : null
            }
          
        </select>

        <div className="text-start">
            <button className='btn btn-dark' onClick={submitSubCategory}>حفظ التعديلات</button>
        </div>

        <ToastContainer/>
    </div>
  )
}

export default AdminSubCategory