'use client';
import { IComment, IPost } from '@/@types/post.types';
import { HeartIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import TimeAgo from 'react-timeago';
import { comments as commentsData } from '@/data';

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [liked, setLiked] = useState<boolean>(false);

  useEffect(() => {
    console.log(post.user.profileImage);
    setComments(commentsData);
  }, []);

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
      <div className="flex space-x-3">
        {post.user.profileImage && (
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={post.user.profileImage}
            // src="https://firebasestorage.googleapis.com/v0/b/thrive-net.appspot.com/o/profile-image?alt=media&token=f6f20eb7-2743-4b0e-90d7-8b83412d4078"
            alt="profile image"
          />
        )}
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold text-sm">{post.user?.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @
              {post.user.username &&
                post.user.username.replace(/\s+/g, '').toLowerCase()}{' '}
              •
            </p>
            <TimeAgo className="text-sm text-gray-500" date={post.createdAt} />
          </div>
        </div>
      </div>

      <div>
        <p className="pt-1 text-sm">{post.text}</p>
        {post.image && (
          <img
            src={post.image}
            alt="post image"
            className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
          />
        )}
      </div>

      <div className="flex mt-5  items-center space-x-16 ">
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          {liked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              onClick={() => {
                setLiked(!liked);
              }}
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          ) : (
            <HeartIcon
              className="h-5 w-5"
              onClick={() => {
                setLiked(!liked);
              }}
            />
          )}
        </div>
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatBubbleOvalLeftIcon className="h-5 w-5" />
          <p>{comments.length}</p>
        </div>
      </div>

      {/* comment logic */}
      {/* {comments.length > 0 && (
        <div className="my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-y border-gray-100 p-5">
          {comments.map((comment) => (
            <div key={comment.id} className="relative flex space-x-2">
              <hr className="absolute left-5 top-10 h-8 border-x border-red-400/30" />
              <img
                className="mt-2 h-7 w-7 object-cover rounded-full"
                src={comment.profileImage}
                alt=""
              />
              <div>
                <div className="flex items-center space-x-1">
                  <p className="mr-1 font-bold text-sm">{comment.username}</p>
                  <p className="hidden text-sm text-gray-500 lg:inline">
                    @{comment.username.replace(/\s+/g, '').toLowerCase()} •
                  </p>
                  <TimeAgo
                    className="text-sm text-gray-500"
                    date={comment.createdAt}
                  />
                </div>
                <p className="text-sm">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Post;
