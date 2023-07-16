import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Hashlink from "next/link";
import logoDark from "../public/images/logoDark.png";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
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
        {/* Desktop Menu */}
        <div className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
          <Link href="/" ><li className={`headerLi ${isActive ? 'active:text-secondaryColor' : ''}`} >Home</li></Link>
          <Hashlink href="/#posts"><li className={`headerLi ${isActive ? 'active:text-secondaryColor' : ''}`} >Blogs</li></Hashlink>
          <Link href="/team"><li className={`headerLi ${isActive ? 'active:text-secondaryColor' : ''}`} >Team</li></Link>
          <Link href="/contact"><li className={`headerLi ${isActive ? 'active:text-secondaryColor' : ''}`}>Contact</li></Link>
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

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={handleClick} className="text-white">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black bg-opacity-70 z-50 ${isActive ? 'block' : 'hidden'}`}>
          <ul className="text-white text-center mt-10">
            <Link href="/" ><li onClick={handleClick} className={`block my-4 ${isActive ? 'active:text-secondaryColor' : ''}`} >Home</li></Link>
            <Hashlink href="/#posts"><li className={`block my-4 ${isActive ? 'active:text-secondaryColor' : ''}`} >Blogs</li></Hashlink>
            <Link href="/team"><li className={`block my-4 ${isActive ? 'active:text-secondaryColor' : ''}`} >Team</li></Link>
            <Link href="/contact"><li className={`block my-4 ${isActive ? 'active:text-secondaryColor' : ''}`}>Contact</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
