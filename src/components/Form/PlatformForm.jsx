import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";
import { SiWheniwork } from "react-icons/si";

export function PlatformForm() {
  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <SiWheniwork />
          </span>
          <h1 className="font-bold text-lg">Professional Platforms</h1>
        </div>
        <section className="flex flex-col space-y-4">
          <div>
            <Input type="text" placeholder="antDev" label="Username" />
          </div>
          <div>
            <Input type="text" placeholder="github.com" label="Platform" />
          </div>
        </section>
        <Button
          icon={<TbNewSection />}
          label="Add more platform"
          className="bg-gray-700 text-white"
        />
      </section>
    </>
  );
}
