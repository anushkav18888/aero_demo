import Image from "next/image";
import logoDark from "../public/images/logoDark.png";
import Link from "next/link";

import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsMailbox,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      className="w-full py-10 bg-bgColor text-white/80 px-4"
      style={{ backgroundColor: "#18181B" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src={logoDark} width={80} height={80} alt="logo" />
          <p className="flex items-center text-sm font-titleFont gap-1">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            AEA Council || all rights reserved
          </p>
        </div>

        <div className="flex gap-6">
          <Link href="https://www.instagram.com/aea_iitb" target="_blank">
            <BsInstagram className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          </Link>
          <Link href = "https://www.facebook.com/profile.php?id=100083859086671">
            <BsFacebook className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/aerospace-engineering-association-iit-bombay-9a8052263/"><BsLinkedin className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" /></Link>
          <Link href="mailto:aeacouncil@gmail.com"><BsMailbox className="w-6 h-6 text-white/50 hover:text-white duration-300 cursor-pointer" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
