import { PersonForm } from "../Form/PersonForm.jsx";
import { EducationForm } from "../Form/EducationForm.jsx";
import { WorkForm } from "../Form/WorkForm.jsx";
import { SkillForm } from "../Form/SkillForm.jsx";
import { LanguageForm } from "../Form/LanguageForm.jsx";
import { InterestForm } from "../Form/InterestForm.jsx";
import { ReferenceForm } from "../Form/ReferenceForm.jsx";
import { AwardForm } from "../Form/AwardForm.jsx";
import { PlatformForm } from "../Form/PlatformForm.jsx";
import {useContext} from "react";
import {PersonContext} from "../../Context/PersonContext.jsx";

function CvForm() {

  const { personInfo, setPersonInfo } = useContext(PersonContext);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPersonInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <aside className="space-y-10 col-span-2">
        <PersonForm
            personInfo={personInfo}
            handleOnChange={handleOnChange}
        />
        <EducationForm
            personInfo={personInfo} setPersonInfo={setPersonInfo}
        />
        <WorkForm
            personInfo={personInfo} setPersonInfo={setPersonInfo}
        />
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

export default CvForm;
