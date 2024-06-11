import { PersonInfo } from "../Partials/PersonInfo.jsx";
import { EducationInfo } from "../Partials/EducationInfo.jsx";
import { WorkInfo } from "../Partials/WorkInfo.jsx";
import { SkillInfo } from "../Partials/SkillInfo.jsx";
import { LangInfo } from "../Partials/LangInfo.jsx";
import { InterestInfo } from "../Partials/InterestInfo.jsx";
import { RefInfo } from "../Partials/RefInfo.jsx";
import { AwardInfo } from "../Partials/AwardInfo.jsx";
import { PlatformInfo } from "../Partials/PlatformInfo.jsx";

function Aside() {
  return (
    <>
      <aside className="space-y-10">
        <PersonInfo />
        <EducationInfo />
        <WorkInfo />
        <SkillInfo />
        <LangInfo />
        <InterestInfo />
        <RefInfo />
        <AwardInfo />
        <PlatformInfo />
      </aside>
    </>
  );
}

export default Aside;
