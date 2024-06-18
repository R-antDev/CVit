import { PersonForm } from "../Form/PersonForm.jsx";
import { EducationForm } from "../Form/EducationForm.jsx";
import { WorkForm } from "../Form/WorkForm.jsx";
import { SkillForm } from "../Form/SkillForm.jsx";
import { LanguageForm } from "../Form/LanguageForm.jsx";
import { InterestForm } from "../Form/InterestForm.jsx";
import { ReferenceForm } from "../Form/ReferenceForm.jsx";
import { AwardForm } from "../Form/AwardForm.jsx";
import { PlatformForm } from "../Form/PlatformForm.jsx";
import PropTypes from "prop-types";

function CvForm() {
  return (
    <>
      <aside className="space-y-10 col-span-2">
        <PersonForm />
        <EducationForm />
        <WorkForm />
        <SkillForm />
        <LanguageForm />
        <InterestForm />
        <ReferenceForm />
        <AwardForm />
        <PlatformForm />
      </aside>
    </>
  );
}

CvForm.propTypes = {
  profession: PropTypes.string,
  setProfession: PropTypes.func,
};

export default CvForm;
