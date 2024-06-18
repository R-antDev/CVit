import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";
import { FaLanguage } from "react-icons/fa";
import Select from "../Utils/Select.jsx";

export function LanguageForm() {
  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <FaLanguage />
          </span>
          <h1 className="font-bold text-lg">Language</h1>
        </div>
        <section className="flex flex-col space-y-4">
          <div className="grid grid-cols-3 gap-4 my-auto">
            <div className="col-span-2">
              <Input
                type="text"
                placeholder="English"
                label="Language"
                className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <Select
                options={["high", "medium", "low"]}
                label={"Proficiency"}
              />
            </div>
          </div>
        </section>
        <Button
          icon={<TbNewSection />}
          label="Add more language"
          className="bg-gray-700 text-white"
        />
      </section>
    </>
  );
}
