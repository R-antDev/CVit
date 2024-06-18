import { PiStudentFill } from "react-icons/pi";
import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";

export function EducationForm() {
  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <PiStudentFill />
          </span>
          <h1 className="font-bold text-lg">Education Information</h1>
        </div>
        <section className="flex flex-col space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Bachelor of Science"
              label="Degree"
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Oxford University"
              label="Institution"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input type="date" label="Start Date" value="2020-01-01" />
            <Input type="date" label="End Date" value="2022-01-01" />
          </div>
        </section>
        <Button
          icon={<TbNewSection />}
          label="Add more education"
          className="bg-gray-700 text-white"
        />
      </section>
    </>
  );
}
