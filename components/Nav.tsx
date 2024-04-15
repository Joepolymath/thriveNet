import React from 'react';
import { Bars4Icon } from '@heroicons/react/24/outline';

interface Props {
  navState: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
  isAbsolute: boolean;
}

const Nav = ({ navState, isAbsolute }: Props) => {
  return (
    <div
      className={`top-0 bg-black opacity-60 ${
        isAbsolute ? 'fixed' : 'sticky'
      }  p-2 w-full flex items-center justify-between mb-1`}
    >
      {/* <ArrowUturnLeftIcon className="w-5 h-5 text-red-500" /> */}
      <button
        className="md:hidden"
        onClick={() => navState.setIsOpen(!navState.isOpen)}
      >
        <Bars4Icon className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
};

export default Nav;
