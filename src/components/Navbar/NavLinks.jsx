import Link from "../Utils/Link.jsx";
import { FaGithub } from "react-icons/fa";

function NavLinks() {
  return (
    <>
      <ul className="flex items-center md:gap-6 gap-4">
        <li className="lg:w-36 bg-gray-200 rounded-lg p-2 text-center hover:bg-gray-300">
          <Link href="/edit" className="text-gray-500" text="Edit" />
        </li>
        <li className="bg-gray-700 p-2 rounded-lg text-white hover:bg-gray-800 text-center lg:w-36">
          <Link href="/preview" className="text-white" text="Preview" />
        </li>
        <li>
          <Link
            href="https://github.com/R-antDev"
            className="text-gray-700 hover:text-blue-700 text-2xl"
            icon={<FaGithub />}
          />
        </li>
      </ul>
    </>
  );
}

export default NavLinks;
