'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Tweetbox from './Tweetbox';
import Post from './Post';
import { IPost } from '@/@types/post.types';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';

interface Props {
  posts: IPost[];
}

const Feed = () => {
  const [contents, setContents] = useState<IPost[] | null>(null);
  useLayoutEffect(() => {
    // redirect('/signin');
    // const user = localStorage.getItem('user') || null;
    // console.log({ user });
    // const x = false;
    // if (!x) {
    // }
  }, []);

  async function getPosts() {
    const res = await fetch('api/posts');

    // if (!res.ok) {
    //   throw new Error('Failed to fetch data');
    // }

    return res.json();
  }

  useEffect(() => {
    let content: any;
    (async function () {
      content = await getPosts();
      if (!content.status) {
        toast('Unable to fetch posts');
      } else {
        console.log({ content });
        setContents(content.data);
      }
    })();
  }, []);

  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <ArrowPathIcon
          className="h-8 w-8 cursor-pointer text-red-600 mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
          onClick={() => window.location.reload()}
        />
      </div>

      {/* Tweetbox */}
      <div>
        <Tweetbox />
      </div>

      {/* Feed */}
      <div>
        {contents ? (
          contents.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default Feed;
