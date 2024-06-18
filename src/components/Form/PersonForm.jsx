import { HiInformationCircle } from "react-icons/hi";
import Input from "../Utils/Input.jsx";
import TextArea from "../Utils/TextArea.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";
import PropTypes from "prop-types";
import { useContext } from "react";
import { PersonContext } from "../../Context/PersonContext.jsx";
import { DateToday } from "../Utils/DateToday.jsx";

export function PersonForm() {
  const { personInfo, setPersonInfo } = useContext(PersonContext);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPersonInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <HiInformationCircle />
          </span>
          <h1 className="font-bold text-lg">Personal Information</h1>
        </div>
        <div className="flex flex-col space-y-4 border-b">
          <h4 className="text-md font-bold text-gray-700">Upload your photo</h4>
          <img
            src="https://placehold.co/100x120"
            className="w-24 h-24 rounded-full object-cover"
            alt="user-image"
          />
          <label className="pb-4">
            <input type="file" accept="image/png, image/jpeg" />
          </label>
        </div>
        <section className="flex flex-col space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Web Developer"
              label="Profession"
              name={"profession"}
              value={personInfo.profession}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Input
              type="date"
              label="Date of Birth"
              name={"dob"}
              value={personInfo.dob || DateToday()}
              onChange={handleOnChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              placeholder="John"
              label="First Name"
              name={"firstName"}
              value={personInfo.firstName}
              onChange={handleOnChange}
            />
            <Input
              type="text"
              placeholder="Doe"
              label="Last Name"
              name={"lastName"}
              value={personInfo.lastName}
              onChange={handleOnChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="email"
              placeholder="someone@example.com"
              label="Email"
              name={"email"}
              value={personInfo.email}
              onChange={handleOnChange}
            />
            <Input
              type="number"
              placeholder="1234567890"
              label="Phone"
              name={"phone"}
              value={personInfo.phone}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Address"
              label="Address"
              name={"address"}
              value={personInfo.address}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <TextArea
              label="About me"
              className="h-24"
              name={"about"}
              value={personInfo.about}
              onChange={handleOnChange}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input
                type="text"
                placeholder="British"
                label="Nationality"
                name={"nationality"}
                value={personInfo.nationality}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="English"
                label="Language"
                name={"languages"}
                value={personInfo.languages}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </section>
        <Button
          icon={<TbNewSection />}
          label="Add more information"
          className="bg-gray-700 text-white"
        />
      </section>
    </>
  );
}

PersonForm.propTypes = {
  profession: PropTypes.string,
  setProfession: PropTypes.func,
};
