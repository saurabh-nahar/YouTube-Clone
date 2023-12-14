import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenuToggle } from "../utils/sideMenuSlice";
import Comments from "./Comments";
import Chats from "./Chats";
import { addChat } from "../utils/chatsSlice";
import { SEARCH_BY_ID } from "../constants/searchByIdApi";

const WatchPage = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [videoData, setVideoData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenuToggle());
    videoDataFetch();
  }, [dispatch]);

  const [searchParams] = useSearchParams();
  const param = searchParams.get("v");

  const videoDataFetch = async () => {
    const data = await fetch(SEARCH_BY_ID + param);
    const json = await data.json();
    console.log(json.items[0]);
    setVideoData(json.items[0]);
  };

  function appendMessage() {
    dispatch(addChat({ name: "Saurabh", message: liveMessage }));
    setLiveMessage("");
  }

  function handleDefault(event) {
    event.preventDefault();
  }

  return videoData && videoData.snippet ? (
    <div>
      <div className="flex">
        <div className="m-4 w-8/12 video-container">
          <iframe
            className="rounded-xl "
            // width="1100"
            // height="630"
            width="400"
            height="225"
            src={"https://www.youtube.com/embed/" + param}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="w-4/12 m-4 border-black border-1 rounded-md live-chat-section"
          style={{ height: "630px" }}
        >
          <p className="border-b-2 p-2 mx-2 font-bold h-[3rem]">Live Chat</p>
          <div className="overflow-y-scroll h-[33.375rem] flex flex-col-reverse">
            <Chats />
          </div>
          <div className="h-[3rem]">
            <form className="live-chat-form" onSubmit={handleDefault}>
              <input
                className="border-2 w-max p-2 mx-2"
                value={liveMessage}
                onChange={(e) => setLiveMessage(e.target.value)}
              ></input>
              <button>
                <i
                  className="fa-regular fa-paper-plane text-xl"
                  onClick={appendMessage}
                ></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mx-4 p-2 mt-0 mb-4 font-bold text-xl w-[1100px] video-details">
        <p className="mb-4 font-semibold font-size-sm">{videoData.snippet.title}</p>
        <div className="flex align-center justify-between">
          <div className="flex justify-center items-center">
            <i className="fa-solid fa-circle-user text-4xl font-semibold pr-2"></i>
            <p className="text-lg font-normal font-size-sm">
              {videoData.snippet.channelTitle}
            </p>
          </div>
          <div>
            <button className="rounded-l-xl bg-gray-300 hover:bg-gray-200 p-1">
              <i className="fa-regular fa-thumbs-up">
                <span className="text-base p-1">
                  {Math.ceil(videoData.statistics.likeCount / 1000)}k
                </span>
              </i>
            </button>
            <button className="rounded-r-xl bg-gray-300  hover:bg-gray-200 p-1 border-l-2 border-black">
              <i className="fa-regular fa-thumbs-down"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-4 p-2 w-[1100px] bg-gray-300 rounded-lg ">
        <p className="text-base font-semibold font-size-sm">
          {Math.ceil(videoData.statistics.viewCount / 1000)}k views
        </p>
        <p className="text-base line-clamp-3 font-size-sm">
          {videoData.snippet.description}
        </p>
      </div>
      <div className="m-4 comments-container">
        <Comments />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default WatchPage;
