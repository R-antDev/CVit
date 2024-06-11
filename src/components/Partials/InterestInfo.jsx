import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";
import { MdInterests } from "react-icons/md";

export function InterestInfo() {
  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <MdInterests />
          </span>
          <h1 className="font-bold text-lg">Interest & Hobbies</h1>
        </div>
        <section className="flex flex-col space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Travelling"
              label="Hobbie"
              className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>
        <Button
          icon={<TbNewSection />}
          label="Add more hobbie"
          className="bg-gray-700 text-white"
        />
      </section>
    </>
  );
}
