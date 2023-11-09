import React from 'react'

const LiveChatMsg = ({data}) => {
  return (
    <div>
            <div className='m-2 p-2 flex bg-gray-200 rounded-lg items-center'>
        <div>
        <i className="fa-solid fa-circle-user text-4xl pr-2"></i>
        </div>
        <div>
        <p className='font-semibold'>{data.name}</p>
        <p className='font-normal'>{data.message}</p>
        </div>
    </div>
    </div>
  )
}

export default LiveChatMsg;