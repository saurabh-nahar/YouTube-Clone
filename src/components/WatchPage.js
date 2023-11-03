import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenuToggle } from '../utils/sideMenuSlice';

const WatchPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuToggle());
    },[])

    const [searchParams] = useSearchParams();
    const param = searchParams.get("v")
    console.log(param)
  return (
    <div>
        <iframe width="1120" height="630" src={"https://www.youtube.com/embed/"+ param} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage;