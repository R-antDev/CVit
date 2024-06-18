import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import { TbNewSection } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";

export function AwardForm() {
  return (
    <>
      <section className="space-y-4">
        <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <GiTrophyCup />
          </span>
          <h1 className="font-bold text-lg">Awards</h1>
        </div>
        <section className="flex flex-col space-y-4">
          <div>
            <Input type="text" placeholder="ABC Contest" label="Institution" />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Best Backend Engineer Award"
              label="Award"
            />
          </div>
          <div>
            <Input type="date" label="Year" value="2023-02-12" />
          </div>
        </section>
        <Button
          icon={<TbNewSection />}
          label="Add more award"
          className="bg-gray-700 text-white"
        />
      </section>
    </>
  );
}
