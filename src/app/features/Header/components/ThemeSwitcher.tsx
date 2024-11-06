'use client'

import React from 'react'
import { useTheme } from 'next-themes';
import { MdLightMode } from 'react-icons/md';
import { FaMoon } from 'react-icons/fa';


const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
  return (
    <div className={'flex justify-center items-center text-xs gap-x-2 min-w-8 rounded-md cursor-pointer'}>
      {theme ==="dark" && <MdLightMode className='text-orange-300' size={20} onClick={() => setTheme('light')}/>}
      {theme ==="light" && <FaMoon className='text-sky-100' size={16} onClick={() => setTheme('dark')}/>}
    </div>
  )
}

export default ThemeSwitcher