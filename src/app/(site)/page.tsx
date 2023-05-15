import Image from "next/image";
import chatIcon from "../../../public/icons/chat-icon.svg";
import Auth from "./components/Authentication/Authentication";
import Title from "../components/Title/Title";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 items-center">
      <div className=" bg-white w-96 px-5 py-10 rounded-xl shadow-sm">
        <div className="flex justify-center">
          <Image src={chatIcon} alt="chat app icon" height={70} />
        </div>
        <Auth />
      </div>
    </div>
  );
}
