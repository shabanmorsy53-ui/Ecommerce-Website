import React from 'react'

const SubTitle = ({title , btnTitle}) => {
  return (
    <div className='d-flex justify-content-between align-items-center'>

        <div className='sub-tile '>
            {title}
        </div>

        {
            btnTitle ? (
                <div className="shopping-now">{btnTitle}</div>
            ) : null
        }

    </div>
  )
}

export default SubTitle