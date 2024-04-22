'use client';
import { uploadImage } from '@/lib/firebaseUpload';
import {
  MagnifyingGlassCircleIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Tweetbox = () => {
  const [post, setPost] = useState<string>('');
  let user;
  if (typeof window !== 'undefined') {
    // Access localStorage here
    user = JSON.parse(localStorage.getItem('user')!) || {
      message: 'Login Successful',
      status: true,
      data: {
        _id: '66267b86c15cff7dcbcda8c9',
        firstName: 'Joshua',
        lastName: 'Ajagbe',
        email: 'joshuaajagbe96@gmail.com',
        username: 'joepolymath',
        password:
          '$2a$10$Lq1hdijU6JRZTZ8zsmxqtutzfp/uwnxDwUA02QK1pI8aD/hXS5Xja',
        profileImage:
          'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png',
        __v: 0,
      },
    };
  } else {
    user = {
      message: 'Login Successful',
      status: true,
      data: {
        _id: '66267b86c15cff7dcbcda8c9',
        firstName: 'Joshua',
        lastName: 'Ajagbe',
        email: 'joshuaajagbe96@gmail.com',
        username: 'joepolymath',
        password:
          '$2a$10$Lq1hdijU6JRZTZ8zsmxqtutzfp/uwnxDwUA02QK1pI8aD/hXS5Xja',
        profileImage:
          'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png',
        __v: 0,
      },
    };
  }
  const [profileImage, setProfileImage] = useState(user.data.profileImage);

  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageurl = URL.createObjectURL(file);
      setSelectedImageUrl(imageurl);
      setImage(file);
    }
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    console.log('ABOUT TO COMMENCE UPLOAD...');
    e.preventDefault();
    if (image) {
      try {
        console.log('Uploading');
        const url = await uploadImage(image, `postImages/${image.name}`);
        console.log({ url });
        setImageUrl(url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      await handleSubmit();
    }
  };

  useEffect(() => {
    let user;
    try {
      if (typeof window !== 'undefined') {
        user =
          localStorage && JSON.parse(localStorage.getItem('user') as string);
        if (!user) {
          user = {
            message: 'Login Successful',
            status: true,
            data: {
              _id: '661b206b272a6a054864ef9d',
              firstName: 'Joshua',
              lastName: 'Ajagbe',
              email: 'joshuaajagbe96@gmail.com',
              username: 'joepolymath',
              password:
                '$2a$10$Lq1hdijU6JRZTZ8zsmxqtutzfp/uwnxDwUA02QK1pI8aD/hXS5Xja',
              profileImage:
                'https://firebasestorage.googleapis.com/v0/b/thrive-net.appspot.com/o/profileImages%2FWhatsApp%20Image%202024-02-28%20at%207.58.56%20AM.jpeg?alt=media&token=1de34eba-9877-4bf9-984e-3b0d53d761a1',
              __v: 0,
            },
          };
          localStorage.setItem('user', JSON.stringify(user));
        }
      }
    } catch (error) {}
    const userId = user.data._id;
    setUserId(userId);
  }, []);

  useEffect(() => {
    if (imageUrl) {
      (async function () {
        await handleSubmit();
      })();
    }

    return () => {
      setImageUrl(null);
    };
  }, [imageUrl]);

  const handleSubmit = async () => {
    const rawPayload: { text: string; user: string; image?: string } = {
      text: post,
      user: userId,
    };
    if (imageUrl) {
      rawPayload.image = imageUrl;
    }
    console.log({ rawPayload });
    const payload = JSON.stringify(rawPayload);
    fetch('api/posts', {
      method: 'POST',
      body: payload,
    })
      .then((res) => res.json())
      .then((data: any) => {
        console.log({ data });
        if (!data.status) {
          toast(data.message || 'Unable to post content');
          setIsLoading(false);
        } else {
          toast(data.message);
          window.location.reload();
        }
      });
  };

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 mt-4 rounded-full object-cover"
        src={profileImage}
        alt="profile-image"
      />

      <div className="flex flex-1 items-center pl-2">
        <form
          action=""
          className="flex flex-1 flex-col"
          onSubmit={handleUpload}
        >
          <textarea
            name="post"
            id="post"
            placeholder="Update your community"
            className="h-24 outline-none w-full text-xs placeholder:text-xs md:text-xl md:placeholder:text-xl mb-2 p-2 rounded-md"
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          {selectedImageUrl && (
            <div>
              <img
                src={selectedImageUrl}
                alt="selected post image"
                className="w-full object-cover"
              />
            </div>
          )}
          <div className="flex items-center">
            <div className="flex space-x-2 text-red-600 flex-1">
              <label htmlFor="postImage">
                <PhotoIcon className="h-5 w-5 transition-transform duration-150 cursor-pointer ease-out hover:scale-150" />
              </label>
              <input
                type="file"
                name="postImage"
                id="postImage"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <button
              disabled={!post}
              className="bg-red-600 px-5 py-2 text-white rounded-full font-bold disabled:opacity-40"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Tweetbox;
