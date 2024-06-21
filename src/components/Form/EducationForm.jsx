import { PiStudentFill } from "react-icons/pi";
import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";
import PropTypes from "prop-types";

export function EducationForm({ personInfo, setPersonInfo }) {

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;

    setPersonInfo(prevState => {
      const updatedEducation = [...prevState.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [name]: value
      };

      return { ...prevState, education: updatedEducation };
    });
  };

  const addEducationEntry = () => {
    setPersonInfo(prevState => ({
      ...prevState,
      education: [
        ...prevState.education,
        { degree: "", institute: "", start_date: "", end_date: "" }
      ]
    }));
  };

  return (
      <>
        <section className="space-y-4">
          <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <PiStudentFill />
          </span>
            <h1 className="font-bold text-lg">Education Information</h1>
          </div>
          <section className={'divide-y-2 divide-blue-400 divide-dashed'}>
          {personInfo.education.map((edu, index) => (
              <div key={index} className="flex flex-col py-4 space-y-4">
                <div>
                  <Input
                      type="text"
                      placeholder="Bachelor of Science"
                      label={`Degree - ${index + 1}`}
                      name="degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, e)}
                  />
                </div>
                <div>
                  <Input
                      type="text"
                      placeholder="Oxford University"
                      label="Institution"
                      name="institute"
                      value={edu.institute}
                      onChange={(e) => handleEducationChange(index, e)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                      type="number"
                      label="Start year"
                      name="start_year"
                      value={edu.start_year}
                      onChange={(e) => handleEducationChange(index, e)}
                  />
                  <Input
                      type="number"
                      label="End Year"
                      name="end_year"
                      value={edu.end_year}
                      onChange={(e) => handleEducationChange(index, e)}
                  />
                </div>
              </div>
          ))}
          </section>
          <Button
              icon={<TbNewSection />}
              label="Add more education"
              className="bg-gray-700 text-white"
              onClick={addEducationEntry}
          />
        </section>
      </>
  );
}

EducationForm.propTypes = {
  personInfo: PropTypes.object.isRequired,
  setPersonInfo: PropTypes.func.isRequired
};