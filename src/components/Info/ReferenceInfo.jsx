import {useContext} from "react";
import {PersonContext} from "../../Context/PersonContext.jsx";


export function ReferenceInfo() {

  const { personInfo } = useContext(PersonContext);

  return (
    <>
      <aside>
        <h1 className={"text-xl font-bold uppercase"}>References</h1>
        <div className={"border-b py-4 space-y-4"}>
          {
            personInfo.references.map((reference, index) => (
                <div key={ index } className={"space-y-1 text-sm"}>
                  <p className={"capitalize font-bold"}>{ reference.name || "Referencer Name" }</p>
                  <div className={"capitalize text-gray-700"}>{ reference.title || "Referencer Title" }</div>
                  <div className={"flex items-center space-x-2"}>
                    <p className={"capitalize font-bold"}>phone:</p>
                    <p className={"capitalize text-gray-700"}>{ reference.phone || "Referencer Phone" }</p>
                  </div>
                  <div className={"flex items-center space-x-2"}>
                    <p className={"capitalize font-bold"}>email:</p>
                    <p className={"text-gray-700"}>{ reference.email || "Referencer Email" }</p>
                  </div>
                </div>
            ))
          }
        </div>
      </aside>
    </>
  );
}
