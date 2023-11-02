import React from 'react';
import { useDispatch } from 'react-redux';
import { menuToggle } from '../utils/sideMenuSlice';


const Header = () => {
  
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(menuToggle())
  }

  return (
    <div className='flex justify-between items-center h-16 pl-2 pr-2 shadow-lg'>
      <div className='flex items-center'>
        <i className="fa-solid fa-bars text-2xl cursor-pointer" onClick={() => clickHandler()}></i>
        <a href='/'><img className='w-44 cursor-pointer' src='https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg' alt='logo'></img></a>
      </div>
      <div className='flex-grow flex items-center'>
        <input className='rounded-l-full border-gray-200 border-2 w-2/4 ml-auto py-1 px-2'></input>
        <button className='rounded-r-full border-gray-200 border-l-0 border-2 mr-auto bg-b2071d py-1 px-2'><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div>
        <i className="fa-solid fa-circle-user text-4xl"></i>
      </div>
    </div>
  );
};

export default Header;
