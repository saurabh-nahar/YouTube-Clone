import React from 'react'

const SearchResVideoCard = ({data}) => {
    console.log(data)
    const {title, channelTitle, thumbnails, description} = data.snippet;

    if(window.innerWidth > 640){
return (
  <div className='flex justify-center items-center'>
    <div className=' my-4 p-4 flex item-center justify-center w-8/12'>
      <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
      <div className='ml-4 flex-1 min-w-0'>
        <p className='font-semibold truncate'>{title}</p>
        <p className='font-medium truncate text-gray-600'>{channelTitle}</p>
        <p className='font-medium truncate text-gray-600'>{description}</p>
      </div>
    </div>
    </div>
  )
}else{ 
  return (
    <div className='flex justify-center items-center mt-2 p-2 mx-2 w-full'>
      <div className='w-80'>
        <ul className='w-full'>
          <img className='rounded-lg object-cover' src={thumbnails.medium.url} alt='thumbnail'></img>
          <li className='font-semibold truncate w-full'>{title}</li>
          <li className='font-medium truncate text-gray-600 w-full'>{channelTitle}</li>
          <li className='font-medium truncate text-gray-600'>{description}</li>
        </ul>
      </div>
    </div>
  );
};
};
export default SearchResVideoCard