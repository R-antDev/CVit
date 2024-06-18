import { MdWorkHistory } from "react-icons/md";
import Input from "../Utils/Input.jsx";
import TextArea from "../Utils/TextArea.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";

export function WorkForm() {
  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <MdWorkHistory />
          </span>
          <h1 className="font-bold text-lg">Work Experience</h1>
        </div>
        <section className="flex flex-col space-y-4">
          <div>
            <Input type="text" placeholder="ABC crop." label="Company" />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Backend Engineer"
              label="Job Title"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input type="date" label="Start Date" value="2020-01-01" />
            <Input type="date" label="End Date" value="2022-01-01" />
          </div>
          <div>
            <TextArea label="Location"></TextArea>
          </div>
        </section>
        <Button
          icon={<TbNewSection />}
          label="Add more experience"
          className="bg-gray-700 text-white"
        />
      </section>
    </>
  );
}
