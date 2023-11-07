import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { videoApi } from '../constants/videoApi';
import VideoCard from './VideoCard'
import ButtonList from './ButtonList'

const VideoContainer = () => {
  const [videoData , setVideoData] = useState([]);

  useEffect(() => {
    videosApiCall();
  },[])

  const videosApiCall = async() => {
    const data = await fetch(videoApi)
    const json = await data.json();
    console.log(json.items[0])
    setVideoData(json.items)
  }
  return (
    <div>
    <ButtonList/>
    <div className = "flex flex-wrap w-100%">
      {videoData.map((singleCard)=> <Link to = {"/watch?v=" + singleCard.id}><VideoCard key={singleCard.key} data = {singleCard}/></Link>)}
    </div>
    </div>
  )
}

export default VideoContainer