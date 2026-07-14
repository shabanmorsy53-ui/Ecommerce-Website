import React from 'react'
import phone from '../../Images/phone.png'
import facebook from '../../Images/facebook.png'
import instagram from '../../Images/instagram.png'
import twitter from '../../Images/twitter.png'

const Footer = () => {
  return (
    <div className='footer-background footer   pt-3' style={{maxHeight:'50px'}}>

        <div className="container px-4">

            <div className="row d-flex justify-content-between align-items-center">

                <div className="col-sm-6 d-flex align-items-center gap-2">
                    <div className="footer-shroot">الشروط و الاحكام</div>
                    <div className="footer-shroot">سياسة الخصوصيه</div>
                    <div className="footer-shroot">اتصل بنا</div>
                </div>

                <div className="col-sm-6 d-flex align-items-center justify-content-end">

                    <div className="d-flex align-items-center pb-0">
                        <p className='footer-phone mb-0'>01055010412</p>
                        <img width='20px' height='20px' src={phone} alt="" />
                    </div>

                    <div style={{cursor:'pointer'}}>
                        <img width='20px' height='20px' src={facebook} alt="" />
                    </div>

                    <div style={{cursor:'pointer'}}>
                        <img width='20px' height='20px' src={instagram} alt="" />
                    </div>

                    <div style={{cursor:'pointer'}}>
                        <img width='20px' height='20px' src={twitter} alt="" />
                    </div>

                </div>


            </div>

        </div>

    </div>
  )
}

export default Footer