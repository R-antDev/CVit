import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";
import { GoCrossReference } from "react-icons/go";

export function ReferenceForm() {
  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <GoCrossReference />
          </span>
          <h1 className="font-bold text-lg">References</h1>
        </div>
        <section className="flex flex-col space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className={"col-span-2"}>
              <Input type="text" placeholder="John" label="Name" />
            </div>
            <Input type="text" placeholder="Project Manager" label="Title" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="email"
              placeholder="someone@example.com"
              label="Email"
            />
            <Input type="number" placeholder="1234567890" label="Phone" />
          </div>
        </section>
        <Button
          icon={<TbNewSection />}
          label="Add more reference"
          className="bg-gray-700 text-white"
        />
      </section>
    </>
  );
}
