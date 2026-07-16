import React from 'react'
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useState } from "react";


const UserRate = () => {

    const [value, setValue] = useState(4.5);

  return (

    <div className=' my-3' >

        <div className='d-flex gap-2 align-items-center justify-content-end' dir='ltr'>

            <Rating
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
                setValue(newValue);
                }}
                />

            <span className='fw-bold'>{value}</span>
            <div className='fw-bold ms-4'>احمد هاشم  </div>
        </div>

        <div className='text-start'>

            <textarea placeholder='اكتب تعليقك...' className='form-control my-3 p-2' rows={3}  id=""></textarea>
            <button className='btn btn-dark'>سجل تعليقك</button>

        </div>



    </div>

  )
}

export default UserRate