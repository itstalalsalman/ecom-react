import React from 'react'
import logo from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/logo.svg'
import cart from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/icon-cart.svg'
import avatar from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/image-avatar.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <img src={logo} alt="" className='logo'/>
        <ul className='nav-items-container'>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='cart-container'>
            <img src={cart} alt="" />
            <img src={avatar} alt="" className='img-avatar'/>
        </div>
        
    </div>
  )
}

export default Navbar