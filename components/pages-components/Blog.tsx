"use client";

// library
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { BlogSchema } from "@/helpers";

const Blog = () => {
  const goBack = () => {
    window.history.back();
  };

  const [activeBlog, setActiveBlog] = useState(0);
  const handleActiveBlog = (id: number) => {
    setActiveBlog(id);
  };

  const blogs: BlogSchema[] = [
    {
      id: 0,
      title: "Understanding your community growth at scale",
      des: "My first community failed",
      date_published: "12, September 2025",
      link: "https://link1.blog",
    },
    {
      id: 1,
      title: "Building Responsive frontend experiences",
      des: "the first principte on how x works.",
      date_published: "12, September 2025",
      link: "https://link1.blog",
    },
    {
      id: 2,
      title: "Performance & Polish",
      des: "My first community failed",
      date_published: "12, September 2025",
      link: "https://link1.blog",
    },
    {
      id: 3,
      title: "Finding growwth in Places",
      des: "My first community failed",
      date_published: "12, September 2025",
      link: "https://link1.blog",
    },
  ];

  return (
    <div className="space-y-20">
      <button
        type="button"
        className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center cursor-pointer"
        onClick={goBack}
      >
        <ArrowLeft size={20} className="font-medium" />
      </button>

      <div className="space-y-8">
        {blogs.map((blog, index) => (
          //   <div
          //     key={index}
          //     className={`flex items-center justify-between ${
          //       activeBlog === blog.id ? "bg-secondary" : ""
          //     } px-3`}
          //     onClick={() => handleActiveBlog(blog.id)}
          //   >
          //     <div>
          //       <h3>{blog.title}</h3>
          //       <p className="text-[#D8D8D8]">
          //         {blog.des} ✦ {blog.date_published}
          //       </p>
          //     </div>

          //     {activeBlog === blog.id && (
          //       <Link
          //         href={blog.link}
          //         className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center cursor-pointer"
          //         onClick={goBack}
          //       >
          //         <ArrowUpRight size={20} className="font-medium" />
          //       </Link>
          //     )}
          //   </div>

          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-end md:items-center gap-3 justify-between ${
              activeBlog === blog.id ? "bg-secondary" : ""
            } px-5 py-2 rounded-xl`}
            onClick={() => handleActiveBlog(blog.id)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div>
              <h3>{blog.title}</h3>
              <p className="text-[#D8D8D8]">
                {blog.des} ✦ {blog.date_published}
              </p>
            </div>

            {activeBlog === blog.id && (
              <Link
                href={blog.link}
                className="w-10 h-10 rounded-full 
                border border-border bg-white flex items-center justify-center cursor-pointer order-first md:order-last"
                onClick={goBack}
              >
                <ArrowUpRight size={20} className="font-medium" />
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
