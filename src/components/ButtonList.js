import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["Music", "Yoga", "Gaming", "Technology", "Fitness", "Smartphones", "Cryptocurency", "Standup-Comedy", "Tesla", "Meditation-Music", "Podcasts", "Comedy", "News" ]
  return (
    <div className='flex flex-wrap my-2 mx-2 overflow-x-scroll'>
      {list.map((btn) => <Button name = {btn}/>)}
    </div>
  )
}

export default ButtonList