import React from 'react'
import ShoeImages from '../ShoeImages/ShoeImages'
import TextInfo from '../TextInfo/TextInfo'
import './ShoeContainer.css'

const ShoeContainer = () => {
  return (
    <div className='center-info-container'>
      <ShoeImages />
      <TextInfo />
    </div>
  )
}

export default ShoeContainer