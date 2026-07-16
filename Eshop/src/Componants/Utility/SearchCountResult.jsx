import React from 'react'
import sort from '../../Images/sort.png'
import { Link } from 'react-router-dom'

const SearchCountResult = ({title}) => {
  return (
    <div className='d-flex justify-content-between py-3 align-items-center'>

        <div className='sub-tile'>{title}</div>

        <div className="dropdown">
            <button className="btn btn-primary text-dark d-flex gap-3 justify-content-center align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img width='20px' height='20px' src={sort} alt="" />
                ترتيب حسب
            </button>
            <ul className="dropdown-menu text-end">
                <li><Link className="dropdown-item mb-2  border-bottom" to="#">الاكثر مبيعا</Link></li>
                <li><Link className="dropdown-item mb-2 border-bottom" to="#"> الاعلي تقيما</Link></li>
                <li><Link className="dropdown-item mb-2 border-bottom" to="#">  السعر من الاقل للاعلي</Link></li>
                <li><Link className="dropdown-item mb-2" to="#">  السعر من الاعلي للافل</Link></li>
            </ul>
        </div>

    </div>
  )
}

export default SearchCountResult