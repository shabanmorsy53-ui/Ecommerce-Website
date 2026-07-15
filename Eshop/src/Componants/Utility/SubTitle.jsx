import React from 'react'
import { Link } from 'react-router-dom'

const SubTitle = ({title , btnTitle ,pathTitle}) => {
  return (
    <div className='d-flex justify-content-between align-items-center'>

        <div className='sub-tile '>
            {title}
        </div>

        {
            btnTitle ? (
                <Link to={`${pathTitle}`} style={{textDecoration:'none'}}>
                    <div className="shopping-now">{btnTitle}</div>
                </Link>
            ) : null
        }

    </div>
  )
}

export default SubTitle