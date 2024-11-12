import React from 'react'

interface SignUpFormProps {
  setIsSignUpFormOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SignUpForm:React.FC<SignUpFormProps> = ({setIsSignUpFormOpen}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center dark:bg-black dark:bg-opacity-50 bg-slate-400 bg-opacity-50 text-slate-700 dark:text-slate-400">
      <div className="bg-slate-100 dark:bg-slate-900 shadow-2xl border border-slate-400/60 dark:border-slate-700 rounded-lg p-6 w-fit px-12 flex flex-col gap-y-3">
        <div className='border-b pb-2 dark:border-slate-700'>
          <h2 className="text-2xl font-bold">Registration Form</h2>
          <p className="text-sm">Fill out the form carefully for registration.</p>
        </div>
        <div className="relative z-0 w-60 group">
          <input
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            type="text"
            name="floating_name"
            id="floating_name"
            placeholder=" "
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

        <div className="relative z-0 w-60 group">
          <input
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer"
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
        </div>
        <div className="relative z-0 w-60 group">
          <input
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            type="password"
            name="floating_password"
            id="floating_password"
            placeholder=" "
            required
            minLength={6}
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter your password *
          </label>
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Password must be at least 6 characters.
          </p>
        </div>
        <div className="relative z-0 w-60 group">
          <input
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            type="password"
            name="floating_confirm_password"
            id="floating_confirm_password"
            placeholder=" "
            required
            minLength={6}
          />
          <label
            htmlFor="floating_confirm_password"
            className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm your password *
          </label>
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Passwords do not match.
          </p>
        </div>
        <div className='flex gap-x-3 mt-10 border-t pt-2 dark:border-slate-700'>
        <button
          onClick={()=>setIsSignUpFormOpen(false)}
          className="text-white w-full bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Create Account
        </button>
        <button
          onClick={()=>setIsSignUpFormOpen(false)}
          className="text-white w-fit bg-red-700 hover:bg-red-800 font-medium rounded-md text-sm px-5 py-2 dark:bg-red-600 dark:hover:bg-red-700"
        >
          Cancel
        </button>
        </div>
        
      </div>
  </div>
  )
}

export default SignUpForm