import { FaUserGraduate } from "react-icons/fa";
import {useContext} from "react";
import {PersonContext} from "../../Context/PersonContext.jsx";

export function EduInfo() {

  const { personInfo } = useContext(PersonContext);

  return (
    <>
      <section className={"space-y-4"}>
        <div className={"space-x-2 flex items-center"}>
          <FaUserGraduate className={"text-xl"} />
          <h1 className={"text-xl font-bold uppercase"}>Education</h1>
        </div>
        <div className={"grid grid-cols-2 gap-4"}>
          {
            personInfo.education.map((edu, index) => (
                <div key={index} className={"space-y-1"}>
                  <h1 className={"font-bold text-md"}>{edu.degree || "Your Degree Name"}</h1>
                  <p className={"capitalize text-gray-700 text-sm"}>
                    {edu.institute || "Your Institute Name"}
                  </p>
                  <p className={"capitalize text-gray-700 text-sm"}>
                    {edu.start_year || "Start Year"} - {edu.end_year || "End Year"}
                  </p>
                </div>
            ))
          }
        </div>
      </section>
    </>
  );
}
