import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import FormButton from "../../components/FomButton";
import Date from "../../components/Date";
const UserInfo = ({ goToUserAdd, backToUser }) => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center  pt-28 pb-5">
        <div
          data-aos="fade-down"
          className="bg-[#D8D9DA] p-8 rounded-md shadow-lg w-4/5 flex flex-col md:flex-row"
        >
          <div className="flex-1 ">
            <PageHeading Title="User Info" />
            <Divider />
            <form className="flex flex-col">
              <FormField
                name="user_phone"
                placeholder="Phone No"
                type="number"
                min="0"
              />
              <FormField name="user_bio" placeholder="Bio" type="text" />
              <Date
                name="user_registration_date"
                label="User Registration Date"
                value="Registration date"
                readOnly={"readOnly"}
                min="0"
              />
              <Date
                name="last_login_datetime"
                label="Last Login Date"
                value="Last login"
                readOnly={"readOnly"}
                min="0"
              />
              <div className="flex justify-center items-center">
                <button
                  onClick={() => backToUser(backToUser)}
                  className="border-2 border-orange-500 bg-orange-500 text-black py-1 rounded-md hover:bg-white hover:text-black hover:border-orange-600 transition duration-700 font-base font-bold mt-3 w-44 mr-2"
                >
                  Cancel
                </button>
                <FormButton
                  width="200px"
                  onClick={goToUserAdd}
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserInfo;
