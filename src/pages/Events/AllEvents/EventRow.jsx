import React from "react";
const EventRow = ({ event, index }) => {
  return (
    <tr className="bg-white border-b hover:bg-orange-50 text-center cursor-pointer">
      <th scope="row" className="px-6 py-3 text-gray-900 whitespace-nowrap">
        <p>{index}</p>
      </th>
      <td className="px-6 py-3">{event.event_address}</td>
      <td className="px-6 py-3">{event.visitors_last_year}</td>
    </tr>
  );
};
export default EventRow;
