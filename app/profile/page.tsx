import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import React from 'react';
import ProfileComp from '@/components/Profile';

const Profile = () => {
  return (
    <main className="grid grid-cols-9 mx-auto max-h-screen  overflow-y-scroll lg:max-w-6xl">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <ProfileComp />

      {/* Widgets */}
      <Widgets />
    </main>
  );
};

export default Profile;
