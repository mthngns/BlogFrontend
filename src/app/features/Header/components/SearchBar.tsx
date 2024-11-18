"use client";

import { Blog } from "@/app/lib/types";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import ImageWithLoader from "../../BlogList/components/ImageWithLoader";
import Link from "next/link";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const blogs: Blog[] = [
    {
      id: "1",
      title: "The Future of Technology",
      category: "Technology",
      content:
        "In this blog post, we explore the future of technology and its impact on our daily lives. Technology continues to evolve at an unprecedented pace, influencing everything from communication to transportation. With the advent of artificial intelligence, machine learning, and the Internet of Things, we are entering an era where our devices are becoming smarter and more integrated into our lives. The ability to connect and share data in real-time has transformed the way we live and work, making us more efficient but also raising questions about privacy and security.\n\nAs we look ahead, it is crucial to consider how we can harness these advancements while ensuring they benefit humanity as a whole. The challenge lies not only in adopting new technologies but also in addressing the ethical implications they bring. By fostering a responsible approach to technological development, we can ensure that the innovations of tomorrow enhance our lives rather than complicate them.",
      authorId: "1",
      createdAt: "2024-01-01T12:00:00Z",
      updatedAt: "2024-01-02T12:00:00Z",
      totalLikes: 50,
      viewCount: 120,
      images: [
        "https://picsum.photos/800/600?random=1",
        "https://picsum.photos/800/600?random=2",
      ],
      comments: [
        {
          id: "11",
          username: "Emily Johnson",
          avatar: "https://randomuser.me/api/portraits/women/3.jpg",
          comment: "Great insights! I completely agree.",
          createdAt: "2024-01-02T12:00:00Z",
        },
        {
          id: "12",
          username: "Michael Smith",
          avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          comment: "Looking forward to seeing how this unfolds.",
          createdAt: "2024-01-03T12:00:00Z",
        },
      ],
    },
    {
      id: "2",
      title: "Top 10 Gadgets of 2024",
      category: "Economy",
      content:
        "Check out my list of the top 10 gadgets that you should consider buying this year. These gadgets are not just about being trendy; they offer practical solutions to everyday problems. From smart home devices that help you manage your energy consumption to wearable tech that tracks your health metrics, these gadgets can significantly enhance your quality of life. Additionally, many of these devices integrate seamlessly with one another, allowing for a more cohesive smart home experience.\n\nAs technology continues to advance, staying informed about the latest gadgets can help you make better purchasing decisions and keep you ahead of the curve. Whether you're a tech enthusiast or simply looking to improve your daily routines, these gadgets can provide valuable assistance and convenience.",
      authorId: "1",
      createdAt: "2024-01-04T12:00:00Z",
      updatedAt: "2024-01-05T12:00:00Z",
      totalLikes: 30,
      viewCount: 75,
      images: [
        "https://picsum.photos/800/600?random=3",
        "https://picsum.photos/800/600?random=4",
      ],
      comments: [],
    },
    {
      id: "3",
      category: "Technology",
      title: "Artificial Intelligence: Friend or Foe?",
      content:
        "This post discusses the pros and cons of artificial intelligence. Is AI a tool for human advancement or a threat to our jobs? As we delve into the realm of AI, it’s essential to understand both sides of the argument. On one hand, AI has the potential to revolutionize industries, improve efficiency, and provide solutions to complex problems that were once thought insurmountable.\n\nOn the other hand, there are legitimate concerns about job displacement and ethical considerations surrounding AI decision-making processes. As we move forward, it is crucial to find a balance that allows us to leverage the benefits of AI while addressing the challenges it presents. Ensuring that AI systems are developed responsibly can lead to positive outcomes for society as a whole.",
      authorId: "1",
      createdAt: "2024-01-05T12:00:00Z",
      updatedAt: "2024-01-06T12:00:00Z",
      totalLikes: 70,
      viewCount: 200,
      images: ["https://picsum.photos/800/600?random=5"],
      comments: [
        {
          id: "13",
          username: "John Doe",
          avatar: "https://randomuser.me/api/portraits/men/2.jpg",
          comment: "Interesting perspective! AI has so much potential.",
          createdAt: "2024-01-06T12:00:00Z",
        },
      ],
    },
    {
      id: "4",
      category: "Technology",
      title: "How to Stay Safe Online",
      content:
        "With the increase in online threats, it's essential to stay safe online. Here are some tips to protect yourself from cyber attacks. First, always use strong, unique passwords for your accounts and change them regularly. Secondly, enable two-factor authentication wherever possible to add an extra layer of security.\n\nIt's also important to be cautious about the information you share on social media and to be wary of suspicious links or emails. Regularly updating your software can help protect against vulnerabilities that hackers might exploit. By taking these proactive measures, you can significantly reduce your risk of falling victim to cybercrime.",
      authorId: "1",
      createdAt: "2024-01-07T12:00:00Z",
      updatedAt: "2024-01-08T12:00:00Z",
      totalLikes: 45,
      viewCount: 90,
      images: [
        "https://picsum.photos/800/600?random=6",
        "https://picsum.photos/800/600?random=7",
      ],
      comments: [],
    },
    {
      id: "5",
      category: "Cooking",
      title: "The Art of Cooking",
      content:
        "Cooking is not just about following recipes; it's an art form that allows for creativity and expression. In this blog post, I will share my journey in the culinary world, from my first attempts at baking cookies to creating elaborate dishes that surprise and delight. I believe that anyone can cook; all it takes is practice and a willingness to experiment. One of my favorite memories is making pasta from scratch with my grandmother, who taught me the importance of using fresh ingredients and taking my time in the kitchen.\n\nAs I honed my skills, I discovered the joy of combining flavors and textures. Cooking became a way for me to unwind and connect with others. I love hosting dinner parties and sharing my culinary creations with friends and family. There's something magical about gathering around a table and enjoying a meal together; it's a way to nurture relationships and create lasting memories.",
      authorId: "2",
      createdAt: "2024-01-09T12:00:00Z",
      updatedAt: "2024-01-10T12:00:00Z",
      totalLikes: 80,
      viewCount: 150,
      images: ["https://picsum.photos/800/600?random=8"],
      comments: [],
    },
    {
      id: "6",
      category: "Health",
      title: "10 Healthy Recipes for Busy Weeknights",
      content:
        "In today’s fast-paced world, finding time to cook healthy meals can be a challenge. That's why I've compiled a list of ten easy and nutritious recipes that you can whip up in no time. Each recipe focuses on fresh ingredients and balanced nutrition, perfect for anyone looking to maintain a healthy lifestyle without spending hours in the kitchen. One of my go-to recipes is a quick stir-fry with seasonal vegetables and lean protein. It’s not only delicious but also packed with essential nutrients.\n\nAnother favorite is my one-pan quinoa dish, which is not only easy to make but also makes for fantastic leftovers. Meal prepping on the weekends can also help you stay organized and ensure that you have healthy options available during the week. With a little planning and creativity, healthy eating can be both enjoyable and achievable.",
      authorId: "2",
      createdAt: "2024-01-11T12:00:00Z",
      updatedAt: "2024-01-12T12:00:00Z",
      totalLikes: 60,
      viewCount: 110,
      images: ["https://picsum.photos/800/600?random=9"],
      comments: [
        {
          id: "14",
          username: "Sophia Brown",
          avatar: "https://randomuser.me/api/portraits/women/4.jpg",
          comment: "These recipes are lifesavers! Thank you for sharing!",
          createdAt: "2024-01-12T12:00:00Z",
        },
      ],
    },
    {
      id: "7",
      category: "Cooking",
      title: "Exploring International Cuisine",
      content:
        "Food has the incredible power to bring people together and bridge cultural gaps. In this blog, I will take you on a culinary journey around the world, highlighting various international dishes that I have fallen in love with. From the spicy flavors of Thai cuisine to the rich and comforting Italian pastas, each culture has something unique to offer. One of my favorite experiences was trying authentic street tacos in Mexico, which inspired me to experiment with new flavors in my own kitchen.\n\nAs I explore different cuisines, I strive to incorporate diverse ingredients into my cooking. I also enjoy sharing the stories behind the dishes I prepare, as food often has deep cultural significance. My goal is to inspire my readers to step outside their comfort zones and try cooking dishes from different cultures. After all, the world is a buffet of flavors waiting to be discovered!",
      authorId: "2",
      createdAt: "2024-01-13T12:00:00Z",
      updatedAt: "2024-01-14T12:00:00Z",
      totalLikes: 90,
      viewCount: 180,
      images: ["https://picsum.photos/800/600?random=10"],
      comments: [],
    },
    {
      id: "8",
      category: "Cooking",
      title: "Baking Tips for Beginners",
      content:
        "Baking is one of my greatest passions, and I love sharing tips with others who are just starting. In this post, I’ll discuss essential baking techniques, tools, and ingredients that every beginner should know. From understanding the importance of measuring ingredients accurately to knowing when to use baking powder versus baking soda, there’s a lot to learn. One of my favorite tips is to always read the recipe thoroughly before starting, as it helps to avoid any surprises along the way.\n\nAdditionally, I’ll share my favorite recipes for beginners, including classic chocolate chip cookies and a simple banana bread. Baking can be intimidating at first, but with a little practice and patience, anyone can master the art of baking. I hope to inspire my readers to pick up their mixing bowls and start experimenting in the kitchen!",
      authorId: "2",
      createdAt: "2024-01-15T12:00:00Z",
      updatedAt: "2024-01-16T12:00:00Z",
      totalLikes: 40,
      viewCount: 95,
      images: ["https://picsum.photos/800/600?random=11"],
      comments: [
        {
          id: "1",
          username: "Manuel Beer",
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
          comment: "I love baking! Thanks for the tips!",
          createdAt: "2024-01-16T12:00:00Z",
        },
      ],
    },
    {
      id: "9",
      category: "Cooking",
      title: "The Joy of Food Photography",
      content:
        "Food photography is an art that can elevate your cooking and inspire others to try your recipes. In this blog post, I will share tips for capturing stunning food photos that make your dishes look as delicious as they taste. The key is to use natural lighting and to style your food in an appealing way. A simple bowl of soup can look gourmet with the right presentation and lighting. I encourage my readers to experiment with different angles and backgrounds to find what works best for their style.\n\nAdditionally, I’ll discuss the importance of editing your photos to enhance their colors and textures. With the rise of social media, beautiful food photography can help you gain a following and share your culinary creations with the world. Whether you’re a blogger or simply want to share your meals with friends, these tips will help you take your food photography to the next level.",
      authorId: "2",
      createdAt: "2024-01-17T12:00:00Z",
      updatedAt: "2024-01-18T12:00:00Z",
      totalLikes: 70,
      viewCount: 130,
      images: ["https://picsum.photos/800/600?random=12"],
      comments: [],
    },
    {
      id: "10",
      category: "Cooking",
      title: "My Favorite Kitchen Gadgets",
      content:
        "As a food blogger, I’ve accumulated quite a collection of kitchen gadgets that make cooking easier and more enjoyable. In this post, I’ll share my top five kitchen tools that I can’t live without. From a high-quality chef’s knife to a versatile food processor, these gadgets have transformed my cooking experience. I also believe that having the right tools can make a significant difference in the outcome of your dishes.\n\nI encourage my readers to invest in tools that will save them time and effort in the kitchen. Cooking should be a joyful experience, and having the right gadgets can help achieve that. I hope this post inspires you to explore new kitchen tools and find what works best for your cooking style.",
      authorId: "2",
      createdAt: "2024-01-19T12:00:00Z",
      updatedAt: "2024-01-20T12:00:00Z",
      totalLikes: 55,
      viewCount: 115,
      images: ["https://picsum.photos/800/600?random=13"],
      comments: [],
    },
    {
      id: "11",
      category: "Health",
      title: "Healthy Breakfast Ideas",
      content:
        "Breakfast is often called the most important meal of the day, and for good reason! It sets the tone for your day and provides the energy you need to get started. In this post, I’ll share some of my favorite healthy breakfast ideas that are quick, easy, and delicious. One of my go-to meals is a smoothie bowl topped with fresh fruits and nuts. It’s packed with nutrients and keeps me full for hours.\n\nAnother favorite is overnight oats. Just combine oats, yogurt, and your favorite fruits in a jar, and let them sit overnight. In the morning, you’ll have a ready-to-eat breakfast that’s both nutritious and satisfying. Breakfast doesn’t have to be boring; with a little creativity, you can make it exciting and delicious every day.",
      authorId: "3",
      createdAt: "2024-01-21T12:00:00Z",
      updatedAt: "2024-01-22T12:00:00Z",
      totalLikes: 85,
      viewCount: 200,
      images: ["https://picsum.photos/800/600?random=14"],
      comments: [
        {
          id: "2",
          username: "Tabitha Mertz",
          avatar: "https://randomuser.me/api/portraits/women/2.jpg",
          comment: "I love these ideas! Breakfast is my favorite meal.",
          createdAt: "2024-01-22T12:00:00Z",
        },
      ],
    },
    {
      id: "12",
      category: "Cooking",
      title: "Easy Dinner Recipes",
      content:
        "After a long day, the last thing you want to do is spend hours in the kitchen. That's why I love easy dinner recipes that are both quick to make and satisfying. In this post, I'll share three of my favorite dinners that can be made in 30 minutes or less. One of my all-time favorites is a stir-fry with chicken and vegetables. It’s colorful, healthy, and bursting with flavor!\n\nAnother easy recipe is a creamy pasta dish. Just boil your favorite pasta, toss it with a creamy sauce, and add some fresh spinach and cherry tomatoes. It’s a delicious way to enjoy a comforting meal without spending all night cooking. I believe that dinner should be enjoyable, not stressful, so I hope these recipes inspire you to make something delicious tonight!",
      authorId: "3",
      createdAt: "2024-01-23T12:00:00Z",
      updatedAt: "2024-01-24T12:00:00Z",
      totalLikes: 70,
      viewCount: 175,
      images: ["https://picsum.photos/800/600?random=15"],
      comments: [],
    },
    {
      id: "13",
      category: "Cooking",
      title: "Baking Tips for Beginners",
      content:
        "Baking is a delightful hobby that anyone can enjoy. In this blog post, I’ll share some essential tips for those who are just starting their baking journey. First and foremost, always read the recipe thoroughly before you begin. This will help you avoid any surprises and ensure that you have all the necessary ingredients on hand. One of my favorite beginner recipes is a simple banana bread; it's forgiving and perfect for practicing your skills.\n\nAnother important tip is to measure your ingredients accurately. Baking is a science, and even small discrepancies can affect the final product. Don't hesitate to invest in a good kitchen scale; it can make a significant difference in your baking results. With these tips in hand, you’ll be on your way to creating delicious baked goods!",
      authorId: "3",
      createdAt: "2024-01-25T12:00:00Z",
      updatedAt: "2024-01-26T12:00:00Z",
      totalLikes: 60,
      viewCount: 130,
      images: ["https://picsum.photos/800/600?random=16"],
      comments: [],
    },
    {
      id: "14",
      category: "Cooking",
      title: "Cooking for One: Tips and Tricks",
      content:
        "Cooking for one can sometimes feel like a challenge, but it doesn’t have to be! In this post, I’ll share my top tips for making delicious meals without wasting food. One of my favorite strategies is to prepare larger batches of food and freeze leftovers for future meals. This way, you can enjoy home-cooked meals without the hassle of cooking every single day.\n\nAnother great tip is to plan your meals ahead of time. By creating a weekly menu, you can ensure that you use your ingredients efficiently and avoid last-minute takeout. Cooking for one can be a fun and rewarding experience, and I hope these tips inspire you to enjoy it!",
      authorId: "3",
      createdAt: "2024-01-27T12:00:00Z",
      updatedAt: "2024-01-28T12:00:00Z",
      totalLikes: 40,
      viewCount: 110,
      images: ["https://picsum.photos/800/600?random=17"],
      comments: [],
    },
    {
      id: "15",
      category: "Nature",
      title: "Exploring the Wonders of Nature",
      content:
        "Nature has a unique way of inspiring us and igniting our passion for exploration. In this blog post, I will take you on a journey through some of the most breathtaking natural landscapes I’ve had the privilege to visit. From the towering peaks of the Rocky Mountains to the serene shores of the Pacific Ocean, every location holds a story waiting to be told. I always encourage my readers to step outside and appreciate the beauty that surrounds us, whether it's a nearby park or a distant mountain range.\n\nPhotography plays a vital role in my travels, allowing me to capture the essence of each moment. I’ve learned that having the right gear and techniques can make all the difference in your shots. For those starting in travel photography, my advice is to practice, experiment, and don’t be afraid to get a little creative. Each photo should tell a story, and I hope to inspire others to see the world through their own lenses.",
      authorId: "4",
      createdAt: "2024-01-29T12:00:00Z",
      updatedAt: "2024-01-30T12:00:00Z",
      totalLikes: 30,
      viewCount: 95,
      images: ["https://picsum.photos/800/600?random=18"],
      comments: [],
    },
    {
      id: "16",
      category: "Fashion",
      title: "Top Fashion Trends of 2024",
      content:
        "As we step into 2024, the fashion landscape is buzzing with exciting trends that are taking the industry by storm. From bold colors to vintage-inspired styles, there's something for everyone this year. In this blog post, I'll be sharing my top picks for the must-have pieces that will elevate your wardrobe and help you express your unique style.\n\nOne of the key trends this season is the resurgence of oversized silhouettes. Whether it’s an oversized blazer or baggy jeans, comfort meets style in this trend. Pairing these pieces with fitted tops can create a balanced look that is both chic and comfortable. Additionally, layering is making a comeback, allowing for creative combinations that keep your outfits fresh and versatile.",
      authorId: "5",
      createdAt: "2024-02-02T12:00:00Z",
      updatedAt: "2024-02-03T12:00:00Z",
      totalLikes: 20,
      viewCount: 75,
      images: ["https://picsum.photos/800/600?random=19"],
      comments: [],
    },
    {
      id: "17",
      category: "Health",
      title: "5 Essential Skincare Tips",
      content:
        "Taking care of your skin is essential, and with the right tips, you can achieve a healthy glow. In this blog post, I'll share five essential skincare tips that will help you maintain beautiful skin throughout the year. From hydration to the importance of sunscreen, these tips are crucial for anyone looking to enhance their skincare routine.\n\nFirst and foremost, hydration is key. Drinking plenty of water not only benefits your health but also helps keep your skin plump and radiant. Additionally, investing in a good moisturizer tailored to your skin type can make a significant difference. Don't forget to exfoliate regularly to remove dead skin cells, revealing the fresh skin underneath. Lastly, always apply sunscreen to protect your skin from harmful UV rays.",
      authorId: "5",
      createdAt: "2024-02-05T12:00:00Z",
      updatedAt: "2024-02-06T12:00:00Z",
      totalLikes: 25,
      viewCount: 60,
      images: ["https://picsum.photos/800/600?random=20"],
      comments: [],
    },
    {
      id: "18",
      category: "Life",
      title: "10 Fun Activities to Do with Your Kids",
      content:
        "Finding engaging activities to do with your kids can sometimes be challenging. In this blog post, I'll share ten fun activities that are not only enjoyable but also educational. From DIY crafts to outdoor adventures, these ideas will keep your little ones entertained and learning.\n\nOne great activity is to create a scavenger hunt in your backyard or at a local park. You can prepare a list of items for your kids to find, which encourages exploration and problem-solving. Another idea is to organize a family cooking night where everyone gets to help prepare dinner. This not only teaches valuable skills but also creates wonderful memories together.",
      authorId: "6",
      createdAt: "2024-02-10T12:00:00Z",
      updatedAt: "2024-02-11T12:00:00Z",
      totalLikes: 30,
      viewCount: 90,
      images: ["https://picsum.photos/800/600?random=21"],
      comments: [],
    },
    {
      id: "19",
      category: "Life",
      title: "Tips for Balancing Work and Family Life",
      content:
        "In today's fast-paced world, balancing work and family life can be a daunting task. However, with the right strategies, it's possible to find harmony between your professional and personal responsibilities. In this post, I'll share some of my top tips for achieving a healthy work-life balance.\n\nFirst, setting boundaries is essential. Designate specific work hours and stick to them, allowing yourself time to focus on family without distractions. Additionally, prioritize tasks and learn to say no when necessary. It's okay to ask for help from family members or colleagues. Remember, taking care of yourself is crucial; ensure you allocate time for self-care activities that recharge you.",
      authorId: "6",
      createdAt: "2024-02-12T12:00:00Z",
      updatedAt: "2024-02-13T12:00:00Z",
      totalLikes: 25,
      viewCount: 75,
      images: ["https://picsum.photos/800/600?random=22"],
      comments: [],
    },
    {
      id: "20",
      category: "Life",
      title: "The Importance of Family Traditions",
      content:
        "Family traditions are a wonderful way to create lasting memories and strengthen bonds. In this blog post, I’ll explore the significance of establishing traditions within your family, whether it’s a special holiday ritual or a simple weekly game night.\n\nTraditions provide a sense of belonging and continuity for children, allowing them to feel secure and connected to their family history. They can also foster communication and togetherness, as families come together to celebrate these special moments. Consider incorporating new traditions into your family routine that reflect your values and interests.",
      authorId: "6",
      createdAt: "2024-02-15T12:00:00Z",
      updatedAt: "2024-02-16T12:00:00Z",
      totalLikes: 20,
      viewCount: 80,
      images: ["https://picsum.photos/800/600?random=23"],
      comments: [],
    },
    {
      id: "21",
      category: "Technology",
      title: "Top 5 Gadgets You Need in 2024",
      content:
        "As technology continues to evolve, keeping up with the latest gadgets can be overwhelming. In this post, I'll share my top five must-have gadgets for 2024. From smart home devices to portable chargers, these gadgets will enhance your daily life.\n\nOne of my favorites is the new smart thermostat, which learns your schedule and adjusts the temperature accordingly, saving energy and money. Another essential gadget is a high-quality wireless charger that allows you to power up your devices effortlessly without dealing with tangled cords.",
      authorId: "7",
      createdAt: "2024-02-20T12:00:00Z",
      updatedAt: "2024-02-21T12:00:00Z",
      totalLikes: 50,
      viewCount: 200,
      images: ["https://picsum.photos/800/600?random=24"],
      comments: [
        {
          id: "11",
          username: "Emily Johnson",
          avatar: "https://randomuser.me/api/portraits/women/3.jpg",
          comment: "Great insights! I completely agree.",
          createdAt: "2024-01-02T12:00:00Z",
        },
        {
          id: "12",
          username: "Michael Smith",
          avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          comment: "Looking forward to seeing how this unfolds.",
          createdAt: "2024-01-03T12:00:00Z",
        },
      ],
    },
    {
      id: "22",
      category: "Technology",
      title: "Review: The Latest Smartphone of 2024",
      content:
        "The smartphone industry is constantly changing, with new models being released every year. In this review, I’ll take a deep dive into the latest smartphone of 2024. I’ll discuss its features, performance, and whether it’s worth the investment.\n\nThis year’s model comes with a stunning camera that captures incredible photos in low light, a long-lasting battery, and a sleek design. The interface is user-friendly, making it accessible for everyone. However, the price point is on the higher end, which may be a concern for budget-conscious buyers.",
      authorId: "7",
      createdAt: "2024-02-22T12:00:00Z",
      updatedAt: "2024-02-23T12:00:00Z",
      totalLikes: 40,
      viewCount: 150,
      images: ["https://picsum.photos/800/600?random=25"],
      comments: [
        {
          id: "16",
          username: "Ava Brown",
          avatar: "https://randomuser.me/api/portraits/women/4.jpg",
          comment: "I love this phone! The camera quality is amazing.",
          createdAt: "2024-01-04T12:00:00Z",
        },
        {
          id: "17",
          username: "Liam Johnson",
          avatar: "https://randomuser.me/api/portraits/men/6.jpg",
          comment: "Thanks for the review! It's really helpful.",
          createdAt: "2024-01-05T12:00:00Z",
        },
      ],
    },
    {
      id: "23",
      category: "Technology",
      title: "How to Set Up a Smart Home",
      content:
        "Setting up a smart home can seem daunting, but it’s easier than you think. In this blog post, I’ll guide you through the essential steps to create a smart home environment that enhances convenience and security.\n\nStart by investing in a good smart hub that connects all your devices. From there, you can add smart lights, security cameras, and smart locks that can all be controlled from your smartphone. The key is to choose devices that are compatible with each other to ensure a seamless experience.",
      authorId: "7",
      createdAt: "2024-02-25T12:00:00Z",
      updatedAt: "2024-02-26T12:00:00Z",
      totalLikes: 35,
      viewCount: 120,
      images: ["https://picsum.photos/800/600?random=26"],
      comments: [
        {
          id: "18",
          username: "Sophia Davis",
          avatar: "https://randomuser.me/api/portraits/women/5.jpg",
          comment:
            "This is so helpful! I can't wait to start my smart home project.",
          createdAt: "2024-01-06T12:00:00Z",
        },
        {
          id: "19",
          username: "James Wilson",
          avatar: "https://randomuser.me/api/portraits/men/7.jpg",
          comment: "Great tips! Thanks for sharing.",
          createdAt: "2024-01-07T12:00:00Z",
        },
      ],
    },
    {
      id: "24",
      category: "Technology",
      title: "The Best Laptops for Students in 2024",
      content:
        "As a student, finding the right laptop can make a huge difference in your academic success. In this post, I’ll highlight the best laptops for students in 2024, taking into consideration performance, battery life, and budget.\n\nOne standout model is a lightweight laptop with impressive battery life, perfect for taking to class and studying in coffee shops. Additionally, I'll compare features such as processing speed and storage options to help you make an informed decision.",
      authorId: "7",
      createdAt: "2024-03-01T12:00:00Z",
      updatedAt: "2024-03-02T12:00:00Z",
      totalLikes: 20,
      viewCount: 100,
      images: ["https://picsum.photos/800/600?random=27"],
      comments: [
        {
          id: "20",
          username: "Oliver Martinez",
          avatar: "https://randomuser.me/api/portraits/men/8.jpg",
          comment: "This list is exactly what I needed! Thanks.",
          createdAt: "2024-01-08T12:00:00Z",
        },
        {
          id: "21",
          username: "Isabella Lee",
          avatar: "https://randomuser.me/api/portraits/women/6.jpg",
          comment: "I'm so glad I found this. Very informative!",
          createdAt: "2024-01-09T12:00:00Z",
        },
      ],
    },
    {
      id: "25",
      category: "Technology",
      title: "Must-Have Accessories for Your New Smartphone",
      content:
        "Once you’ve purchased your new smartphone, the next step is to accessorize it! In this blog post, I’ll discuss the must-have accessories that complement your smartphone and enhance its functionality.\n\nFrom durable cases to protect your device to portable power banks for on-the-go charging, these accessories are essential for smartphone users. I’ll also recommend some stylish options that don’t compromise on protection.",
      authorId: "7",
      createdAt: "2024-03-05T12:00:00Z",
      updatedAt: "2024-03-06T12:00:00Z",
      totalLikes: 25,
      viewCount: 80,
      images: ["https://picsum.photos/800/600?random=28"],
      comments: [
        {
          id: "11",
          username: "Emily Johnson",
          avatar: "https://randomuser.me/api/portraits/women/7.jpg",
          comment: "Awesome recommendations! I need to get a new case.",
          createdAt: "2024-01-10T12:00:00Z",
        },
        {
          id: "14",
          username: "Sophia Brown",
          avatar: "https://randomuser.me/api/portraits/men/9.jpg",
          comment: "Thanks for the tips! Very helpful.",
          createdAt: "2024-01-11T12:00:00Z",
        },
      ],
    },
    {
      id: "26",
      category: "Technology",
      title: "The Rise of Electric Vehicles",
      content:
        "Electric vehicles (EVs) are becoming increasingly popular, and for good reason. In this post, I’ll explore the rise of electric vehicles and why they are considered the future of transportation.\n\nWith advancements in battery technology, EVs are more efficient and have longer ranges than ever before. Additionally, they offer a more sustainable option for those looking to reduce their carbon footprint. I’ll discuss some of the top models currently available and their unique features.",
      authorId: "7",
      createdAt: "2024-03-10T12:00:00Z",
      updatedAt: "2024-03-11T12:00:00Z",
      totalLikes: 30,
      viewCount: 150,
      images: ["https://picsum.photos/800/600?random=29"],
      comments: [
        {
          id: "12",
          username: "Michael Smith",
          avatar: "https://randomuser.me/api/portraits/women/8.jpg",
          comment: "I'm excited about the future of EVs! Great article.",
          createdAt: "2024-01-12T12:00:00Z",
        },
        {
          id: "21",
          username: "Isabella Lee",
          avatar: "https://randomuser.me/api/portraits/men/10.jpg",
          comment:
            "Very informative! Can't wait to see how this industry evolves.",
          createdAt: "2024-01-13T12:00:00Z",
        },
      ],
    },
    {
      id: "27",
      category: "Technology",
      title: "The Future of Wearable Technology",
      content:
        "Wearable technology is advancing rapidly, with new devices hitting the market regularly. In this post, I’ll discuss the future of wearable tech and what we can expect to see in the coming years.\n\nFrom fitness trackers that monitor your health metrics to smartwatches that integrate seamlessly with your phone, wearable technology is changing how we interact with the digital world. I’ll also explore the potential for augmented reality glasses and their implications for our daily lives.",
      authorId: "7",
      createdAt: "2024-03-15T12:00:00Z",
      updatedAt: "2024-03-16T12:00:00Z",
      totalLikes: 55,
      viewCount: 250,
      images: ["https://picsum.photos/800/600?random=30"],
      comments: [
        {
          id: "1",
          username: "Manuel Beer",
          avatar: "https://randomuser.me/api/portraits/women/9.jpg",
          comment:
            "This is fascinating! I can’t wait to see what’s next in wearable tech.",
          createdAt: "2024-01-14T12:00:00Z",
        },
        {
          id: "16",
          username: "Ava Brown",
          avatar: "https://randomuser.me/api/portraits/men/11.jpg",
          comment:
            "Great insights! Wearable technology is definitely the future.",
          createdAt: "2024-01-15T12:00:00Z",
        },
      ],
    },
    {
      id: "28",
      category: "Health",
      title: "The Benefits of Regular Exercise",
      content:
        "Regular exercise is crucial for maintaining physical health. It helps to improve cardiovascular fitness, muscle strength, and overall endurance. In this post, I’ll share some effective workout routines and tips to stay motivated.\n\nWhether you prefer running, swimming, or strength training, there’s a form of exercise for everyone. I also discuss the mental health benefits of exercise, including reduced stress and improved mood.",
      authorId: "8",
      createdAt: "2024-03-20T12:00:00Z",
      updatedAt: "2024-03-21T12:00:00Z",
      totalLikes: 45,
      viewCount: 300,
      images: ["https://picsum.photos/800/600?random=31"],
      comments: [],
    },
    {
      id: "29",
      category: "Health",
      title: "Healthy Eating Habits",
      content:
        "Eating healthy is vital for overall well-being. In this post, I’ll cover some essential tips for maintaining a balanced diet, including the importance of fruits and vegetables.\n\nI also share some quick and healthy recipes that are easy to make and delicious. Eating right doesn’t have to be boring or time-consuming!",
      authorId: "8",
      createdAt: "2024-03-22T12:00:00Z",
      updatedAt: "2024-03-23T12:00:00Z",
      totalLikes: 60,
      viewCount: 400,
      images: ["https://picsum.photos/800/600?random=32"],
      comments: [],
    },
    {
      id: "30",
      category: "Health",
      title: "Mindfulness and Its Importance",
      content:
        "Mindfulness is a powerful tool for maintaining mental health. This post discusses various mindfulness techniques, including meditation and deep breathing exercises.\n\nI also explain how practicing mindfulness can lead to better focus, reduced anxiety, and improved overall happiness.",
      authorId: "8",
      createdAt: "2024-03-24T12:00:00Z",
      updatedAt: "2024-03-25T12:00:00Z",
      totalLikes: 30,
      viewCount: 220,
      images: ["https://picsum.photos/800/600?random=33"],
      comments: [],
    },
    {
      id: "31",
      category: "Health",
      title: "Staying Hydrated: Tips and Tricks",
      content:
        "Staying hydrated is essential for optimal health. In this post, I’ll share some tips to help you drink more water throughout the day, including the benefits of hydration on physical performance and skin health.\n\nI also provide a few ideas for infused water recipes to make drinking water more enjoyable.",
      authorId: "8",
      createdAt: "2024-03-26T12:00:00Z",
      updatedAt: "2024-03-27T12:00:00Z",
      totalLikes: 25,
      viewCount: 180,
      images: ["https://picsum.photos/800/600?random=34"],
      comments: [],
    },
    {
      id: "32",
      category: "Life",
      title: "Yoga for Beginners",
      content:
        "Yoga is a fantastic way to improve flexibility and reduce stress. In this post, I’ll guide beginners through basic yoga poses and their benefits.\n\nI’ll also discuss how incorporating yoga into your routine can lead to better physical and mental health.",
      authorId: "8",
      createdAt: "2024-03-28T12:00:00Z",
      updatedAt: "2024-03-29T12:00:00Z",
      totalLikes: 55,
      viewCount: 250,
      images: ["https://picsum.photos/800/600?random=35"],
      comments: [],
    },
    {
      id: "33",
      category: "Health",
      title: "The Importance of Sleep",
      content:
        "Getting enough sleep is crucial for health and well-being. In this post, I’ll explore the effects of sleep deprivation and provide tips for improving sleep quality.\n\nI’ll also discuss how sleep affects physical performance, mental clarity, and overall health.",
      authorId: "8",
      createdAt: "2024-03-30T12:00:00Z",
      updatedAt: "2024-03-31T12:00:00Z",
      totalLikes: 40,
      viewCount: 300,
      images: ["https://picsum.photos/800/600?random=36"],
      comments: [],
    },
    {
      id: "34",
      category: "Health",
      title: "Exploring the Wonders of Machu Picchu",
      content:
        "Machu Picchu is one of the most breathtaking sites in the world. In this post, I share my journey to this ancient Incan city, the views, and the history behind it. The trek was challenging but incredibly rewarding.\n\nI also provide tips for those planning to visit, including the best times to go, what to pack, and how to prepare for the hike.",
      authorId: "9",
      createdAt: "2024-04-01T12:00:00Z",
      updatedAt: "2024-04-02T12:00:00Z",
      totalLikes: 80,
      viewCount: 500,
      images: ["https://picsum.photos/800/600?random=37"],
      comments: [],
    },
    {
      id: "35",
      category: "Nature",
      title: "A Guide to Backpacking Through Europe",
      content:
        "Backpacking through Europe is an adventure that every traveler should experience. In this post, I’ll outline my journey through various countries, the people I met, and the cultures I experienced.\n\nI’ll also share essential tips on budgeting, transportation, and must-see attractions in each country.",
      authorId: "9",
      createdAt: "2024-04-03T12:00:00Z",
      updatedAt: "2024-04-04T12:00:00Z",
      totalLikes: 90,
      viewCount: 600,
      images: ["https://picsum.photos/800/600?random=38"],
      comments: [],
    },
    {
      id: "36",
      category: "Travel",
      title: "My Top 10 Travel Destinations",
      content:
        "Traveling opens your eyes to the beauty of the world. In this post, I’ll share my top 10 travel destinations and why they hold a special place in my heart.\n\nFrom the beaches of Bali to the streets of Paris, I’ve compiled a list that includes some hidden gems and popular hotspots that everyone should visit.",
      authorId: "9",
      createdAt: "2024-04-05T12:00:00Z",
      updatedAt: "2024-04-06T12:00:00Z",
      totalLikes: 70,
      viewCount: 450,
      images: ["https://picsum.photos/800/600?random=39"],
      comments: [],
    },
    {
      id: "37",
      category: "Travel",
      title: "Cultural Experiences in Japan",
      content:
        "Japan is a country rich in culture and tradition. In this post, I’ll recount my experiences while exploring its unique customs, delicious cuisine, and breathtaking landscapes.\n\nI’ll also highlight some cultural tips for travelers to respect and enjoy their time in Japan.",
      authorId: "9",
      createdAt: "2024-04-07T12:00:00Z",
      updatedAt: "2024-04-08T12:00:00Z",
      totalLikes: 100,
      viewCount: 550,
      images: ["https://picsum.photos/800/600?random=40"],
      comments: [],
    },
    {
      id: "38",
      category: "Life",
      title: "Creating a Cozy Living Room",
      content:
        "A cozy living room is essential for creating a warm and inviting atmosphere in your home. In this post, I’ll share tips on choosing the right furniture, colors, and decor to achieve that cozy vibe.\n\nWe’ll explore various styles, from modern minimalism to rustic charm, to help you find the perfect look for your space.",
      authorId: "10",
      createdAt: "2024-04-10T12:00:00Z",
      updatedAt: "2024-04-11T12:00:00Z",
      totalLikes: 45,
      viewCount: 320,
      images: ["https://picsum.photos/800/600?random=41"],
      comments: [],
    },
    {
      id: "39",
      category: "Life",
      title: "DIY Home Decor Projects",
      content:
        "DIY projects are a fantastic way to personalize your space and save money. In this post, I’ll outline some easy home decor projects that you can tackle over a weekend.\n\nFrom creating your own wall art to upcycling old furniture, these projects will add a unique touch to your home while allowing you to express your creativity.",
      authorId: "10",
      createdAt: "2024-04-12T12:00:00Z",
      updatedAt: "2024-04-13T12:00:00Z",
      totalLikes: 25,
      viewCount: 250,
      images: ["https://picsum.photos/800/600?random=42"],
      comments: [],
    },
    {
      id: "40",
      category: "Nature",
      title: "Tips for a Beautiful Garden",
      content:
        "A beautiful garden can enhance your home’s curb appeal and provide a serene space for relaxation. In this post, I’ll share essential tips for creating a thriving garden, from choosing the right plants to proper maintenance techniques.\n\nWe’ll also discuss seasonal planting and how to make the most of your outdoor space, whether it’s large or small.",
      authorId: "10",
      createdAt: "2024-04-14T12:00:00Z",
      updatedAt: "2024-04-15T12:00:00Z",
      totalLikes: 30,
      viewCount: 270,
      images: ["https://picsum.photos/800/600?random=43"],
      comments: [],
    },
  ];

  const filteredData = searchText.length
    ? blogs.filter((blog) => blog.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    : [];

  return (
    <div>
      <form className="flex sm:w-full md:w-fit">
        <label
          htmlFor="blogs-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="w-full relative h-8">
          <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
            <IoMdSearch
              className="text-slate-700 dark:text-slate-300"
              size={18}
            />
          </div>
          <input
            type="blogs-search"
            id="blogs-search"
            className="block w-full h-full ps-9 text-sm text-gray-900 bg-gray-50 dark:bg-slate-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search Blogs..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            required
          />
        </div>
      </form>
      <div className="relative text-slate-700 text-xs dark:text-slate-400 z-50">
        {filteredData.length > 0 && (
          <div className="absolute top-2 left-0 bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-md shadow-lg min-w-full sm:w-80 z-10 max-h-80 overflow-auto">
            <ul className="py-2">
              {filteredData.map((blog: Blog) => (
                <li
                  key={blog.id}
                  className="flex px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer border-b dark:border-slate-700"
                >
                  <Link href={`/blog/${blog.id}`} className="flex items-center gap-x-5">
                    <div
                      className="relative w-12 overflow-hidden bg-emeral-400 p-0"
                      style={{ aspectRatio: "1" }}
                    >
                      <ImageWithLoader
                        src={blog.images[0]}
                        alt={blog.title}
                        fill={true}
                        priority={true}
                        isLoading={blog.images[0] ? false : true}
                      />
                    </div>
                    <div className="h-full flex flex-col justify-evenly">
                      <p className="text-xs dark:text-slate-500">
                        {blog.category}
                      </p>
                      <h2 className="dark:text-white font-bold">
                        {blog.title}
                      </h2>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
