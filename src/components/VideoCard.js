import React from 'react';

const VideoCard = ({ data }) => {
  const { title, channelTitle, thumbnails } = data.snippet;
  const { viewCount } = data.statistics;

  return (
    <div className={`flex flex-wrap items-center mt-2 p-2 mx-2 w-80`}>
      <ul className='w-full'>
        <img className='rounded-lg object-cover' src={thumbnails.medium.url} alt='thumbnail'></img>
        <li className='font-semibold truncate w-full'>{title}</li>
        <li className='font-medium truncate text-gray-600 w-full'>{channelTitle}</li>
        <li className='font-medium truncate text-gray-600'>{Number(viewCount).toLocaleString()} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
