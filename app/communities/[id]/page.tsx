'use client';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import React, { useEffect, useState } from 'react';
import CommunityProfileComponent from '@/components/CommunityProfile';
import { ICommunity } from '@/@types/community.types';
import { communities } from '@/data';

interface Props {
  data: ICommunity | {};
}
const CommunityProfile = ({ params }: { params: { id: string } }) => {
  const [profileData, setProfileData] = useState<ICommunity | {}>({});
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const { id } = params;
    console.log({ pageId: id });
    console.log({ communities });
    const community = communities.find(
      (singleCommunity: ICommunity) => id == singleCommunity.id
    );
    setProfileData(community as ICommunity);
  }, []);

  return (
    <div
      className={`grid grid-cols-${
        isOpen ? '9' : '1'
      } mx-auto max-h-screen  overflow-y-scroll lg:max-w-6xl`}
    >
      {/* sidebar */}
      {isOpen && <Sidebar />}

      {/* profile component */}
      <CommunityProfileComponent
        data={profileData as ICommunity}
        navState={{ isOpen, setIsOpen }}
      />

      {/* widget */}
      {isOpen && <Widgets />}
    </div>
  );
};

export default CommunityProfile;
