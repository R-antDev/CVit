import {PersonInfo} from "../Partials/PersonInfo.jsx";
import {EducationInfo} from "../Partials/EducationInfo.jsx";
import {WorkInfo} from "../Partials/WorkInfo.jsx";
import {SkillInfo} from "../Partials/SkillInfo.jsx";

function Aside() {
    return (
        <>
            <aside className="space-y-10">
                <PersonInfo />
                <EducationInfo />
                <WorkInfo />
                <SkillInfo />
            </aside>
        </>
    );
}

export default Aside;