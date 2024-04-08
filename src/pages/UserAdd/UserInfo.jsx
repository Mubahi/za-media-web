import React from "react";
import PageHeading from "../../components/PageHeadng";
import Divider from "../../components/Divider";
import FormField from "../../components/FormField";
import FormButton from "../../components/FomButton";
import Date from "../../components/Date";
import SelectField from "../../components/SelectField";
const UserInfo = ({
  goToUserAdd,
  backToUser,
  onInfoChange,
  onSave,
  SelectedUser,
  Roles,
}) => {
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
            <div className="flex flex-col">
              <FormField
                name="user_email"
                value={SelectedUser.user_email}
                placeholder="Email"
                type="text"
                readOnly={true}
              />
              <SelectField
                options={Roles}
                valueKey={"role_id"}
                labelKey={"role_name"}
                name={"role_id"}
                value={SelectedUser.role_id}
                onChange={(e) => onInfoChange(e.target.name, e.target.value)}
              />
              <FormField
                name="user_password"
                placeholder="Password"
                type="password"
                value={SelectedUser.user_password}
                onChange={(e) => onInfoChange(e.target.name, e.target.value)}
              />
              <FormField
                name="user_fullname"
                placeholder="Fullname"
                type="text"
                value={SelectedUser.user_fullname}
                onChange={(e) => onInfoChange(e.target.name, e.target.value)}
              />
              <FormField
                name="user_phone"
                placeholder="Phone No"
                type="number"
                min="0"
                value={SelectedUser.user_phone}
                onChange={(e) => onInfoChange(e.target.name, e.target.value)}
              />
              <FormField
                onChange={(e) => onInfoChange(e.target.name, e.target.value)}
                name="user_bio"
                value={SelectedUser.user_bio}
                placeholder="Bio"
                type="text"
              />
              {/* <Date
                onChange={(e) => onInfoChange(e.target.name, e.target.value)}
                value={SelectedUser.user_registration_date}
                name="user_registration_date"
                label="User Registration Date"
                readOnly={"readOnly"}
                min="0"
                />
              <Date
                onChange={(e) => onInfoChange(e.target.name, e.target.value)}
                name="last_login_datetime"
                label="Last Login Date"
                value={SelectedUser.last_login_datetime}
                readOnly={"readOnly"}
                min="0"
              /> */}
              <div className="flex justify-center items-center">
                <button
                  onClick={() => backToUser(backToUser)}
                  className="border-2 border-orange-500 bg-orange-500 text-white py-1 rounded-md hover:bg-orange-600 hover:border-orange-600 transition duration-700 font-base font-bold mt-3 w-44 mr-2"
                >
                  Back
                </button>
                <FormButton width="200px" onClick={onSave} value="Save" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserInfo;
