import { MdWorkHistory } from "react-icons/md";
import { PersonContext } from "../../Context/PersonContext.jsx";
import { useContext } from "react";

export function WorkInfo() {

  const { personInfo } = useContext(PersonContext);

  return (
    <>
      <section className={"space-y-4"}>
        <div className={"space-x-2 flex items-center"}>
          <MdWorkHistory className={"text-xl"}/>
          <h1 className={"text-xl font-bold uppercase"}>Experience</h1>
        </div>
        <div className={"grid grid-cols-2 gap-4"}>
          {
            personInfo.work.map((work, index) => (
                <div key={index} className={"space-y-1"}>
                  <h1 className={"font-bold text-md capitalize"}>{work.job_title || "Your Job Title"}</h1>
                  <p className={"capitalize text-gray-700 text-sm"}>{work.company || "Your Company Name"}</p>
                  <p className={"capitalize text-gray-700 text-sm"}>{work.start_date || "Start Date"} - {work.end_date || "End Date"}</p>
                  <p className={"capitalize text-gray-700 text-sm"}>{work.location || "Your Location"}</p>
                </div>
            ))
          }
        </div>
      </section>
    </>
  );
}


