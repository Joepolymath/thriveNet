'use client';
import React, { useEffect, useState } from 'react';
import { ICommunity } from '@/@types/community.types';
import { posts } from '@/data';
import Post from './Post';
import { ArrowUturnLeftIcon, Bars4Icon } from '@heroicons/react/24/outline';
import Nav from './Nav';
import Feed from './Feed';
import Feed2 from './CommunitiesFeed2';

interface Props {
  data: ICommunity;
  navState: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

const CommunityProfile = ({ data, navState }: Props) => {
  const [communityData, setCommunityData] = useState<ICommunity | null>(null);
  useEffect(() => {
    console.log('LOGGING FROM COMMUNITY PROFILE', { data });
    if (Object.keys(data).length > 0) {
      setCommunityData(data);
    }
  }, [data]);

  return (
    <div
      className={`col-span-${
        !navState.isOpen ? '1' : '7'
      } lg:col-span-5 border border-x border-gray-100`}
    >
      <div>
        <img
          className="w-full h-80 object-cover relative"
          src={data.coverImage}
          alt="cover image"
        />
        <Nav navState={navState} isAbsolute={true} />
        <div className="p-5">
          <h1 className="font-bold text-xl lg:text-2xl">{data.name}</h1>
          <p className="text:md">{data.description}</p>
          <div className="mt-2">
            <p className="text-sm">
              <span className="font-bold">{data.members}</span> Members
            </p>
          </div>
        </div>
      </div>

      <div>
        {/* {posts.length > 0 && (
          <div>
            {posts.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        )} */}
        {communityData && <Feed2 name={communityData.name} />}
      </div>
    </div>
  );
};

export default CommunityProfile;
