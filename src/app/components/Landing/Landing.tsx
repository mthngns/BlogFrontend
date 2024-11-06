import React from 'react'

const Landing = () => {
  return (
    <div className='flex flex-col p-10 h-full overflow-hidden gap-y-10'>
      <div className='flex gap-x-3 items-center cursor-default'>
        <h2 className='text-7xl font-bold border-r-8 text-slate-700 dark:text-slate-400 border-slate-700 w-fit pr-2'>blogfront.</h2>
        <p className='text-slate-500 text-xl whitespace-pre-line leading-6'>{"Life\nHealth\nEconomy\nTechnology\nAnd More..."}</p>
      </div>
      <video
        className="w-full max-h-96 object-cover sm:block hidden"
        autoPlay
        loop
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
        Tarayıcınız bu videoyu desteklemiyor.
      </video>
    </div>
  )
}

export default Landing