import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

import logoDark from "../public/images/logoDark.png";

const Header = () => {
  const { data: session } = useSession();
  const [isActive, setActive] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setActive(!isActive);
  };

  // Function to check if a given path matches the current route
  const isCurrentRoute = (path:any) => {
    const { pathname } = useRouter();
    return pathname === path;
  };

  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 z-50 px-4" style={{ backgroundColor: "#18181B" }}>
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={170} height={170} src={logoDark} alt="logoDark" />
          </div>
        </Link>
        
        <div className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
          <ul className="list-none flex gap-8">
            <li className={`headerLi ${isCurrentRoute('/') ? 'text-secondaryColor' : ''}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`headerLi ${isCurrentRoute('/blogs') ? 'text-secondaryColor' : ''}`}>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className={`headerLi ${isCurrentRoute('/activities') ? 'text-secondaryColor' : ''}`}>
              <Link href="/activities">Activities</Link>
            </li>
            <li className={`headerLi ${isCurrentRoute('/team') ? 'text-secondaryColor' : ''}`}>
              <Link href="/team">Team</Link>
            </li>
            <li className={`headerLi ${isCurrentRoute('https://iitbaero.github.io/') ? 'text-secondaryColor' : ''}`}>
              <Link href="https://iitbaero.github.io/" target="_blank">Damp</Link>
            </li>
            <li className={`headerLi ${isCurrentRoute('/contact') ? 'text-secondaryColor' : ''}`}>
              <Link href="/contact">Contact</Link>
            </li>
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
            session ? <button onClick={() => signOut()} style={{ color: "#F3F4F6" }} className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover.bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
              Sign Out
            </button> : <button onClick={() => signIn()} style={{ color: "#F3F4F6" }} className="uppercase text-sm border-[1px] border-primaryColor hover.borderColor-secondaryColor px-4 py-1 font-semibold hover.text-white rounded-md hover.bg-secondaryColor transition-all duration-300 active.bg-yellow-600">
              Sign In
            </button>
          }
        </div>

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
            <li onClick={handleClick} className={`block my-4 ${isCurrentRoute('/') ? 'active:text-secondaryColor' : ''}`} >
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleClick} className={`block my-4 ${isCurrentRoute('/blogs') ? 'active:text-secondaryColor' : ''}`}>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li onClick={handleClick} className={`block my-4 ${isCurrentRoute('/activities') ? 'active:text-secondaryColor' : ''}`}>
              <Link href="/activities">Activities</Link>
            </li>
            <li onClick={handleClick} className={`block my-4 ${isCurrentRoute('/team') ? 'active:text-secondaryColor' : ''}`}>
              <Link href="/team">Team</Link>
            </li>
            <li onClick={handleClick} className={`block my-4 ${isCurrentRoute('https://iitbaero.github.io/') ? 'active:text-secondaryColor' : ''}`}>
              <Link href="https://iitbaero.github.io/" target="_blank">Damp</Link>
            </li>
            <li onClick={handleClick} className={`block my-4 ${isCurrentRoute('/contact') ? 'active:text-secondaryColor' : ''}`}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
