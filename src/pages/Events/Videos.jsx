import React, { useState } from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import VideoUrl from "./compnent/VideoUrl";
import FormField from "../../components/FormField";
const EventVideos = ({ onUrlAdd, onUrlRemove, Event }) => {
  const [Url, setUrl] = useState();
  return (
    <>
      <PageHeading Title="Video" />
      <Divider />
      <div className="flex items-center bg-orange-50 pr-1 mt-4">
        <VideoUrl
          name="event_videos"
          placeholder="Write video url"
          type="text"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={() => onUrlAdd(Url)} className="px-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="pointer-cursor bi bi-plus-circle ml-1 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-2 hover:border-orange-500 transition-colors duration-700 rounded-full"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </button>
      </div>

      <div className=" mt-5 ">
        {Event.event_videos?.map(function (video, index) {
          return (
            <div
              key={index}
              className="w-full bg-white  border-l-2 border-red-500  py-2 px-3 mb-4 ">
              <div value={video} className="flex justify-between items-center">
                {video}
                <button
                  onClick={() => onUrlRemove(index)}
                  className="px-2 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-dash-circle-fill bg-white text-orange-500 hover:text-white hover:bg-orange-500 hover:border-2 hover:border-orange-500 rounded-full transition-colors duration-700"
                    viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default EventVideos;
