import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'


const Body = () => {

  return (
    <div className='flex'>
<Sidebar/>
<MainContainer className='flex-grow' />
    </div>
  )
}

export default Body