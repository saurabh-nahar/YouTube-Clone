import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenuToggle } from '../utils/sideMenuSlice';
import Comments from './Comments';
import Chats from './Chats';
import { addChat } from '../utils/chatsSlice';


const WatchPage = () => {
  const [liveMessage, setLiveMessage] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenuToggle());
    },[dispatch])

    const [searchParams] = useSearchParams();
    const param = searchParams.get("v")

    function appendMessage(){
      dispatch(addChat({name: "Saurabh", message: liveMessage}))
      setLiveMessage("")
    }

    function handleDefault(event){
      event.preventDefault();
    }

return (
  <div>
  <div className='flex'>
    <div className='m-4 w-8/12'>
      <iframe className='rounded-xl' width="1100" height="630" src={"https://www.youtube.com/embed/"+ param} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className='w-4/12 m-4 height="630" border-2 rounded-xl '>
      <p className='border-b-2 p-2 mx-2 font-bold h-[3rem] '>Live Chat</p>
      <div className='overflow-y-scroll h-[33.375rem] flex flex-col-reverse'>
      <Chats/>
      </div>
      <div className='h-[3rem]'>
        <form onSubmit={handleDefault}>
        <input className='border-2 w-max p-2 mx-2' value={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)} ></input>
        <button><i className="fa-regular fa-paper-plane text-xl" onClick={appendMessage}></i></button>
        </form>
      </div>
    </div>
  </div>
      <div className='m-4'>
      <Comments/>
      </div>
    </div>
)
}


export default WatchPage;