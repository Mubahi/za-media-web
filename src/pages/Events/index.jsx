import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import Date from "../../components/Date";
import VideoUrl from "./compnent/VideoUrl";
import FormButton from "../../components/FomButton";
import MediaFile from "../../components/MediaUpload";
const { v4: uuidv4 } = require("uuid");

const EventsForm = ({ Countries, Areas }) => {
  const [SelectedCountry, setSelectedCountry] = useState("");
  const [SelectedCity, setSelectedCity] = useState("all");
  const event_id = uuidv4();
  const handleFileUpload = (files) => {
    console.log(files);
  };
  return (
    <>
      <div className="pt-28 min-h-screen flex justify-center bg-white pb-10">
        <div className="bg-[#D8D9DA] shadow-lg w-11/12 rounded-md px-10 pb-5 relative">
          <PageHeading Title="Events Form" />
          <Divider />
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">Basic</h1>
          <div className="form-section-container justify-self flex md:flex-row gap-5">
            <FormField
              className="w-full"
              name="event_title"
              placeholder="Event title"
              type="text"
              // value={Event.event_title}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full leading-5"
              marginTop={5}
              name="event_date"
              placeholder="Date"
              type="date"
            />
            <FormField
              className="w-full"
              name="event_starting_time"
              placeholder="Event starting time"
              type="text"
              min="0"
              // value={Event.event_starting_hour}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="event_closing_time"
              placeholder="Event closing time"
              type="text"
              min="0"
              // value={Event.event_closing_hour}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="parking_slots"
              placeholder="Parking slots"
              type="number"
              min="0"
              // value={Event.parking_slots}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="event_address"
              placeholder="Event address"
              type="text"
              // value={Event.event_address}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              name="event_days"
              placeholder="Event days"
              type="number"
              min="1"
              // value={Event.event_days}
              // onChange={(e) => onChange(e)}
            />

            {/* <h1 className="font-bold text-[#FF7D31] mt-2 text-center">
              Select
            </h1>
            <select
              // onChange={(e) => filterCities(e.target.value)}
              className="text-black mx-2 w-full sm:w-28 mb-2 sm:mb-0 py-1 bg-transparent outline-none "
              value={SelectedCountry}
            >
              <option value="" className="bg-white text-black">
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
            </select> */}
          </div>
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">
            Organizer
          </h1>
          <div className="form-section-container justify-self flex md:flex-row gap-5">
            <FormField
              className="w-full"
              name="organizer_name"
              placeholder="Organizer name"
              type="text"
              // value={Event.organizer_name}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="organizer_nationality"
              placeholder="Organizer nationality"
              type="text"
              // value={Event.organizer_nationality}
              // // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="organizer_phone"
              placeholder="Organizer phone"
              type="number"
              min="0"
              // value={Event.organizer_phone}
              // // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="organizer_whatsapp"
              placeholder="Organizer whatsapp"
              type="number"
              min="0"
              // value={Event.organizer_whatsapp}
              // // onChange={(e) => onChange(e)}
            />
          </div>
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">
            Visitors
          </h1>
          <div className="form-section-container justify-self flex md:flex-row gap-5">
            <FormField
              className="w-full"
              name="total_visitors"
              placeholder="Total visitors"
              type="number"
              min="0"
              // value={Event.total_visitors}
              // onChange={(e) => onChange(e)}
            />
            <FormField
              className="w-full"
              name="visitors_last_year"
              placeholder="visitors last year"
              type="number"
              min="0"
              // value={Event.visitors_last_year}
              // onChange={(e) => onChange(e)}
            />
          </div>
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">Digital</h1>
          <div className="form-section-container justify-self flex md:flex-row gap-5">
            <FormField
              className="w-full"
              name="event_website"
              placeholder="Event website"
              type="text"
              // onChange={(e) => onDigitalChange([e.target.name], e.target.value)}
            />
            <FormField
              className="w-full"
              name="event_twitter"
              placeholder="Event twitter"
              type="text"
              // onChange={(e) => onDigitalChange([e.target.name], e.target.value)}
            />
            <FormField
              className="w-full"
              name="event_facebook"
              placeholder="Event facebook"
              type="text"
              // onChange={(e) => onDigitalChange([e.target.name], e.target.value)}
            />
            <FormField
              className="w-full"
              name="event_linkedin"
              placeholder="Event linkedin"
              type="text"
              // onChange={(e) => onDigitalChange([e.target.name], e.target.value)}
            />
            <FormField
              name="event_email"
              placeholder="Event email"
              type="text"
              // onChange={(e) => onDigitalChange([e.target.name], e.target.value)}
            />
          </div>
          <h1 className="font-bold text-[#FF7D31] mt-2 text-center">Videos</h1>
          <div className="form-section-container justify-self flex md:flex-row gap-5">
            <div className="flex items-center bg-orange-50 pr-1 mt-4 w-full">
              <VideoUrl
                name="event_videos"
                placeholder="Write video url"
                type="text"
                // onChange={(e) => setUrl(e.target.value)}
              />
              <button className="px-2 ">
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
          <MediaFile onFilesUploaded={handleFileUpload} />
        </div>

        <FormButton
          width="65px"
          value="Submit"
          name="save_btn"
          className="fixed bottom-20 right-20"
          // onClick={() => onItemAdded("Event", Event)}
        />
      </div>
      <ToastContainer />
    </>
  );
};
export default EventsForm;
