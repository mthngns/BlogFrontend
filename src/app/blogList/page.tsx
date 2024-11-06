import React from 'react'
const roboto = Red_Hat_Display({subsets:["latin"]});

import { Montserrat, Red_Hat_Display, Roboto, Roboto_Mono } from 'next/font/google'
 
// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
//   display: 'swap',
// })

const BlogList = () => {
  console.log('çalıştım')

  return (
    <div className={roboto.className+' font-semibold'} >blogfront.</div>
  )
}

export default BlogList