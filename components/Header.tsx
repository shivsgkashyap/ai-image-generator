import Image from "next/image";
import Link from "next/link";
import icon from "../app/icon.png";

const Header = () => {
  return (
    <header className="flex justify-between p-5 sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 item-center">
        <Image src={icon} width={40} alt="website logo" />

        <div>
          <h1 className="font-bold">
            <span className="text-violet-500">ART</span>-ificial - The AI Image
            Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL·E 2, ChatGPT & Microsoft Azure
          </h2>
        </div>
      </div>

      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          href="https://github.com/shivsgkashyap"
          className="px-2 font-light text-right"
        >
          Support The Art Community
        </Link>
        <Link
          href="https://github.com/shivsgkashyap"
          className="px-2 font-light"
        >
          Github Repo
        </Link>
      </div>
    </header>
  );
};
export default Header;
