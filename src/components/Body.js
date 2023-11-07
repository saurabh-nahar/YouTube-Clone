import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'



const Body = () => {

  return (
    <div className='flex'>
      <Sidebar />
      <div className="flex-1 flex-grow mx-2">
        <Outlet />
      </div>
    </div>
  );  
}

export default Body