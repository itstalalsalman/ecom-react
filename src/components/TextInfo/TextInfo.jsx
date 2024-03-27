import React from 'react'
import './TextInfo.css'
import cart from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/icon-cart-white.svg'
import minus from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/icon-minus.svg'
import plus from 'C:/Users/musta/Desktop/ecommerce-product-page-main/ecom-react/src/images/icon-plus.svg'

import { motion } from 'framer-motion'; 


const TextInfo = () => {
  return (
    <div className='text-info-container'>
      <div className='inside-cont'>
        
        <motion.div // Add motion.div
          className='motion-container'
          initial={{ x: 350, opacity: 0 }} // Initial off-screen position 
          animate={{ x: 0, opacity: 1 }}    // Slide in
          transition={{ duration: 0.6 }}     // Adjust animation duration
        >
          <h5 className='sneak-header'>Sneaker Company</h5>
          
          <h1 className='offer-header'>Fall Limited Edition Sneakers</h1>
          
          <p className='sneak-info'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>

          <div className='price-cont'>  
            <h3 className='disc-price'>$125.00</h3>
            <p className='disc-perc'>50%</p>
          </div>

          <p className='og-price'>$250.00</p>

        </motion.div>
                
        <motion.div className='selection'
          initial={{ y: 20, opacity: 0 }} // Initial below position
          animate={{ y: 0, opacity: 1 }}   // Slide up
          transition={{ duration: 0.4, delay: 0.6 }}
        >
            <div className='quantity-btns'>
              <button className='minus'><img src={minus} alt="minus" /></button>
              <p className='quantity'>0</p>
              <button className='plus'><img src={plus} alt="plus" /></button>
            </div>
            
            <button className='btn-cart'><img src={cart} alt="cart-img" className='cart-img'/> Add to cart</button>  
        </motion.div>
      </div>
    </div>
  )
}

export default TextInfo