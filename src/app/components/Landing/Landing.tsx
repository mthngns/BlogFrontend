import React from 'react'

interface LandingProps {
  video?:boolean
}

const Landing:React.FC<LandingProps> = ({video=true}) => {
  return (
    <div className='flex flex-col px-4 sm:px-0 py-10 overflow-hidden gap-y-10'>
      <div className='flex gap-x-3 items-center cursor-default'>
        <h2 className='text-4xl sm:text-7xl py-3 sm:py-0 font-bold border-r-8 text-slate-700 dark:text-slate-400 border-slate-700 w-fit pr-2'>blogfront.</h2>
        <p className='text-slate-500 text-sm sm:text-lg whitespace-pre-line leading-4 sm:leading-6'>{"Life\nHealth\nEconomy\nTechnology\nAnd More..."}</p>
      </div>
      {video && <video
        className="w-full max-h-96 object-cover sm:block hidden"
        autoPlay
        loop
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
        Your Internet Browser is not supported.
      </video>}
    </div>
  )
}

export default Landing