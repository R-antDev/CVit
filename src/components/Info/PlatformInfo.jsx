import {useContext} from "react";
import {PersonContext} from "../../Context/PersonContext.jsx";
import {Icon} from "../Utils/TheIcon.jsx";


export function PlatformInfo() {

  const { personInfo } = useContext(PersonContext);

  return (
    <>
      <aside>
        <h1 className={"text-xl font-bold uppercase"}>platform</h1>
        <div className={"py-4 space-y-1 text-sm"}>
          {
            personInfo.platforms.map((platform, index) => (
              <div key={index} className={"flex items-center space-x-2"}>
                <Icon platform={platform.platform} />
                <a href={platform.profile_link()} className={"lowercase text-blue-600"}>{platform.profile_link()}</a>
              </div>
            ))
          }
        </div>
      </aside>
    </>
  );
}
