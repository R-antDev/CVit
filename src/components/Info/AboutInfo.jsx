import { BsPersonCircle } from "react-icons/bs";
import { useContext } from "react";
import { PersonContext } from "../../Context/PersonContext.jsx";

export function AboutInfo() {
  const { personInfo } = useContext(PersonContext);
  return (
    <>
      <section className={"space-y-4"}>
        <div className={"space-x-2 flex items-center"}>
          <BsPersonCircle className={"text-xl"} />
          <h1 className={"text-xl font-bold uppercase"}>About Me</h1>
        </div>
        <div>
          <p className={"text-sm text-gray-700 leading-6"}>
            {personInfo.about ||
              `Driven web developer with expertise in front-end and back-end technologies. Prove track
                        record of delivering high-quality, user-friendly websites. Passionate about
                        continuous
                        learning and driving digital innovation.`}
          </p>
        </div>
      </section>
    </>
  );
}
