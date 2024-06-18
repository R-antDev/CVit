import { FaUserGraduate } from "react-icons/fa";

export function EduInfo() {
  return (
    <>
      <section className={"space-y-4"}>
        <div className={"space-x-2 flex items-center"}>
          <FaUserGraduate className={"text-xl"} />
          <h1 className={"text-xl font-bold uppercase"}>Education</h1>
        </div>
        <div className={"grid grid-cols-2 gap-4"}>
          <div className={"space-y-1"}>
            <h1 className={"font-bold text-md"}>Masters in Computer Science</h1>
            <p className={"capitalize text-gray-700 text-sm"}>
              Oxford University
            </p>
            <p className={"capitalize text-gray-700 text-sm"}>2015 - 2016</p>
          </div>
          <div className={"space-y-1"}>
            <h1 className={"font-bold text-md"}>
              Bachelor in Computer Science
            </h1>
            <p className={"capitalize text-gray-700 text-sm"}>
              Oxford University
            </p>
            <p className={"capitalize text-gray-700 text-sm"}>2012 - 2015</p>
          </div>
          <div className={"space-y-1"}>
            <h1 className={"font-bold text-md"}>Masters in Computer Science</h1>
            <p className={"capitalize text-gray-700 text-sm"}>
              Oxford University
            </p>
            <p className={"capitalize text-gray-700 text-sm"}>2015 - 2016</p>
          </div>
          <div className={"space-y-1"}>
            <h1 className={"font-bold text-md"}>
              Bachelor in Computer Science
            </h1>
            <p className={"capitalize text-gray-700 text-sm"}>
              Oxford University
            </p>
            <p className={"capitalize text-gray-700 text-sm"}>2012 - 2015</p>
          </div>
        </div>
      </section>
    </>
  );
}
