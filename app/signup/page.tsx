'use client';
import React, { SetStateAction, useState } from 'react';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { uploadImage } from '@/lib/firebaseUpload';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { ThreeCircles } from 'react-loader-spinner';

type LoginDataType = {
  username?: string;
  password?: string;
};

const Signin = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUploadLoading, setIsUploadLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setIsUploadLoading(true);
    e.preventDefault();
    if (image) {
      try {
        console.log('Uploading');
        const url = await uploadImage(image, `profileImages/${image.name}`);
        console.log({ url });
        setImageUrl(url);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    console.log('SUBMITTING...');
    console.log({
      PAYLOAD: {
        username,
        password,
        email,
        firstName,
        lastName,
        profileImage: imageUrl,
      },
    });
    const payload = JSON.stringify({
      username,
      password,
      email,
      firstName,
      lastName,
      profileImage: imageUrl,
    });

    fetch('api/users', {
      method: 'POST',
      body: payload,
    })
      .then((res) => res.json())
      .then((data: any) => {
        console.log({ data });
        if (!data.status) {
          toast(data.message || 'Unable to sign up.');
        } else {
          toast(data.message);
          router.push('/signin');
        }
      })
      .catch((e) => {
        console.log({ e });
        toast('Unable to sign up. Try again');
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center lg:bg-login-bg bg-cover">
      <div className="bg-transparent w-full lg:max-w-xl lg:w-[60%] h-fit lg:bg-white rounded-md">
        <div className="flex items-center justify-center">
          <a href="/">
            <Image src={Logo} alt="" width={80} height={80} />
          </a>
        </div>
        <div className="">
          <form className="flex flex-col space-y-5 p-5" onSubmit={handleSubmit}>
            {/* <label htmlFor="username">Username</label> */}
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="block mx-auto bg-transparent p-1 border border-gray-400 rounded-md lg:w-[60%]"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />

            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              className="block mx-auto bg-transparent p-1 border border-gray-400 rounded-md lg:w-[60%]"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />

            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="block mx-auto bg-transparent p-1 border border-gray-400 rounded-md lg:w-[60%]"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="block mx-auto bg-transparent p-1 border border-gray-400 rounded-md lg:w-[60%]"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="block mx-auto bg-transparent p-1 border border-gray-400 rounded-md lg:w-[60%]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            {/* <label htmlFor="profileImage">Profile Image</label> */}
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />
            )}
            <div className="flex items-center justify-center space-x-1">
              <input
                type="file"
                name="profileImage"
                id="profileImage"
                accept="image/*"
                onChange={handleImageChange}
                className=" mx-auto bg-transparent p-1 border border-gray-400 rounded-md w-fit"
              />
              {image &&
                (isUploadLoading ? (
                  <div className="w-full flex items-center justify-center">
                    <ThreeCircles
                      visible={true}
                      height="40"
                      width="40"
                      color="#EF4444"
                      ariaLabel="three-circles-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  </div>
                ) : (
                  <button
                    className="bg-red-500 w-fit px-2 py-2 rounded-md text-white disabled:opacity-40"
                    onClick={handleUpload}
                  >
                    Upload
                  </button>
                ))}
            </div>

            {isLoading ? (
              <div className="w-full flex items-center justify-center">
                <ThreeCircles
                  visible={true}
                  height="40"
                  width="40"
                  color="#EF4444"
                  ariaLabel="three-circles-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <button
                disabled={!username || !password}
                className="bg-red-500 w-fit m-y-5 mx-auto px-5 py-2 rounded-md mb-10 text-white disabled:opacity-40"
                type="submit"
              >
                SignUp
              </button>
            )}
          </form>
          <p className="text-center text-sm mb-5">
            Already have an account? Sign in{' '}
            <a className="text-red-400" href="/signin">
              here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
