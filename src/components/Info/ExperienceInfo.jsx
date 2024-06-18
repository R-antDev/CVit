import { MdWorkHistory } from "react-icons/md";

export function ExperienceInfo() {
  return (
    <>
      <section className={"space-y-4"}>
        <div className={"space-x-2 flex items-center"}>
          <MdWorkHistory className={"text-xl"} />
          <h1 className={"text-xl font-bold uppercase"}>Experience</h1>
        </div>
        <div className={"grid grid-cols-2 gap-4"}>
          <div className={"space-y-1"}>
            <h1 className={"font-bold text-md capitalize"}>Senior Developer</h1>
            <p className={"capitalize text-gray-700 text-sm"}>ABC Corp.</p>
            <p className={"capitalize text-gray-700 text-sm"}>2018 - 2020</p>
          </div>
          <div className={"space-y-1"}>
            <h1 className={"font-bold text-md capitalize"}>Junior Developer</h1>
            <p className={"capitalize text-gray-700 text-sm"}>DEF Corp.</p>
            <p className={"capitalize text-gray-700 text-sm"}>2020 - 2024</p>
          </div>
        </div>
      </section>
    </>
  );
}
