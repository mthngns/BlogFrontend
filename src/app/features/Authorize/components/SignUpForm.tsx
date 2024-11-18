'use client'

import { User } from '@/app/lib/types';
import { useCreateUserMutation } from '@/redux/features/user/services/user';
import { setUser } from '@/redux/features/user/store/user';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

interface SignUpFormProps {
  setIsSignUpFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ setIsSignUpFormOpen }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [createUser, { isLoading }] = useCreateUserMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== rePassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters!');
      return;
    }

    if (name.length < 3) {
      setErrorMessage('Name must be at least 3 characters!');
      return;
    }

    const newUser: User = {
      id: '',
      name,
      email,
      password,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99)}.jpg`,
      bio: 'Edit your bio.',
      posts: [],
      totalPosts: 0,
      totalLikes: 0,
      followers: 0,
    };

    try {
      const response = await createUser(newUser).unwrap();
      dispatch(setUser(newUser));
      setIsSignUpFormOpen(false);
    } catch (err) {
      setErrorMessage('Error creating user. Please try again.');
      console.error('Error creating user:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center dark:bg-black dark:bg-opacity-50 bg-slate-400 bg-opacity-50 text-slate-700 dark:text-slate-400">
      <div className="bg-slate-100 dark:bg-slate-900 shadow-2xl border border-slate-400/60 dark:border-slate-700 rounded-lg p-6 w-fit px-12 flex flex-col gap-y-3">
        <div className="border-b pb-2 dark:border-slate-700">
          <h2 className="text-2xl font-bold">Registration Form</h2>
          <p className="text-sm">Fill out the form carefully for registration.</p>
        </div>
        
        {/* Name input */}
        <div className="relative z-0 w-60 group">
          <input
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            type="text"
            name="floating_name"
            id="floating_name"
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={3}
          />
          <label
            htmlFor="floating_name"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter your name *
          </label>
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Name must be at least 3 characters.
          </p>
        </div>

        {/* Email input */}
        <div className="relative z-0 w-60 group">
          <input
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            type="email"
            name="floating_email"
            id="floating_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter your email here *
          </label>
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </div>

        {/* Password input */}
        <div className="relative z-0 w-60 group">
          <input
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            type="password"
            name="floating_password"
            id="floating_password"
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter your password *
          </label>
        </div>

        {/* Confirm Password input */}
        <div className="relative z-0 w-60 group">
          <input
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            type="password"
            name="floating_confirm_password"
            id="floating_confirm_password"
            placeholder=" "
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
            minLength={6}
          />
          <label
            htmlFor="floating_confirm_password"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm your password *
          </label>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="text-red-600 text-sm mt-2">{errorMessage}</div>
        )}

        <div className="flex gap-x-3 mt-10 border-t pt-2 dark:border-slate-700">
          <button
            onClick={handleSubmit}
            className="text-white w-full bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
          <button
            onClick={() => setIsSignUpFormOpen(false)}
            className="text-white w-fit bg-red-700 hover:bg-red-800 font-medium rounded-md text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
