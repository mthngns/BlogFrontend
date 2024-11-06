import { Lexend_Peta, Montserrat, Red_Hat_Display } from 'next/font/google';
import React from 'react'
import NavigationList from './components/NavigationList';
import SearchBar from './components/SearchBar';
import AuthMenu from './components/AuthMenu';
import MobileMenu from './components/MobileMenu';
const Header = () => {
  return (
    <div className={`py-2 px-10 flex gap-x-10 items-center justify-between bg-slate-950 dark:bg-slate-950 text-white`}>
        <h1 className={`font-bold text-2xl w-fit`}>blogfront.</h1>
        <NavigationList/>
        <div className='sm:flex hidden md:w-fit sm:w-full justify-end gap-x-5'>
        <SearchBar/>
        <AuthMenu/>
        </div>
        <MobileMenu/>
    </div>
  )
}

export default Header