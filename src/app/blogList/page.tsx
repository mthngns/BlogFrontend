'use client'

import React, { useEffect, useState } from 'react'

import { Montserrat, Red_Hat_Display, Roboto, Roboto_Mono } from 'next/font/google'
import { useTheme } from 'next-themes';
 

const roboto = Red_Hat_Display({subsets:["latin"]});

const BlogList = () => {
  console.log('çalıştım')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <div className={roboto.className+' flex h-full'}>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}

export default BlogList