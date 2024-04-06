import React, { useState } from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import VideoUrl from "./compnent/VideoUrl";
const EventVideos = () => {
  return (
    <>
      <PageHeading Title="Video" />
      <Divider />
      <VideoUrl
        name="event_videos"
        placeholder="Write video url"
        className="mt-4"
        type="text"
      />
      <div className="bg-[#D8D9DA] overflow-hidden ml-4 flex-1 mt-5 mr-5">
        <table className="w-full text-center border border-orange-500">
          <thead className=" bg-[#CECFD1] text-[#FF7D31] font-base font-bold">
            <tr>
              <th className="border-b border-orange-500">Video Url</th>
              <th className="border-b border-orange-500">Delete</th>
            </tr>
          </thead>
          <tbody className="border border-orange-500">
            <tr>
              <td className="border-b border-r px-1 border-orange-500">
                https://www.google.com.pk/
              </td>
              <td className="border-b border-r px-1 border-orange-500">
                <button className="px-2 my-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-dash-circle-fill bg-white text-orange-500 hover:text-white hover:bg-orange-500 hover:border-2 hover:border-orange-500 rounded-full transition-colors duration-700"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default EventVideos;
