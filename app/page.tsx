'use client';
import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import { posts } from '@/data';
import toast from 'react-hot-toast';
import { useEffect, useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';

export default function Home() {
  useLayoutEffect(() => {
    // redirect('/signin');
    // const user = localStorage.getItem('user') || null;
    // console.log({ user });
    // const x = false;
    // if (!x) {
    // }
  }, []);
  // const loadingToast = toast.loading('Loading');
  // toast.success('Posts Fetched', {
  //   id: loadingToast,
  // });
  return (
    <main className="grid grid-cols-9 mx-auto max-h-screen  overflow-y-scroll lg:max-w-6xl">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </main>
  );
}
