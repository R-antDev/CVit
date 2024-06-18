import { useContext } from "react";
import { PersonContext } from "../../Context/PersonContext.jsx";
import { DateToday } from "../Utils/DateToday.jsx";

export function ProfileInfo() {
  const { personInfo } = useContext(PersonContext);
  return (
    <>
      <aside>
        <h1 className={"text-xl font-bold uppercase"}>Profile</h1>
        <div className={"flex gap-2 border-b py-4"}>
          <div className={"space-y-2 text-sm"}>
            <p className={"capitalize font-bold"}>name</p>
            <p className={"capitalize font-bold"}>birthday</p>
            <p className={"capitalize font-bold"}>national</p>
            <p className={"capitalize font-bold"}>language</p>
          </div>
          <div className={"space-y-2 text-sm"}>
            <p className={"capitalize text-gray-700"}>
              {personInfo.firstName || "John"} {personInfo.lastName || "Doe"}
            </p>
            <p className={"capitalize text-gray-700"}>
              {personInfo.dob || DateToday()}
            </p>
            <p className={"capitalize text-gray-700"}>
              {personInfo.nationality || "Bangladeshi"}
            </p>
            <p className={"capitalize text-gray-700"}>
              {personInfo.languages || "English"}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
