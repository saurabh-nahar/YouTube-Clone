import React from 'react'

function Comment({cdata}) {
    const {name, comment} = cdata;

  return (
    <div className='m-2 p-2 flex bg-gray-200 rounded-lg w-2/3'>
        <div>
        <i className="fa-solid fa-circle-user text-3xl pr-2"></i>
        </div>
        <div>
        <p className='font-semibold'>{name}</p>
        <p className='font-normal'>{comment}</p>
        </div>
    </div>
  )
}

export default Comment