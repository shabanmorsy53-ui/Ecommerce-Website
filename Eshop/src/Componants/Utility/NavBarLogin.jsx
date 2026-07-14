
import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../Images/logo.png'
import login from '../../Images/login.png'
import cart from '../../Images/cart.png'

const NavBarLogin = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={logo} className='logo' alt="logp" />
                </Link>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" w-100 py-2 position-relative collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="d-flex me-auto w-100 mx-3 " role="search">
                        <input className=" form-control me-3 text-center" type="search" placeholder="بحث" aria-label="Search"/>
                    </form>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <div className='d-flex gap-3 justify-content-center align-items-center'>
                        <Link className='d-flex justify-content-center mt-2 align-items-center gap-1 text-white'>
                            <img src={login} className='login-img' alt="" />
                            <p>دخول</p>
                        </Link>
                        <Link className='d-flex justify-content-center mt-2 align-items-center gap-1 text-white'>
                            <img src={cart} className='login-img' alt="" />
                            <p>العربه</p>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBarLogin