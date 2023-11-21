import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["Music", "Yoga", "Gaming", "Technology", "Fitness", "Smartphones", "Cryptocurency", "Tesla", "Podcasts", "Comedy", "News" ]
  return (
    <div className=' overflow-x-auto'>
    <div className=' flex my-2 p-2 '>
      {list.map((btn) => <Button name = {btn}/>)}
    </div>
    </div>
  )
}

export default ButtonList


