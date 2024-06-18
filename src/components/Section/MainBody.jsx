import CvForm from "./CvForm.jsx";
import CvBody from "./CvBody.jsx";
import { PersonContext } from "../../Context/PersonContext.jsx";
import { useState } from "react";

function MainBody() {
  const [personInfo, setPersonInfo] = useState({
    profession: "",
    dob: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    address: "",
    about: "",
    education: "",
    experience: "",
    skills: "",
    languages: "",
    interests: "",
    references: "",
    awards: "",
    platforms: "",
  });
  return (
    <>
      <section className="container py-6 grid grid-cols-5 gap-10">
        <PersonContext.Provider value={{ personInfo, setPersonInfo }}>
          <CvForm />
          <CvBody />
        </PersonContext.Provider>
      </section>
    </>
  );
}

export default MainBody;
