import { useContext } from "react";
import { PersonContext } from "../../Context/PersonContext.jsx";

export function AwardInfo() {
  const { personInfo } = useContext(PersonContext);

  return (
    <>
      <aside>
        <h1 className={"text-xl font-bold uppercase"}>Awards</h1>
        <div className={"border-b py-4 space-y-4"}>
          {personInfo.awards.map((award, index) => (
            <div key={index} className={"space-y-1"}>
              <h1 className={"font-bold text-md"}>
                {award.award || "Your Award Name"}
              </h1>
              <p className={"capitalize text-gray-700 text-sm"}>
                {award.institution || "Your Institute Name"}
              </p>
              <p className={"capitalize text-gray-700 text-sm"}>
                {award.year || "Year"}
              </p>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
