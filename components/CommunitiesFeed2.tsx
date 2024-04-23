'use client';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Tweetbox from './Tweetbox';
import Post from './Post';
import { IPost } from '@/@types/post.types';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';

interface Props {
  name: string;
}

const Feed2 = ({ name }: Props) => {
  const [contents, setContents] = useState<IPost[] | null>(null);

  async function getPosts() {
    const baseUrl = window.location.origin;
    const res = await fetch(`${baseUrl}/api/posts`);

    // if (!res.ok) {
    //   throw new Error('Failed to fetch data');
    // }

    return res.json();
  }

  useEffect(() => {
    let data: any;
    (async function () {
      data = await getPosts();
      if (!data.status) {
        toast('Unable to fetch posts');
      } else {
        console.log({ data });
        const filteredData = data.data.filter(
          (content: any) => content.community === name
        );
        console.log({ name });
        console.log({ filteredData });
        setContents(filteredData);
      }
    })();
  }, []);

  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between"></div>

      {/* Tweetbox */}
      <div>
        <Tweetbox name={name} />
      </div>

      {/* Feed */}
      <div>
        {contents &&
          contents.map((post) => <Post key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Feed2;
