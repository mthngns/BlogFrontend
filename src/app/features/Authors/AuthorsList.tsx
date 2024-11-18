'use client'

import { User } from '@/app/lib/types'
import React from 'react'
import UserCard from './components/UserCard'
import { useGetAllUsersQuery } from '@/redux/features/user/services/user'
import Spinner from '@/app/components/Spinner/Spinner'

const AuthorsList = () => {

const { data: users, isLoading: isUserLoading, } = useGetAllUsersQuery();

if(isUserLoading){
  return (
    <div className=' w-11/12 lg:w-5/6 self-center z-20 p-4 sm:p-10 bg-opacity-90 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 sm:mt-[-8rem] md:mt-[-6rem] mb-10'>
      <Spinner/>
    </div>
  )
}

  return (
    <div className=' w-11/12 lg:w-5/6 self-center z-20 p-4 sm:p-10 bg-opacity-90 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 sm:mt-[-8rem] md:mt-[-6rem] mb-10'>
        <h2 className=" mb-3 text-slate-700 dark:text-slate-400 text-2xl font-semibold border-b pb-2 border-slate-300 dark:border-slate-700">
          Our Authors ({users!.length})
        </h2>
        <div className="flex gap-x-5 overflow-x-auto w-full text-slate-700 dark:text-slate-400 items-stretch">
            {users!.map((user:User)=>{
                return <UserCard user={user}/>
            })}
        </div>
    </div>

  )
}

export default AuthorsList