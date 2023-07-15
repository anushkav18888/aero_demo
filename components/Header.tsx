import Image from "next/image";
import Link from "next/link";
import Hashlink from "next/link";
import logoDark from "../public/images/logoDark.png";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState } from 'react';





const Header = () => {
  const { data: session } = useSession()
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    // console.log("button clicked")
    setActive(!isActive);
  };






  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 z-50 px-4" style={{ backgroundColor: "#18181B" }}>
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={80} height={80} src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold" >
            <Link href="/" ><li onClick={handleClick} className={`headerLi ${isActive ? 'active:text-secondaryColor' : ''}`} >Home</li></Link>
            <Hashlink href="/#posts"><li className={`headerLi ${isActive ? 'active:text-secondaryColor' : ''}`} >Blogs</li></Hashlink>
            {/* <li className="headerLi">Pages</li> */}
            <Link href="/team"><li className={`headerLi ${isActive ? 'active:text-secondaryColor' : ''}`} >Team</li></Link>
            <Link href="/contact"><li className={`headerLi ${isActive ? 'active:text-secondaryColor' : ''}`}>Contact</li></Link>
            {/* <li className="headerLi">Contact</li> */}
          </ul>
        </div>

        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src={session ? session?.user!.image! : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"}
              alt="logo"
            />
            <p className="text-sm font-medium" style={{ color: "#F3F4F6" }}>{session ? session?.user!.name : "Hello Stranger"}</p>
          </div>
          {
            session ? <button onClick={() => signOut()} style={{ color: "#F3F4F6" }} className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
              Sign Out
            </button> : <button onClick={() => signIn()} style={{ color: "#F3F4F6" }} className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
              Sign In
            </button>
          }


        </div>
      </div>
    </div >
  );
};



export default Header;
