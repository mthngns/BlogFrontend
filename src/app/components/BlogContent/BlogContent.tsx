import ImageWithLoader from "@/app/features/BlogList/components/ImageWithLoader";
import React, { useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import { Blog, User } from "@/app/lib/types";
import { MdOutlineCancel, MdOutlineCheck, MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import { getUser } from "@/redux/features/user/store/user";
import { useDeleteBlogMutation, useUpdateBlogMutation } from "@/redux/features/blogs/services/blogs";

interface BlogContentProps {
  blog: Blog;
  author: User;
  refetch:()=>void;
}


const BlogContent: React.FC<BlogContentProps> = ({
  blog: blog,
  author: author,
  refetch:refetch
}) => {

  const createdAt = new Date(blog?.createdAt!).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const updatedAt = new Date(blog?.updatedAt!).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const user: User | null = useSelector(getUser);
  const [deleteBlog] = useDeleteBlogMutation()
  const [updateBlog] = useUpdateBlogMutation()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editedBlog, setEditedBlog] = useState(blog)

  const handleDeletePost = async() => { 
    try {
      await deleteBlog(blog.id)
      .unwrap()
      .then(()=>{
        refetch()
        window.location.href = "/"
      })
    } catch (error) {
      console.error("Silmeye çalışılırken hata:", error);
    }
  }

  const handleUpdatePost = async()=>{
    try {
      await updateBlog({
        ...editedBlog,
        updatedAt:new Date().toISOString()
      }).unwrap()
      .then(()=>{
        refetch()
        setEditMode(false)
      })
    } catch (error) {
      console.error("Güncellemeye çalışılırken hata:", error);
    }
  }

  return (
    <div className="flex flex-col gap-y-0">
      {user && author.id === user.id && !editMode && 
        <div className="flex justify-end gap-x-3">
          <button className="p-2 border dark:border-slate-700 rounded-md hover:bg-blue-200/20"
          onClick={() => {setEditMode(true)}}
          >
            <MdOutlineEdit className="text-blue-600 dark:text-blue-400" size={24} />
          </button>
          <button className="p-2 border dark:border-slate-700 rounded-md hover:bg-red-200/20"
          onClick={() => {setIsDeleteModalOpen(true)}}
          >
            <MdOutlineDeleteForever className="text-red-600" size={24} />
          </button>
        </div>
        }
      {editMode && 
        <div className="flex justify-end gap-x-3">
          <button className="p-2 border dark:border-slate-700 rounded-md hover:bg-blue-200/20"
          onClick={() => {handleUpdatePost()}}
          >
            <MdOutlineCheck className="text-green-600 dark:text-green-400" size={24} />
          </button>
          <button className="p-2 border dark:border-slate-700 rounded-md hover:bg-red-200/20"
          onClick={() => {setEditMode(false)}}
          >
            <MdOutlineCancel className="text-red-600" size={24} />
          </button>
        </div>
      }
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Are you sure you want to delete this post?</h2>
            <div className="flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
                onClick={() => {handleDeletePost()}}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex w-full justify-between py-2 items-end">
        <div className="flex items-center gap-x-2">
          <div className="relative w-10 rounded-full overflow-hidden bg-emeral-400 p-0"
            style={{ aspectRatio: "1" }}>
            <ImageWithLoader
              src={author?.avatar!}
              alt={author?.name!}
              fill={true}
              priority={true}
              isLoading={author?.avatar ? false : true}
            />
          </div>
          <p className="text-xs sm:text-base">{author?.name} / {blog?.category}</p>
        </div>
        <div className="items-end flex flex-col"> 
          <p className="text-xs">Created at : {createdAt} </p>
          <p className="text-xs">Last updated at : {updatedAt} </p>
        </div>
      </div>
      {!editMode && <h1 className="text-base md:text-5xl font-black border-t dark:border-slate-700 py-5">{blog?.title}</h1>}
      {editMode && 
      <input className="text-base md:text-2xl my-5 font-black border dark:border-slate-700 py-5 bg-transparent px-2 dark:bg-slate-800" 
        placeholder="Change Blog Title..."
        value={editedBlog?.title} 
        onChange={(e)=>{setEditedBlog({...editedBlog, title:e.target.value})}}
      />}
      {!editMode && <ImageGallery images={blog?.images} />}
      {editMode &&
        <div className="col-span-full border dark:border-slate-700 rounded-md p-5">
        <label htmlFor="cover-photo" className="block text-sm/6 font-medium">Photo Gallery</label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-slate-900/25 px-6 py-10">
          <div className="text-center">
            <svg className="mx-auto size-12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
            </svg>
            <div className="mt-4 flex text-sm/6">
              <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-semibold">
                <span>Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs/5">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>
      }
      {!editMode && <p className="py-5 sm:text-base text-xs" dangerouslySetInnerHTML={{__html: blog?.content?.replace(/\n/g, "<br />") || "",}}/>}
      {editMode &&
      <textarea className="p-5 sm:text-base text-xs my-5 min-h-96 bg-transparent border dark:border-slate-700 dark:bg-slate-800"
        placeholder="Change Blog Content..."
        value={editedBlog?.content}
        onChange={(e)=>{setEditedBlog({...editedBlog, content:e.target.value})}}
      />
      }
    </div>
  );
};

export default BlogContent;
