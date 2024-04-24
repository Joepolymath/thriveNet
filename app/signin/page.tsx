'use client';
import React, { SetStateAction, useEffect, useState } from 'react';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { ThreeCircles } from 'react-loader-spinner';
import { seedData } from '@/components/Tweetbox';

type LoginDataType = {
  username?: string;
  password?: string;
};

const Signin = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(seedData));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const payload = {
      username,
      password,
    };
    console.log({ payloadJson: JSON.stringify(payload) });
    fetch('api/users/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data: any) => {
        console.log({ data });
        if (!data.status) {
          toast(data.message);
          setIsLoading(false);
        } else {
          if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(data));
          }
          toast(data.message);
          router.push('/');
        }
      })
      .catch((e) => {
        console.log({ e });
        toast('Unable to Sign in. Try again');
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center lg:bg-login-bg bg-cover">
      <div className="bg-transparent w-full lg:max-w-xl lg:w-[60%] lg:h-fit lg:bg-white  rounded-md">
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
              name="username"
              id="username"
              placeholder="Username"
              className="block mx-auto bg-transparent p-2 border border-gray-400 rounded-md lg:w-[60%]"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="block mx-auto bg-transparent p-2 border border-gray-400 rounded-md lg:w-[60%]"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

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
                Signin
              </button>
            )}
          </form>
          <p className="text-center text-sm mb-5">
            Don't have an account? Sign up{' '}
            <a className="text-red-400" href="/signup">
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
