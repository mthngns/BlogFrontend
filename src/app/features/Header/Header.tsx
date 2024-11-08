import { Lexend_Peta, Montserrat, Red_Hat_Display } from 'next/font/google';
import React from 'react'
import NavigationList from './components/NavigationList';
import SearchBar from './components/SearchBar';
import AuthMenu from './components/AuthMenu';
import MobileMenu from './components/MobileMenu';
import ThemeSwitcher from './components/ThemeSwitcher';
import Logo from './components/Logo';
const Header = () => {
  return (
    <div className={`py-2 px-4 sm:px-10 h-12 flex gap-x-10 items-center justify-between bg-slate-950 text-white`}>
        <Logo/>
        <NavigationList/>
        <div className='sm:flex hidden md:w-fit sm:w-full justify-end gap-x-5'>
            <SearchBar/>
            <AuthMenu/>
            <ThemeSwitcher/>
        </div>
        <MobileMenu/>
    </div>
  )
}

export default Header