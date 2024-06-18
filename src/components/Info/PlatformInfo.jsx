import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";

export function PlatformInfo() {
  return (
    <>
      <aside>
        <h1 className={"text-xl font-bold uppercase"}>platform</h1>
        <div className={"py-4 space-y-1 text-sm"}>
          <div className={"flex items-center space-x-2"}>
            <FaGithub />
            <p className={"lowercase text-gray-700"}>github.com/someone</p>
          </div>
          <div className={"flex items-center space-x-2"}>
            <FaLinkedin />
            <p className={"lowercase text-gray-700"}>linkdin.com/someone</p>
          </div>
          <div className={"flex items-center space-x-2"}>
            <SiHackerrank />
            <p className={"lowercase text-gray-700"}>hackerank.com/someone</p>
          </div>
        </div>
      </aside>
    </>
  );
}
