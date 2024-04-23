import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { communities } from '@/data';
import Nav from './Nav';
interface Props {
  navState: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
const CommunitiesFeed = ({ navState }: Props) => {
  return (
    <div
      className={`col-span-${
        !navState.isOpen ? '1' : '7'
      } lg:col-span-5 border border-x border-gray-100`}
    >
      <Nav navState={navState} isAbsolute={false} />
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="bg-transparent flex-1 outline-none"
        />
      </div>
      <div className="overflow-y-scroll">
        <h2 className="font-bold text-lg m-2">Our Communities</h2>
        <div className="overflow-y-scroll">
          {communities.length > 0 && (
            <div>
              {communities.map((community) => (
                <a key={community.id} href={`/communities/${community.id}`}>
                  <div
                    className="flex items-center space-x-5 p-5 border-y border-gray-100 cursor-pointer"
                    key={community.id}
                  >
                    <div>
                      <img
                        className="w-28 h-28 rounded-xl object-cover"
                        src={community.image}
                        alt="community image"
                      />
                    </div>
                    <div>
                      <p className="font-bold lg:text-lg">{community.name}</p>
                      <p className="text-sm">{community.members} Members</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunitiesFeed;
