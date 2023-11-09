import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuToggle } from '../utils/sideMenuSlice';
import {searchApi} from '../constants/searchApi'
import { createCache } from '../utils/searchSlice';


const Header = () => {
  const [searchText, setSearchText] = useState("")
  const [searchRes, setSearchRes] = useState([])
  
  const dispatch = useDispatch()

  const cache = useSelector((store) => store.search)

  const clickHandler = () => {
    dispatch(menuToggle())
  }

  useEffect(() => {

    const timer = setTimeout(() => {
    if(cache[searchText]){
      setSearchRes(cache[searchText])
    }else{
      searchFn()
    }
  }, 200)

    return () => clearTimeout(timer);
  }, [searchText])

  const searchFn = async() => {
    const data = await fetch(searchApi + searchText)
    const json = await data.json();


    setSearchRes(json[1])
    dispatch(createCache({[searchText]: json[1]}))
  }

  return (
    <div>
      <div className='flex justify-between items-center h-16 pl-2 pr-2 shadow-lg'>
      <div className='flex items-center'>
        <i className="fa-solid fa-bars text-2xl cursor-pointer" onClick={() => clickHandler()}></i>
        <a href='/'><img className='w-44 cursor-pointer' src='https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg' alt='logo'></img></a>
      </div>
      <div className='flex-grow flex items-center'>
        <input className='rounded-l-full border-gray-200 border-2 w-2/4 ml-auto py-1 px-2' value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
        <button className='rounded-r-full border-gray-200 border-l-0 border-2 mr-auto bg-b2071d py-1 px-2'><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div>
        <i className="fa-solid fa-circle-user text-4xl"></i>
      </div>
    </div>
    <div className='text-center'>
      <ul>
      {searchRes.map((res, index) => <li key={index}>{res}</li>)}
      </ul>
    </div>
    </div>
  );
};

export default Header;

