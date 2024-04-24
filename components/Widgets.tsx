'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Widgets = () => {
  return (
    <div className="px-2 mt-2 col-span-2 hidden lg:inline">
      <div className="sticky top-2">
        {/* Search box */}
        {/* <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mb-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </div> */}

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Amite00"
          options={{ height: 1000 }}
        />
      </div>
    </div>
  );
};

export default Widgets;
