import React from "react";
const AllEvents = ({ Event }) => {
  return (
    <div>
      <div className="overflow-x-auto shadow-md min-h-screen pt-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-center text-xs text-gray-700 uppercase bg-orange-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th key="Address" scope="col" className="px-6 py-3">
                Address
              </th>
              <th key="EventDays" scope="col" className="px-6 py-3">
                Event date
              </th>
              <th key="EventStartingHours" scope="col" className="px-6 py-3">
                Event Starting Hours
              </th>
              <th key="EventClosingHours" scope="col" className="px-6 py-3">
                Event Closing Hours
              </th>
              <th key="OrganiserName" scope="col" className="px-6 py-3">
                Organiser Name
              </th>
              <th key="OrganiserNationality" scope="col" className="px-6 py-3">
                Organiser Nationality
              </th>
              <th key="OrganiserPhone" scope="col" className="px-6 py-3">
                Organiser Phone
              </th>
              <th key="OrganiserWhat'sapp" scope="col" className="px-6 py-3">
                Organiser What'sapp
              </th>
              <th key="TotallVisitors" scope="col" className="px-6 py-3">
                Totall Visitors
              </th>
              <th key="VisitorsLastYear" scope="col" className="px-6 py-3">
                Visitors LastYear
              </th>
              <th key="ParkingSlots" scope="col" className="px-6 py-3">
                Parking Slots
              </th>
              <th key="EventWebsite" scope="col" className="px-6 py-3">
                Event Website
              </th>
              <th key="EventTwitter" scope="col" className="px-6 py-3">
                Event Twitter
              </th>
              <th key="EventFacebook" scope="col" className="px-6 py-3">
                Event Facebook
              </th>
              <th key="EventLinkedin" scope="col" className="px-6 py-3">
                Event Linkedin
              </th>
              <th key="EventEmail" scope="col" className="px-6 py-3">
                Event Email
              </th>
            </tr>
          </thead>
          <tbody>
            {Event.map(function (events) {
              // Pass shop data as props to ShopRow
              return (
                <ShopRow
                  key={events.event_id}
                  //   shop={shop}
                  //   Countries={Countries}
                  //   Areas={Areas}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AllEvents;
