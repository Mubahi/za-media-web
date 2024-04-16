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
import PageSubHeading from "../../components/PageSubHeading";
const { v4: uuidv4 } = require("uuid");

const EventsForm = ({ Countries, Areas, onItemAdded }) => {
  const event_id = uuidv4();
  const [Event, setEvent] = useState({ event_id });
  const [Cities, setCities] = useState("");
  const [Url, setUrl] = useState([]);

  const handleCountryChange = (country_id) => {
    const country = Countries.find((c) => c.country_id === country_id);
    setCities(country ? country.cities : []);
    setEvent({ ...Event, country_id: country_id, shop_city_id: "" }); // Reset city selection when country changes
  };
  const handleFileUpload = (files) => {
    let event_media = [...files];
    if (Event.event_media) {
      const prevMedia = [...Event.event_media];
      // console.log(prevMedia);
      setEvent({ ...Event, event_media: [...prevMedia, ...event_media] });
    } else {
      setEvent({ ...Event, event_media });
    }
    // console.log(files);
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

  // console.log(Event);
  return (
    <>
      <div className="pt-48 md:pt-28 min-h-screen flex justify-center bg-white pb-10">
        <div className="bg-[#D8D9DA] shadow-lg w-11/12 rounded-md px-10 pb-5">
          <PageHeading Title="Events Form" />
          <Divider />
          <PageSubHeading title="Basic" />
          <div className="flex flex-wrap event-feild-container">
            <FormField
              className="w-full"
              name="event_title"
              placeholder="Event title"
              type="text"
              value={Event.event_title ? Event.event_title : ""}
              onChange={(e) => handleChange(e)}
            />
            <FormField
              className="w-full"
              marginTop={5}
              name="event_date"
              placeholder="Date"
              type="date"
              onChange={(e) => handleChange(e)}
            />
            <FormField
              className="w-full"
              name="event_starting_time"
              placeholder="Event starting time"
              type="time"
              min="0"
              onChange={(e) => handleChange(e)}
              // value={Event.event_starting_hour}
            />
            <FormField
              className="w-full"
              name="event_closing_time"
              placeholder="Event closing time"
              type="time"
              min="0"
              // value={Event.event_closing_hour}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="parking_slots"
              placeholder="Parking slots"
              type="number"
              min="0"
              // value={Event.parking_slots}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="event_address"
              placeholder="Event address"
              type="text"
              // value={Event.event_address}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
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
              onChange={(e) => handleCountryChange(e.target.value)}
              className="text-black bg-white mb-2 sm:mb-0 h-10 mt-5 border-l-2 border-red-500 outline-none "
              value={Event.country_id ? Event.country_id : ""}
            >
              <option className="bg-white text-black" value="">
                All Countries
              </option>
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
              name="city_id"
              onChange={(e) => handleChange(e)}
              value={Event.city_id ? Event.city_id : ""}
              className="text-black bg-white mb-2 sm:mb-0 h-10 mt-5 border-l-2 border-red-500 outline-none "
            >
              <option value="" className="bg-white text-black">
                All Cities{" "}
              </option>
              {Cities.map(function (City) {
                return (
                  <option
                    key={City.city_id}
                    value={City.city_id}
                    className="bg-white text-black"
                  >
                    {City.city_name}
                  </option>
                );
              })}
            </select>
            <select
              value={Event.area_id ? Event.area_id : ""}
              name="area_id"
              className="text-black bg-white mb-2 sm:mb-0 h-10 mt-5 border-l-2 border-red-500 outline-none "
              onChange={(e) => handleChange(e)}
            >
              <option className="bg-white text-black" value="">
                All Areas
              </option>
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
          <PageSubHeading title="Organizer" />
          <div className="flex flex-wrap event-feild-container">
            <FormField
              className="w-full"
              name="organizer_name"
              placeholder="Organizer name"
              type="text"
              // value={Event.organizer_name}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="organizer_nationality"
              placeholder="Organizer nationality"
              type="text"
              // value={Event.organizer_nationality}
              onChange={(e) => handleChange(e)}
              // // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="organizer_phone"
              placeholder="Organizer phone"
              type="number"
              min="0"
              // value={Event.organizer_phone}
              onChange={(e) => handleChange(e)}
              // // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="organizer_whatsapp"
              placeholder="Organizer whatsapp"
              type="number"
              min="0"
              // value={Event.organizer_whatsapp}
              onChange={(e) => handleChange(e)}
              // // onChange={(e) => onChange(e)}
            />
          </div>
          <PageSubHeading title="Visitors" />
          <div className="flex flex-wrap event-feild-container">
            <FormField
              className="w-full"
              name="total_visitors"
              placeholder="Total visitors"
              type="number"
              min="0"
              // value={Event.total_visitors}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="visitors_last_year"
              placeholder="visitors last year"
              type="number"
              min="0"
              // value={Event.visitors_last_year}
              onChange={(e) => handleChange(e)}
              // onChange={(e) => onChange(e)}
            />
          </div>
          <PageSubHeading title="Digital" />
          <div className="flex flex-wrap event-feild-container">
            <FormField
              className="w-full"
              name="event_website"
              placeholder="Event website"
              type="text"
              onChange={(e) =>
                handleDigitalChange([e.target.name], e.target.value)
              }
            />
            <FormField
              className="w-full"
              name="event_twitter"
              placeholder="Event twitter"
              type="text"
              onChange={(e) =>
                handleDigitalChange([e.target.name], e.target.value)
              }
            />
            <FormField
              className="w-full"
              name="event_facebook"
              placeholder="Event facebook"
              type="text"
              onChange={(e) =>
                handleDigitalChange([e.target.name], e.target.value)
              }
            />
            <FormField
              className="w-full"
              name="event_linkedin"
              placeholder="Event linkedin"
              type="text"
              onChange={(e) =>
                handleDigitalChange([e.target.name], e.target.value)
              }
            />
            <FormField
              className="w-full"
              name="event_email"
              placeholder="Event email"
              type="text"
              onChange={(e) =>
                handleDigitalChange([e.target.name], e.target.value)
              }
            />
          </div>
          <PageSubHeading title="Videos" />
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
          <div className="mt-5 ">
            {Event.event_videos?.map(function (video, index) {
              return (
                <div className="flex items-center bg-orange-50 pr-1 mt-4 w-full">
                  <VideoUrl type={"text"} value={video} readOnly={true} />
                  <button
                    onClick={() => handleUrlRemove(index)}
                    className="px-2 my-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="pointer-cursor bi bi-plus-circle ml-1 text-orange-500 hover:bg-orange-500 hover:text-white hover:border-2 hover:border-orange-500 transition-colors duration-700 rounded-full"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
          <PageSubHeading title=" Upload Media" />
          <div className="border-dotted border-2 border-orange-400 p-2 mt-5">
            <MediaFile onFilesUploaded={handleFileUpload} />
          </div>
          <div className="flex justify-end">
            <FormButton
              width={100}
              value="Submit"
              name="save_btn"
              className=""
              onClick={handleSave}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default EventsForm;
