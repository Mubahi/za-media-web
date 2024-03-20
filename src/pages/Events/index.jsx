import Divider from "../../components/Divider";
import FormButton from "../../components/FomButton";
import FormField from "../../components/FormField";
import PageHeading from "../../components/PageHeadng";
const Events = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-300 via-orange-300 to-pink-300">
      <div
        data-aos="fade-down"
        className="bg-white p-8 rounded-md shadow-lg w-96 mt-24 mb-5"
      >
        <PageHeading Title="Events" />
        <Divider />
        <FormField
          name="event_address"
          placeholder="Event address"
          type="text"
        />
        <FormField name="event_date" type="date" />
        <FormField
          name="event_days"
          placeholder="Event days"
          type="number"
          min="0"
        />
        <FormField
          name="event_starting_hour"
          placeholder="Event starting hour"
          type="number"
          min="0"
        />
        <FormField
          name="event_closing_hour"
          placeholder="Event closing hour"
          type="number"
          min="0"
        />
        <FormField
          name="organizer_name"
          placeholder="Organizer name"
          type="text"
        />
        <FormField
          name="organizer_nationality"
          placeholder="Organizer nationality"
          type="text"
        />
        <FormField
          name="organizer_phone"
          placeholder="Organizer phone no"
          type="number"
          min="0"
        />
        <FormField
          name="organizer_whatsapp"
          placeholder="Organizer watsapp no"
          type="number"
          min="0"
        />
        <select
          id="parking_slots"
          className="text-black mt-4 bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"
        >
          <option value="" className="bg-yellow-100">
            parking slots
          </option>
          <option value="" className="bg-yellow-100">
            0
          </option>
          <option value="" className="bg-yellow-100">
            1
          </option>
          <option value="" className="bg-yellow-100">
            50
          </option>
        </select>
        <FormField
          name="total_visitors"
          placeholder="Total visitors"
          type="number"
          min="0"
        />
        <FormField
          name="visitors_last_year"
          placeholder="Visitors last year"
          type="number"
          min="0"
        />
        <select
          id="event_digital_info"
          className="text-black mt-4 bg-yellow-100 border-l-2 border-red-500 w-full py-2 px-3 focus:outline-none inputFeild"
        >
          <option value="" className="bg-yellow-100">
            Event digital info
          </option>
          <option value="" className="bg-yellow-100">
            Website
          </option>
          <option value="" className="bg-yellow-100">
            twitter
          </option>
          <option value="" className="bg-yellow-100">
            facebook
          </option>
          <option value="" className="bg-yellow-100">
            linkin
          </option>
          <option value="" className="bg-yellow-100">
            email
          </option>
        </select>
        <FormButton Title="Submit" />
      </div>
    </div>
  );
};

export default Events;
