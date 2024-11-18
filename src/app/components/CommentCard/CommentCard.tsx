
import ImageWithLoader from "@/app/features/BlogList/components/ImageWithLoader";
import { Blog, Comments, User } from "@/app/lib/types";
import { useUpdateBlogMutation } from "@/redux/features/blogs/services/blogs";
import { getUser } from "@/redux/features/user/store/user";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";

interface CommentCardProps {
  blog: Blog;
  refetch:()=>void
}

const CommentCard: React.FC<CommentCardProps> = ({ blog,refetch }) => {

    const [newComment, setNewComment] = useState<string>('');
    const [selectedComment, setSelectedComment] = useState<Comments | null>(null);
    const user: User | null = useSelector(getUser);
    const [updateBlog, { isLoading }] = useUpdateBlogMutation();

    const handlePostComment = async () => {
        if (user) {
          try {
            await updateBlog({
              id: blog.id,
              comments: [
                ...blog.comments,
                {
                  id: user.id,
                  username: user.name,
                  avatar: user.avatar,
                  comment: newComment,
                  createdAt: new Date().toISOString(),
                },
              ],
            }).unwrap().then(()=>{
                setNewComment(""); 
                refetch(); 
            })
          } catch (error) {
            console.error("Yorum eklenirken hata:", error);
          }
        }
      };

    const handleDeleteComment = async() => {
        if(user && selectedComment){
            try {
                const updatedComments = blog.comments.filter((comment:Comments)=>comment !== selectedComment);
                await updateBlog({...blog, comments:updatedComments})
                .unwrap()
                .then(()=>{
                    setSelectedComment(null)
                    refetch()
                })
            } catch (error) {
                console.error("Yorum silinirken hata:", error);
            }
        }
    }
  return (
    <>
    <div className="max-h-96 overflow-auto flex flex-col gap-y-2">
      {!isLoading ? blog.comments.map((comment:Comments)=> {
        const commentDate = new Date(comment.createdAt).toLocaleDateString("en-EN", {
            year: "numeric",
            month: "long",
            day: "numeric",
            });
        return (
            <div key={comment.id} className="flex text-sm flex-col gap-y-2 border p-4 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                <div className="flex justify-stretch items-center gap-x-2 border-b pb-2 dark:border-slate-700">
                    <div className="relative w-10 rounded-full overflow-hidden bg-emeral-400 p-0"
                        style={{ aspectRatio: "1" }}>
                        <ImageWithLoader
                            src={comment?.avatar!}
                            alt={comment?.username!}
                            fill={true}
                            priority={true}
                            isLoading={comment?.avatar ? false : true}
                        />
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p>{comment?.username}</p>
                        <p className="">{commentDate}</p>
                    </div>
                    {user && user.id === comment.id && !selectedComment ?
                        <MdDelete onClick={()=>{{
                            setSelectedComment(comment);
                        }}} size={20} className="text-red-600 cursor-pointer"/>
                    :
                    user && comment === selectedComment && selectedComment ?
                        <div className="flex gap-x-2">
                            <button onClick={()=>{handleDeleteComment()}} className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">Delete</button>
                            <button onClick={()=>{setSelectedComment(null)}} className="bg-slate-600 text-white px-2 py-1 rounded hover:bg-slate-700">Cancel</button>
                        </div>
                    :
                    null}
                </div>
                <p>{comment?.comment}</p>
            </div>
        )})
    :
    <Spinner/>
    }
    </div>
    {user ?
    <div className="flex gap-2 mb-4 text-sm">
        <textarea
            className="flex-grow border border-gray-300 rounded p-2 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
            rows={3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
        ></textarea>
        <button
            onClick={()=>{handlePostComment()}}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={!newComment.trim()}
        >
            Post
        </button>
    </div>
    :
    <div className="p-2 border text-xs border-red-500 dark:bg-red-900/10 dark:text-red-200 text-red-600 rounded">
        You must be logged in to post a comment.
    </div>}
    </>
  );
};

export default CommentCard;
