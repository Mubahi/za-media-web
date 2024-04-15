import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import Date from "../../components/Date";
import VideoUrl from "./compnent/VideoUrl";
import FormButton from "../../components/FomButton";
import MediaFile from "../../components/MediaUpload";
import { validateObject } from "../../Global/validationUtils";
const { v4: uuidv4 } = require("uuid");

const EventsForm = ({ Countries, Areas, onItemAdded }) => {
  const [SelectedCountry, setSelectedCountry] = useState("");
  const event_id = uuidv4();
  const [Event, setEvent] = useState({ event_id });
  const [Url, setUrl] = useState([]);
  const handleFileUpload = (files) => {
    console.log(files);
  };
  const handleChange = (e) => {
    setEvent({ ...Event, [e.target.name]: e.target.value });
  };
  const handleUrlAdd = () => {
    if (Url && Url.length !== 0) {
      const newVids = [...(Event.event_videos || [])]; // Copy the array if it exists or create a new one if it doesn't
      newVids.push(Url);
      setEvent({ ...Event, event_videos: newVids });
      setUrl();
    } else {
      toast.error(" Please Enter a Valid Url");
    }
  };
  const handleUrlRemove = (index) => {
    let newVids = [...Event.event_videos];
    newVids.splice(index, 1);
    if (newVids.length === Event.event_videos.length) {
      toast.error("error removing video");
    }
    setEvent((prevEvent) => ({ ...prevEvent, event_videos: newVids }));
  };
  const handleDigitalChange = (name, value) => {
    const newDigitals = { ...(Event.event_digital_info || {}), [name]: value };
    setEvent({ ...Event, event_digital_info: newDigitals });
  };
  const keysToCheck = ["event_title"];
  const handleSave = () => {
    if (validateObject(Event, keysToCheck)) {
      onItemAdded("Event", Event);
      setEvent({ event_id });
    } else {
      toast.error("Enter a correct Event Title ");
    }
  };
  console.log(keysToCheck);

  console.log(Event);
  return (
    <>
      <div className="pt-48 md:pt-28 min-h-screen flex justify-center bg-white pb-10">
        <div className="bg-[#D8D9DA] shadow-lg w-11/12 rounded-md px-10 pb-5 relative">
          <PageHeading Title="Events Form" />
          <Divider />
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">Basic</h1>
          <div className="flex flex-wrap">
            <FormField
              className="w-full sm:w-[529px] md:mr-5"
              name="event_title"
              placeholder="Event title"
              type="text"
              value={Event.event_title ? Event.event_title : ""}
              onChange={(e) => handleChange(e)}
            />
            <FormField
              className="w-full sm:w-[529px]"
              marginTop={5}
              name="event_date"
              placeholder="Date"
              type="date"
              onChange={(e) => handleChange(e)}
            />
            <FormField
              className="w-full sm:w-[529px] md:mr-5"
              name="event_starting_time"
              placeholder="Event starting time"
              type="text"
              min="0"
              onChange={(e) => handleChange(e)}
              // value={Event.event_starting_hour}
            />
            <FormField
              className="w-full sm:w-[529px]"
              name="event_closing_time"
              placeholder="Event closing time"
              type="text"
              min="0"
              // value={Event.event_closing_hour}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full sm:w-[529px] md:mr-5"
              name="parking_slots"
              placeholder="Parking slots"
              type="number"
              min="0"
              // value={Event.parking_slots}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full sm:w-[529px]"
              name="event_address"
              placeholder="Event address"
              type="text"
              // value={Event.event_address}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full sm:w-[529px] md:mr-5"
              name="event_days"
              placeholder="Event days"
              type="number"
              min="1"
              // value={Event.event_days}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <select
              // onChange={(e) => filterCities(e.target.value)}
              onChange={(e) => handleChange(e)}
              className="text-black bg-white sm:w-[529px] mb-2 sm:mb-0 h-10 mt-5 border-l-2 border-red-500 outline-none "
              value={SelectedCountry}
            >
              <option className="bg-white text-black">All Countries</option>
              {Countries.map(function (country) {
                return (
                  <option
                    key={country.country_id}
                    value={country.country_id}
                    className="bg-white text-black"
                  >
                    {country.country_name}
                  </option>
                );
              })}
            </select>
            <select
              value={Event.shop_area_id ? Event.shop_area_id : ""}
              name="shop_area_id"
              className="text-black bg-white sm:w-[529px] mb-2 sm:mb-0 h-10 mt-5 border-l-2 border-red-500 outline-none "
              onChange={(e) => handleChange(e)}
            >
              <option className="bg-white text-black">All Areas</option>
              {Areas.map(function (area) {
                return (
                  <option
                    key={area.id}
                    value={area.id}
                    className="bg-white text-black"
                  >
                    {area.name}
                  </option>
                );
              })}
            </select>
          </div>

          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">
            Organizer
          </h1>
          <div className="flex flex-wrap">
            <FormField
              className="w-full sm:w-[529px]  md:mr-5"
              name="organizer_name"
              placeholder="Organizer name"
              type="text"
              // value={Event.organizer_name}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full sm:w-[529px]"
              name="organizer_nationality"
              placeholder="Organizer nationality"
              type="text"
              // value={Event.organizer_nationality}
              onChange={(e) => handleChange(e)}
              // // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full sm:w-[529px] md:mr-5"
              name="organizer_phone"
              placeholder="Organizer phone"
              type="number"
              min="0"
              // value={Event.organizer_phone}
              onChange={(e) => handleChange(e)}
              // // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full sm:w-[529px]"
              name="organizer_whatsapp"
              placeholder="Organizer whatsapp"
              type="number"
              min="0"
              // value={Event.organizer_whatsapp}
              onChange={(e) => handleChange(e)}
              // // onChange={(e) => onChange(e)}
            />
          </div>
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">
            Visitors
          </h1>
          <div className="flex flex-wrap">
            <FormField
              className="w-full sm:w-[529px] md:mr-5"
              name="total_visitors"
              placeholder="Total visitors"
              type="number"
              min="0"
              // value={Event.total_visitors}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full sm:w-[529px]"
              name="visitors_last_year"
              placeholder="visitors last year"
              type="number"
              min="0"
              // value={Event.visitors_last_year}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
          </div>
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">Digital</h1>
          <div className="flex flex-wrap">
            <FormField
              className="w-full sm:w-[529px] md:mr-5"
              name="event_website"
              placeholder="Event website"
              type="text"
              onChange={(e) =>
                handleDigitalChange([e.target.name], e.target.value)
              }
            />
            <FormField
              className="w-full sm:w-[529px]"
              name="event_twitter"
              placeholder="Event twitter"
              type="text"
              onChange={(e) =>
                handleDigitalChange([e.target.name], e.target.value)
              }
            />
            <FormField
              className="w-full sm:w-[529px] md:mr-5"
              name="event_facebook"
              placeholder="Event facebook"
              type="text"
              onChange={(e) =>
                handleDigitalChange([e.target.name], e.target.value)
              }
            />
            <FormField
              className="w-full sm:w-[529px]"
              name="event_linkedin"
              placeholder="Event linkedin"
              type="text"
              onChange={(e) =>
                handleDigitalChange([e.target.name], e.target.value)
              }
            />
            <FormField
              className="w-full sm:w-[529px] md:mr-5"
              name="event_email"
              placeholder="Event email"
              type="text"
              onChange={(e) =>
                handleDigitalChange([e.target.name], e.target.value)
              }
            />
          </div>
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">Videos</h1>
          <div className="flex flex-wrap">
            <div className="flex items-center bg-orange-50 pr-1 mt-4 w-full">
              <VideoUrl
                name="event_videos"
                placeholder="Write video url"
                type="text"
                value={Url ? Url : ""}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button className="px-2 " onClick={handleUrlAdd}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="pointer-cursor bi bi-plus-circle ml-1 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-2 hover:border-orange-500 transition-colors duration-700 rounded-full"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </button>
            </div>
          </div>
          <div className=" mt-5 ">
            {Event.event_videos?.map(function (video, index) {
              return (
                <div
                  key={index}
                  className="w-full bg-white  border-l-2 border-red-500  py-2 px-3 mb-4 "
                >
                  <div
                    value={video}
                    className="flex justify-between items-center"
                  >
                    {video}
                    <button
                      onClick={() => handleUrlRemove(index)}
                      className="px-2 my-1"
                    >
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
                  </div>
                </div>
              );
            })}
          </div>
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">
            Upload File
          </h1>
          <MediaFile onFilesUploaded={handleFileUpload} />
        </div>

        <FormButton
          width="65px"
          value="Submit"
          name="save_btn"
          className="fixed bottom-20 right-20"
          onClick={handleSave}
        />
      </div>
    </>
  );
};
export default EventsForm;
