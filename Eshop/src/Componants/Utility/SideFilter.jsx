import React from 'react'

const SideFilter = () => {
  return (
    <div>

        <div className="row">

            <div className="d-flex flex-column">
                
                <div className='sub-tile'>الفئه</div>

                <div className='d-flex gap-2 my-2 align-items-center'>
                    <input type="checkbox" />
                    <div>الكل</div>
                </div>
                <div className='d-flex gap-2 my-2 align-items-center'>
                    <input type="checkbox" />
                    <div>اجهزه منزليه</div>
                </div>
                <div className='d-flex gap-2 my-2 align-items-center'>
                    <input type="checkbox" />
                    <div>ملابس</div>
                </div>
                <div className='d-flex gap-2 my-2 align-items-center'>
                    <input type="checkbox" />
                    <div>كهربائيه</div>
                </div>
                <div className='d-flex gap-2 my-2 align-items-center'>
                    <input type="checkbox" />
                    <div>تخفيضات</div>
                </div>

                <div className='sub-tile my-2'>الماركه</div>

                <div className='d-flex gap-2 mb-2 align-items-center'>
                    <input type="checkbox" />
                    <div>الكل</div>
                </div>
                <div className='d-flex gap-2 my-2 align-items-center'>
                    <input type="checkbox" />
                    <div>ابل</div>
                </div>
                <div className='d-flex gap-2 my-2 align-items-center'>
                    <input type="checkbox" />
                    <div>سامسونج</div>
                </div>

                <div className='sub-tile my-2'>السعر</div>

                <div className='d-flex gap-2 my-2 align-items-center'>
                    <div>من</div>
                    <input style={{width:'60px'}} type="text" />
                </div>
                
                <div className='d-flex gap-2 my-2 align-items-center'>
                    <div>الي</div>
                    <input style={{width:'60px'}} type="text" />
                </div>
                




            </div>

        </div>
    </div>
   
  )
}

export default SideFilter