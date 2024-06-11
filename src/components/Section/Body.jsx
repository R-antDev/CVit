import Aside from "./Aside.jsx";
import Main from "./Main.jsx";

function Body() {
  return (
    <>
      <section className="container py-6 grid grid-cols-2 gap-6">
        <Aside />
        <Main />
      </section>
    </>
  );
}

export default Body;
