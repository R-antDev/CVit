import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";
import { GoCrossReference } from "react-icons/go";
import PropTypes from "prop-types";

export function ReferenceForm({ personInfo, setPersonInfo }) {

  const handleReferenceChange = (index, e) => {
    const { name, value } = e.target;

    setPersonInfo(prevState => {
      const updatedReference = [...prevState.references];
      updatedReference[index] = {
        ...updatedReference[index],
        [name]: value
      };

      return { ...prevState, references: updatedReference };
    });
  };

  const addReferenceEntry = () => {
    setPersonInfo(prevState => ({
      ...prevState,
      references: [
        ...prevState.references,
        { name: "", title: "", email: "", phone: "" }
      ]
    }));
  };

  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <GoCrossReference />
          </span>
          <h1 className="font-bold text-lg">References</h1>
        </div>
        <section className={'divide-y-2 divide-blue-400 divide-dashed'}>
        {
          personInfo.references.map((ref, index) => (
              <div key={ index } className="flex flex-col py-4 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className={"col-span-2"}>
                    <Input
                        type="text"
                        placeholder="John"
                        label={`Name - ${index + 1}`}
                        name="name"
                        value={ref.name}
                        onChange={(e) => handleReferenceChange(index, e)}
                    />
                  </div>
                  <Input
                      type="text"
                      placeholder="Project Manager"
                      label="Title"
                      name="title"
                      value={ref.title}
                      onChange={(e) => handleReferenceChange(index, e)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                      type="email"
                      placeholder="someone@example.com"
                      label="Email"
                      name="email"
                      value={ref.email}
                      onChange={(e) => handleReferenceChange(index, e)}
                  />
                  <Input
                      type="number"
                      placeholder="1234567890"
                      label="Phone"
                      name="phone"
                      value={ref.phone}
                      onChange={(e) => handleReferenceChange(index, e)}
                  />
                </div>
              </div>
          ))
        }
        </section>
        <Button
            icon={<TbNewSection/>}
            label="Add more reference"
            className="bg-gray-700 text-white"
            onClick={addReferenceEntry}
        />
      </section>
    </>
  );
}


ReferenceForm.propTypes = {
  personInfo: PropTypes.object,
  setPersonInfo: PropTypes.func,
};