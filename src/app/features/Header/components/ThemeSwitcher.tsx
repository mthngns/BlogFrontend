'use client'

import React from 'react'
import { useTheme } from 'next-themes';
import { MdLightMode } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';


const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()    
  return (
    <div className={'flex justify-center items-center text-xs gap-x-2 min-w-8 rounded-md cursor-pointer'}>
      {theme ==="light" && <MdLightMode className='text-orange-300 h-full w-full p-1' size={16} onClick={() => setTheme('dark')}/>}
      {theme ==="dark" && <FaMoon className='text-sky-100 h-full w-full p-2' size={16} onClick={() => setTheme('light')}/>}
    </div>
  )
}

export default ThemeSwitcher