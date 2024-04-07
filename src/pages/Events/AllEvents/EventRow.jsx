import React from "react";
const EventRow = ({ event, index }) => {
  return (
    <tr className="bg-white border-b hover:bg-orange-50 text-center cursor-pointer">
      <th scope="row" className="px-6 py-3 text-gray-900 whitespace-nowrap">
        <p>{index + 1}</p>
      </th>
      <td className="px-6 py-3">{event.event_address}</td>
      <td className="px-6 py-3">{event.event_date}</td>
      <td className="px-6 py-3">{event.event_days}</td>
      <td className="px-6 py-3">{event.event_starting_hour}</td>
      <td className="px-6 py-3">{event.event_closing_hour}</td>
      <td className="px-6 py-3">{event.event_address}</td>
      <td className="px-6 py-3">{event.organizer_name}</td>
      <td className="px-6 py-3">{event.organizer_nationality}</td>
      <td className="px-6 py-3">{event.organizer_phone}</td>
      <td className="px-6 py-3">{event.organizer_whatsapp}</td>
      <td className="px-6 py-3">{event.total_visitors}</td>
      <td className="px-6 py-3">{event.visitors_last_year}</td>
      <td className="px-6 py-3">{event.parking_slots}</td>
      <td className="px-6 py-3">{event.event_digital_info?.event_website}</td>
      <td className="px-6 py-3">{event.event_digital_info?.event_twitter}</td>
      <td className="px-6 py-3">{event.event_digital_info?.event_facebook}</td>
      <td className="px-6 py-3">{event.event_digital_info?.event_linkedin}</td>
      <td className="px-6 py-3">{event.event_digital_info?.event_email}</td>
    </tr>
  );
};
export default EventRow;
