import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoMdSearch } from 'react-icons/io'

const SearchBar = () => {
  return (
    
<form className="flex sm:w-full md:w-fit">   
    <label htmlFor="blogs-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="w-full relative h-8">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
        <IoMdSearch className='text-slate-700 dark:text-slate-300' size={18}/>
        </div>
        <input type="blogs-search" id="blogs-search" className="block w-full h-full ps-9 text-sm text-gray-900 bg-gray-50 dark:bg-slate-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search Blogs..." required />
    </div>
</form>

  )
}

export default SearchBar