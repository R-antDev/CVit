import { MdWorkHistory } from "react-icons/md";
import Input from "../Utils/Input.jsx";
import TextArea from "../Utils/TextArea.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";
import PropTypes from "prop-types";

export function WorkForm({ personInfo, setPersonInfo }) {

  const handleWorkChange = (index, e) => {
    const { name, value } = e.target;
    setPersonInfo(prevState => {
      const updatedWork = [...prevState.work];
      updatedWork[index] = {
        ...updatedWork[index],
        [name]: value
      };
      return { ...prevState, work: updatedWork };
    });
  };

  const addWorkEntry = () => {
    setPersonInfo(prevState => ({
      ...prevState,
      work: [
        ...prevState.work,
        { company: "", job_title: "", start_date: "", end_date: "", location: "" }
      ]
    }));
  };

  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <MdWorkHistory />
          </span>
          <h1 className="font-bold text-lg">Work Experience</h1>
        </div>
        <section className={'divide-y-2 divide-blue-400 divide-dashed'}>
        {
          personInfo.work.map((work, index) => (
            <div key={index} className="flex flex-col py-4 space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="ABC crop."
                  label={`Company - ${index + 1}`}
                  name="company"
                  value={work.company}
                  onChange={(e) => handleWorkChange(index, e)}
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Backend Engineer"
                  label="Job Title"
                  name="job_title"
                  value={work.job_title}
                  onChange={(e) => handleWorkChange(index, e)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="number"
                  label="Start Year"
                  name="start_year"
                  value={work.start_year}
                  onChange={(e) => handleWorkChange(index, e)}
                />
                <Input
                  type="number"
                  label="End Year"
                  name="end_year"
                  value={work.end_year}
                  onChange={(e) => handleWorkChange(index, e)}
                />
              </div>
              <div>
                <TextArea
                  label="Location"
                  name="location"
                  value={work.location}
                  onChange={(e) => handleWorkChange(index, e)}
                />
              </div>
            </div>
          ))
        }
        </section>
        <Button
          icon={<TbNewSection />}
          label="Add more experience"
          className="bg-gray-700 text-white"
          onClick={addWorkEntry}
        />
      </section>
    </>
  );
}

WorkForm.propTypes = {
  personInfo: PropTypes.object,
  setPersonInfo: PropTypes.func
}