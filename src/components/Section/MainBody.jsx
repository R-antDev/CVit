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
    education: [
      {
        degree: '', institute: '' , start_year: '', end_year: ''
      }
    ],
    work: [
      {
        company: '', job_title: '', start_year: '', end_year: '', location: ''
      }
    ],
    skills: "",
    languages: "",
    interests: "",
    references: [
      {
        name: '',
        title: '',
        email: '',
        phone: ''
      }
    ],
    awards: [
        {
      institution: '',
      award: '',
      year: ''
    }
    ],
    platforms: "",
  });
  return (
    <>
      <section className="container py-6 md:grid grid-cols-5 gap-10">
        <PersonContext.Provider value={{ personInfo, setPersonInfo }}>
          <CvForm />
          <CvBody />
        </PersonContext.Provider>
      </section>
    </>
  );
}

export default MainBody;
