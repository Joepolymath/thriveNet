'use client';
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  HomeIcon,
  UserCircleIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import SidebarRow from './SidebarRow';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [userData, setUserData] = useState<any>(null);
  useEffect(() => {
    let user;
    if (typeof window !== 'undefined') {
      user = JSON.parse(localStorage.getItem('user')!);
      setUserData(user);
    }
  }, []);

  return (
    <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
      <div className="fixed top-2">
        <Image className="h-10 w-10 m-3" alt="logo" src={Logo} />
        <a href="/">
          <SidebarRow Icon={HomeIcon} title="Home" />
        </a>
        <a href="/communities">
          <SidebarRow Icon={HashtagIcon} title="Communities" />
        </a>
        {userData && userData.authenticated !== 'no' && (
          <a href="/profile">
            <SidebarRow Icon={UserCircleIcon} title="Profile" />
          </a>
        )}

        {userData && userData.authenticated === 'no' ? (
          <a href="/signin">
            <SidebarRow Icon={UserIcon} title="SignIn" />
          </a>
        ) : (
          <a href="/signin">
            <SidebarRow Icon={ArrowLeftStartOnRectangleIcon} title="Logout" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
