import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
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
        {/* <SidebarRow Icon={BookmarkIcon} title="Bookmarks" /> */}
        <a href="/signin">
          <SidebarRow Icon={UserIcon} title="SignIn" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
