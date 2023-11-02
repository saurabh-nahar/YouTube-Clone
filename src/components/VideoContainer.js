import { useEffect, useState } from 'react';
import { videoApi } from '../constants/videoApi';
import VideoCard from './VideoCard'

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
    <div className = "flex flex-wrap w-100%">
      {videoData.map((singleCard)=> <VideoCard key={singleCard.key} data = {singleCard}/>)}
    </div>
  )
}

export default VideoContainer