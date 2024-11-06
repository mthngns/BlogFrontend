import React from 'react'

const AuthMenu = () => {
  return (
    <div className='flex w-fit text-xs gap-x-0 font-semibold tracking-wide'>
        <button className='min-w-12'>
            <span className=''>Log In</span>
        </button>
        <button className='min-w-16 border border-slate-700 dark:border-slate-600 px-2 py-1 rounded-md ml-2'>
            <span className=''>Sign Up</span>
        </button>
    </div>
  )
}

export default AuthMenu