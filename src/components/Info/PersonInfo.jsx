import { useContext } from "react";
import { PersonContext } from "../../Context/PersonContext.jsx";

export function PersonInfo() {
  const { personInfo } = useContext(PersonContext);
  return (
    <>
      <div className={"grid grid-cols-4 gap-10"}>
        <div className={"col-span-1"}>
          <img
            src={"https://placehold.co/100x120"}
            alt={"user-image"}
            className={"w-full h-full"}
          />
        </div>
        <div className={"col-span-3 space-y-4 flex flex-col justify-center"}>
          <div>
            <h1 className={"text-2xl uppercase"}>
              {personInfo.firstName || "David"}
            </h1>
            <h1 className={"text-2xl font-bold uppercase"}>
              {} {personInfo.lastName || "Smith"}
            </h1>
            <p className={"uppercase text-md"}>
              {personInfo.profession || "Your profession here"}
            </p>
          </div>
          <div className={"flex items-center justify-around bg-gray-900"}>
            <div className={"p-2 space-y-1 place-content-center text-xs"}>
              <h6 className={"text-white font-bold"}>Phone</h6>
              <p className={"text-white"}>
                {" "}
                {personInfo.phone || "+1234567890"}{" "}
              </p>
            </div>
            <div className={"p-2 space-y-1 place-content-center text-xs"}>
              <h6 className={"text-white font-bold"}>Email</h6>
              <p className={"text-white"}>
                {" "}
                {personInfo.email || "example@mail.com"}{" "}
              </p>
            </div>
            <div className={"p-2 space-y-1 place-content-center text-xs"}>
              <h6 className={"text-white font-bold"}>Address</h6>
              <p className={"text-white"}>
                {" "}
                {personInfo.address || "54, Address, State/City"}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
