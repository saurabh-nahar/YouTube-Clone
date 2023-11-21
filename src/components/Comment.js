import React from 'react'

function Comment({cdata}) {
    const {name, comment} = cdata;

  return (
    <div className='m-2 p-2 bg-gray-200 rounded-lg w-2/3 items-center w-[1100px]'>
    <div className='flex items-center '>
        <div>
        <i className="fa-solid fa-circle-user text-4xl pr-2"></i>
        </div>
        <div>
        <p className='font-semibold'>{name}</p>
        <p className='font-normal'>{comment}</p>
        </div>
    </div>
    <div className='mx-11 mt-2'>
        <button className='rounded-l-xl bg-gray-300 hover:bg-gray-200 p-1'><i className="fa-regular fa-thumbs-up"></i></button>
        <button className='rounded-r-xl bg-gray-300  hover:bg-gray-200 p-1 border-l-2 border-black'><i className="fa-regular fa-thumbs-down"></i></button>
        <button className='mx-2'>Reply</button>
    </div>
    </div>
  )
}

export default Comment