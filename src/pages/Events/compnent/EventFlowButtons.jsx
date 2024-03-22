import React from "react";
import Divider from "../../../components/Divider";
const EventFlowButtons = ({ view }) => {
  return (
    <div class="flex justify-center items-end">
      <button
        onClick={() => view("Event")}
        class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded"
      >
        R
      </button>
      <Divider />
      <button
        onClick={() => view("Organizer")}
        class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded"
      >
        O
      </button>
      <Divider />
      <button
        onClick={() => view("Visitor")}
        class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded"
      >
        V
      </button>
      <Divider />
      <button
        onClick={() => view("Parking")}
        class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded"
      >
        P
      </button>
      <Divider />
      <button
        onClick={() => view("DigitalInfo")}
        class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-1 px-2 rounded"
      >
        d
      </button>
    </div>
  );
};
export default EventFlowButtons;
