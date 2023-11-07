import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenuToggle } from '../utils/sideMenuSlice';
import Comments from './Comments';

const WatchPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuToggle());
    },[])

    const [searchParams] = useSearchParams();
    const param = searchParams.get("v")
    console.log(param)
  return (
    <div className='flex-col'>
      <div className='m-4'>
        <iframe className='rounded-xl' width="1120" height="630" src={"https://www.youtube.com/embed/"+ param} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <div className='m-4'>
        <Comments/>
      </div>
    </div>
  )
}

export default WatchPage;