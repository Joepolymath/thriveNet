'use client';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userProfile, setUserProfile] = useState<any>(null);
  useEffect(() => {
    let user;
    if (typeof window !== 'undefined') {
      user = JSON.parse(localStorage.getItem('user')!).data;
      setUserProfile(user);
      console.log({ user });
    }
  }, []);

  return (
    <div className="col-span-7 lg:col-span-5 border-x p-5 flex justify-center">
      {userProfile && (
        <div className="">
          <div className="flex items-center justify-center">
            <img
              src={userProfile.profileImage}
              alt=""
              className="rounded-full w-24 h-24"
            />
          </div>
          <div className="w-full mt-5">
            <div className="flex justify-between gap-x-10">
              <p className="font-bold text-sm lg:text-lg">Username</p>
              <p className="flex-1 text-xs lg:text-lg">
                {userProfile.username}
              </p>
            </div>
            <div className="flex justify-between gap-x-10">
              <p className="font-bold text-sm lg:text-lg">First Name</p>
              <p className="flex-1 text-xs lg:text-lg">
                {userProfile.firstName}
              </p>
            </div>
            <div className="flex justify-between gap-x-10">
              <p className="font-bold text-sm lg:text-lg">Last Name</p>
              <p className="flex-1 text-xs lg:text-lg">
                {userProfile.lastName}
              </p>
            </div>
            <div className="flex justify-between gap-x-10">
              <p className="font-bold text-sm lg:text-lg">Email</p>
              <p className="flex-1 text-xs lg:text-lg">{userProfile.email}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
