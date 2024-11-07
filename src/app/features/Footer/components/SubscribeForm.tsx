'use client'

import React, { useState } from "react";

const SubscribeForm = () => {

const [isModalOpen,setIsModalOpen] = useState(false)

  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
        type="email"
        name="floating_email"
        id="floating_email"
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
      <button
        className="mt-5 peer-invalid:invisible text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm w-fit px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
        type="submit"
        onClick={()=>setIsModalOpen(true)}
      >
        Subscribe
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-slate-900 rounded-lg p-6 w-11/12 max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You for Subscribing!</h2>
            <p className="mb-4">We appreciate your interest. You will receive our latest updates in your inbox.</p>
            <button
              onClick={()=>setIsModalOpen(false)}
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscribeForm;
