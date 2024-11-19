# BlogFrontend

This is a dynamic blog application built with [Next.js](https://nextjs.org), utilizing **RTK Query**, **Redux Persist**, and **TailwindCSS** for state management and styling. The project is designed to provide a seamless blogging experience with features like user authentication, dynamic routing, and comment management.

## Purpose of the Project

This project was developed as part of a technical assignment for the **Liberyus** job application process. It demonstrates key skills in building modern web applications using Next.js, Redux, and TailwindCSS, alongside MockAPI for backend simulation. 

## Login or Sign up

You can sign in use with ALL_USERS end point data or create new account. Thanks for your interest.

## Mock API URL

- **All BLOG POSTS** : (https://6728c1716d5fa4901b6ac77e.mockapi.io/blog/posts)
- **SINGLE BLOG** : (https://6728c1716d5fa4901b6ac77e.mockapi.io/blog/posts/id)
- **ALL USERS** : (https://6728c1716d5fa4901b6ac77e.mockapi.io/blog/authors)

## Features

- 🚀 **Dynamic Routing**: Navigate between blog posts dynamically with `/blogs/:id`.
- ✍️ **Comment System**: Add, delete, and view comments for each blog post.
- 📈 **Real-Time Updates**: Blogs and comments update in real-time using RTK Query.
- 🖊️ **Blog Management**: 
  - Create new blog posts.
  - Edit existing blog content.
  - Delete blogs with a single click.
- 👥 **User Management**:
  - Create new users with profiles.
  - View and manage user details.
- 🎨 **Responsive Design**: Fully responsive and styled with TailwindCSS.
- 🔐 **User Authentication**: Supports user login and session persistence via Redux Persist.
- 📦 **MockAPI Integration**: Uses MockAPI for simulating backend data.

## Tech Stack

- [Next.js 13+ (App Router)](https://nextjs.org)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [TailwindCSS](https://tailwindcss.com/)
- [MockAPI](https://mockapi.io/)

## Getting Started

### Prerequisites

- Node.js (16+)
- npm, yarn, or pnpm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/mthngns/BlogFrontend.git
cd BlogFrontend
npm install
# or
yarn install
# or
pnpm install
