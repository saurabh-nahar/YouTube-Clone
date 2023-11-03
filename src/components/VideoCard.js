import React from 'react'
import { useSelector } from 'react-redux';


const VideoCard = ({data}) => {
    console.log(data);
    const {title, channelTitle, thumbnails} = data.snippet;
    const {viewCount} = data.statistics

    const toggle = useSelector((store) => store.sideMenu.menuOpen)

  return toggle? (
    <div className='m-4 p-2 w-80'>
        <ul>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" ></img>
            <li className='font-semibold truncate'>{title}</li>
            <li className='font-medium truncate text-gray-600'>{channelTitle}</li>
            <li className='font-medium truncate text-gray-600'>{Number(viewCount).toLocaleString()} views</li>

        </ul>
    </div>
  ) :
  (
    <div className='m-2 p-2 w-96'>
        <ul>
            <img className='rounded-lg w-auto object' src={thumbnails.medium.url} alt="thumbnail" ></img>
            <li className='font-semibold truncate w-80'>{title}</li>
            <li className='font-medium truncate text-gray-600'>{channelTitle}</li>
            <li className='font-medium truncate text-gray-600'>{Number(viewCount).toLocaleString()} views</li>
        </ul>
    </div>
  )
}

export default VideoCard