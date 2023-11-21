import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { videoApi } from '../constants/videoApi';
import VideoCard from './VideoCard';
import ButtonList from '../Additional Components/ButtonList';

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [loading, setLoading] = useState(false);
  const maxLength = 200;

  useEffect(() => {
      videosApiCall();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight &&
        videoData.length < maxLength &&
        nextPageToken &&
        !loading
      ) {
        videosApiCall(nextPageToken);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nextPageToken, videoData.length, loading]);

  const videosApiCall = async (nextPageToken = '') => {
    setLoading(true);
    const data = await fetch(`${videoApi}&pageToken=${nextPageToken}`);
    const json = await data.json();
    setVideoData((prevVideoData) => [...prevVideoData, ...json.items]);
    setNextPageToken(json.nextPageToken);
    setLoading(false);
  };

  return (
    <div>
      {/* <ButtonList /> */}
      <div className="flex flex-wrap items-center justify-center">
        {videoData.map((singleCard) => (
          <Link key={singleCard.id} to={`/watch?v=${singleCard.id}`}>
            <VideoCard data={singleCard} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;



