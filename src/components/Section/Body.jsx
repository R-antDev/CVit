import Aside from "./Aside.jsx";
import Main from "./Main.jsx";

function Body() {
  return (
    <>
      <section className="container py-6 grid grid-cols-5 gap-10">
        <Aside />
        <Main />
      </section>
    </>
  );
}

export default Body;
