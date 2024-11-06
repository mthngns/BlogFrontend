import React from 'react'
import { MdOutlineManageSearch } from 'react-icons/md'

const MobileMenu = () => {
  return (
    <div className='flex sm:hidden cursor-pointer'>
        <MdOutlineManageSearch size={30}/>
    </div>
  )
}

export default MobileMenu