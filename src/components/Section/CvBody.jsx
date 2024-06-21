import { PersonInfo } from "../Info/PersonInfo.jsx";
import { ProfileInfo } from "../Info/ProfileInfo.jsx";
import { AwardInfo } from "../Info/AwardInfo.jsx";
import { ReferenceInfo } from "../Info/ReferenceInfo.jsx";
import { PlatformInfo } from "../Info/PlatformInfo.jsx";
import { AboutInfo } from "../Info/AboutInfo.jsx";
import { EduInfo } from "../Info/EduInfo.jsx";
import { WorkInfo } from "../Info/WorkInfo.jsx";

function CvBody() {
  return (
    <>
      <section
        className={
          "p-8 hidden md:block border-2 rounded-xl col-span-3 space-y-6"
        }
      >
        <PersonInfo />
        <div className={"grid grid-cols-3 gap-10"}>
          <div className={"col-span-1 space-y-4"}>
            <ProfileInfo />
            <AwardInfo />
            <ReferenceInfo />
            <PlatformInfo />
          </div>
          <div className={"col-span-2 space-y-4"}>
            <AboutInfo />
            <EduInfo />
            <WorkInfo />
          </div>
        </div>
      </section>
    </>
  );
}

export default CvBody;
