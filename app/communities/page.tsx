'use client';
import CommunitiesFeed from '@/components/CommunitiesFeed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import React, { useState } from 'react';

const Communities = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <main
      className={`grid grid-cols-${
        isOpen ? '9' : '1'
      } mx-auto max-h-screen  overflow-y-scroll lg:max-w-6xl`}
    >
      {/* Sidebar */}
      {isOpen && <Sidebar />}

      {/* View communities Component */}
      <CommunitiesFeed navState={{ isOpen, setIsOpen }} />

      {/* communities */}
      {isOpen && <Widgets />}
    </main>
  );
};

export default Communities;
