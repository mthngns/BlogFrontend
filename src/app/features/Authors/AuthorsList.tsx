import { User } from '@/app/lib/types'
import React from 'react'
import UserCard from './components/UserCard'

const AuthorsList = () => {
const authors:User[] = [
    {
      "id": "1",
      "name": "Manuel Beer",
      "email": "manuel.beer@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
      "bio": "Tech enthusiast and blogger.",
      "posts": [
        "1",
        "2",
        "3",
        "4"
      ],
      "totalPosts": 4,
      "totalLikes": 120,
      "followers": 50
    },
    {
      "id": "2",
      "name": "Tabitha Mertz",
      "email": "tabitha.mertz@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
      "bio": "Lifestyle and wellness writer.",
      "posts": [
        "5",
        "6",
        "7",
        "8",
        "9",
        "10"
      ],
      "totalPosts": 6,
      "totalLikes": 210,
      "followers": 80
    },
    {
      "id": "3",
      "name": "Jacklyn Mcguire",
      "email": "jacklyn.mcguire@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/3.jpg",
      "bio": "Food blogger and recipe creator.",
      "posts": [
        "11",
        "12",
        "13",
        "14"
      ],
      "totalPosts": 4,
      "totalLikes": 150,
      "followers": 60
    },
    {
      "id": "4",
      "name": "Manuel Lane",
      "email": "manuel.lane@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/men/4.jpg",
      "bio": "Travel and photography blogger.",
      "posts": [
        "15"
      ],
      "totalPosts": 1,
      "totalLikes": 30,
      "followers": 20
    },
    {
      "id": "5",
      "name": "Dena Scott",
      "email": "dena.scott@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/5.jpg",
      "bio": "Fashion and beauty writer.",
      "posts": [
        "16",
        "17"
      ],
      "totalPosts": 2,
      "totalLikes": 45,
      "followers": 25
    },
    {
      "id": "6",
      "name": "Sheri Parker",
      "email": "sheri.parker@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/6.jpg",
      "bio": "Parenting and lifestyle blogger.",
      "posts": [
        "18",
        "19",
        "20"
      ],
      "totalPosts": 3,
      "totalLikes": 75,
      "followers": 35
    },
    {
      "id": "7",
      "name": "Jeremiah Mcbride",
      "email": "jeremiah.mcbride@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/men/7.jpg",
      "bio": "Tech and gadget reviewer.",
      "posts": [
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27"
      ],
      "totalPosts": 7,
      "totalLikes": 300,
      "followers": 100
    },
    {
      "id": "8",
      "name": "Savannah Larson",
      "email": "savannah.larson@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/8.jpg",
      "bio": "Health and fitness enthusiast.",
      "posts": [
        "28",
        "29",
        "30",
        "31",
        "32",
        "33"
      ],
      "totalPosts": 6,
      "totalLikes": 200,
      "followers": 90
    },
    {
      "id": "9",
      "name": "Jessica Martinez",
      "email": "jessicamartinez@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/9.jpg",
      "bio": "Travel and adventure blogger.",
      "posts": [
        "34",
        "35",
        "36",
        "37"
      ],
      "totalPosts": 4,
      "totalLikes": 300,
      "followers": 170
    },
    {
      "id": "10",
      "name": "Dominique Adkins",
      "email": "dominique.adkins@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/10.jpg",
      "bio": "Lifestyle and home decor blogger.",
      "posts": [
        "38",
        "39",
        "40"
      ],
      "totalPosts": 3,
      "totalLikes": 80,
      "followers": 40
    },
    {
      "id": "11",
      "name": "Emily Johnson",
      "email": "emily.johnson@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/11.jpg",
      "bio": "Travel and lifestyle blogger.",
      "posts": [],
      "totalPosts": 0,
      "totalLikes": 0,
      "followers": 0
    },
    {
      "id": "12",
      "name": "Michael Smith",
      "email": "michael.smith@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/men/12.jpg",
      "bio": "Tech reviewer and gadget enthusiast.",
      "posts": [],
      "totalPosts": 0,
      "totalLikes": 0,
      "followers": 0
    },
    {
      "id": "13",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/men/13.jpg",
      "bio": "General lifestyle blogger.",
      "posts": [],
      "totalPosts": 0,
      "totalLikes": 0,
      "followers": 0
    },
    {
      "id": "14",
      "name": "Sophia Brown",
      "email": "sophia.brown@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/14.jpg",
      "bio": "Health and wellness advocate.",
      "posts": [],
      "totalPosts": 0,
      "totalLikes": 0,
      "followers": 0
    },
    {
      "id": "16",
      "name": "Ava Brown",
      "email": "ava.brown@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/16.jpg",
      "bio": "Fashion and beauty blogger.",
      "posts": [],
      "totalPosts": 0,
      "totalLikes": 0,
      "followers": 0
    },
    {
      "id": "17",
      "name": "Liam Johnson",
      "email": "liam.johnson@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/men/17.jpg",
      "bio": "Sports enthusiast and writer.",
      "posts": [],
      "totalPosts": 0,
      "totalLikes": 0,
      "followers": 0
    },
    {
      "id": "18",
      "name": "Sophia Davis",
      "email": "sophia.davis@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/18.jpg",
      "bio": "Parenting and lifestyle blogger.",
      "posts": [],
      "totalPosts": 0,
      "totalLikes": 0,
      "followers": 0
    },
    {
      "id": "19",
      "name": "James Wilson",
      "email": "james.wilson@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/men/19.jpg",
      "bio": "Finance and investment blogger.",
      "posts": [],
      "totalPosts": 0,
      "totalLikes": 0,
      "followers": 0
    },
    {
      "id": "20",
      "name": "Oliver Martinez",
      "email": "oliver.martinez@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/men/20.jpg",
      "bio": "Food and cooking blogger.",
      "posts": [],
      "totalPosts": 0,
      "totalLikes": 0,
      "followers": 0
    },
    {
      "id": "21",
      "name": "Isabella Lee",
      "email": "isabella.lee@example.com",
      "password": "password123",
      "avatar": "https://randomuser.me/api/portraits/women/21.jpg",
      "bio": "Art and culture enthusiast.",
      "posts": [],
      "totalPosts": 0,
      "totalLikes": 0,
      "followers": 0
    }
  ]
  return (
    <div className=' w-11/12 lg:w-5/6 self-center z-20 p-4 sm:p-10 bg-opacity-90 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 sm:mt-[-8rem] md:mt-[-6rem] mb-10'>
        <h2 className=" mb-3 text-slate-700 dark:text-slate-400 text-2xl font-semibold border-b pb-2 border-slate-300 dark:border-slate-700">
          Our Authors ({authors.length})
        </h2>
        <div className="flex gap-x-5 overflow-x-auto w-full text-slate-700 dark:text-slate-400 items-stretch">
            {authors.map((user:User)=>{
                return <UserCard user={user}/>
            })}
        </div>
    </div>

  )
}

export default AuthorsList