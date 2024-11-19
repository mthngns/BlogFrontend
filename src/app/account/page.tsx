'use client'

import React from 'react'
import { useSelector } from 'react-redux';
import { Blog, User } from '../lib/types';
import { getUser } from '@/redux/features/user/store/user';
import ImageWithLoader from '../features/BlogList/components/ImageWithLoader';
import BlogCard from '../features/BlogList/components/BlogCard';
import { getBlogs } from '@/redux/features/blogs/store/blogs';
import { MdOutlineAdd } from 'react-icons/md';

const Account = () => {
    const user: User | null = useSelector(getUser);
    const allBlogs:Blog[] | null = useSelector(getBlogs);
    const blogs = allBlogs?.filter((blog: Blog) => blog.authorId === user?.id);
    return (
        <div className='flex grow p-4 sm:p-10 md:p-20 mt-10 dark:text-slate-400'>
            {!user && (
                <div>
                    <h1 className='text-3xl font-bold'>You are not logged in</h1>
                    <p className='text-xl'>Please login to see your account</p>
                </div>
            )}
            {user && (
                <div  className="md:flex gap-10 items-center w-full">
                    <div className=' w-full md:w-1/3 self-start md:mb-0 mb-10 p-5 md:h-full  border dark:border-slate-700 rounded-lg flex flex-col gap-y-10'>
                        <div className="relative w-28 rounded-full overflow-hidden bg-emeral-400 p-0  mx-auto" 
                        style={{ aspectRatio: "1" }}>
                            <ImageWithLoader
                                src={user.avatar}
                                alt={user.name}
                                fill={true}
                                priority={true}
                                isLoading={user.avatar ? false : true}
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl text-center w-full font-bold tracking-wider'>{user.name}</h2>
                            <p className='w-full text-center text-sm'>{user.bio}</p>
                        </div>
                        <div className='w-fit flex justify-between gap-x-2 lg:gap-x-5 self-center'>
                            <div className='flex flex-col items-center border dark:border-slate-700 p-1 lg:p-4 rounded-md'>
                                <h2 className='text-3xl font-bold'>{user.totalPosts}</h2>
                                <p className='text-sm'>Posts</p>
                            </div>
                            <div className='flex flex-col items-center border dark:border-slate-700 p-1 lg:p-4 rounded-md'>
                                <h2 className='text-3xl font-bold'>{user.totalLikes}</h2>
                                <p className='text-sm'>Likes</p>
                            </div>
                            <div className='flex flex-col items-center border dark:border-slate-700 p-1 lg:p-4 rounded-md'>
                                <h2 className='text-3xl font-bold'>{user.followers}</h2>
                                <p className='text-sm'>Followers</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-2/3 self-start p-5 h-fit md:h-full  border dark:border-slate-700 rounded-lg flex flex-col gap-y-4'>
                        <div className='flex w-full justify-between items-center border-b pb-2 dark:border-slate-700'>
                            <h2 className=''>Click to edit post</h2>
                            <button className="p-2 flex items-center gap-x-1 w-fit border dark:border-slate-700 rounded-md hover:bg-green-200/20"
                                onClick={() => { window.location.href = "/blogs/newpost" }}
                            >
                                <MdOutlineAdd className="text-green-600" size={24} />
                                <p className='text-xs'>Write new post</p>
                            </button>
                        </div>
                        <div className="flex gap-2 lg:gap-5 overflow-x-auto">
                            {blogs && blogs.map((blog: Blog) => {
                            return <BlogCard key={blog.id} blogData={blog} author={user!} />;
                            })}
                            {!blogs?.length && (
                                <div>
                                    <h2 className='text-3xl text-center w-full font-bold tracking-wider'>No Posts yet</h2>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Account