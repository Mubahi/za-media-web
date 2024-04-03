import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import FormButton from "../../components/FomButton";
import Date from "../../components/Date";
const UserInfo = ({ goToUserAdd }) => {
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
              />
              <FormField name="user_bio" placeholder="Bio" type="text" />
              <Date
                name="user_registration_date"
                value="Registration date"
                readOnly={"readOnly"}
              />
              <Date
                name="last_login_datetime"
                value="Last login"
                readOnly={"readOnly"}
              />
              <FormButton width="200px" onClick={goToUserAdd} value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserInfo;
