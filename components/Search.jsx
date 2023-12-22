import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Underline from "./Underline";
import { AnimatePresence, motion } from "framer-motion";
import { IoMicOutline } from "react-icons/io5";
import { SiOpenai } from "react-icons/si";
import { GrTree } from "react-icons/gr";

function Search() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  function fetchBlogs() {
    axios
      .get("/api/blogs")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  function handleSearchInputChange(e) {
    setSearchQuery(e.target.value);
  }

  const filteredData = blogs
    .filter((data) =>
      data.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 5); // Include only the top 5 blogs

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative flex flex-col gap-3 md:flex-col mx-auto items-center p-14 mt-8 md:mt-0"
      >
        <h2 className="text-4xl block -mb-4 font-bold text-center text-gray-800 capitalize tracking-widest lg:text-5xl">
          SEARCH
        </h2>
        <Underline />
        <p className="text-base text-gray-700 mb-6 md:text-lg text-center">
          Search for relevant blogposts here
        </p>

        <input
          placeholder="Search for blogs here..."
          type="text"
          className="block w-full md:p-4 backdrop-blur-sm text-gray-700 bg-yellow-100/50 outline outline-1 outline-gray-200 rounded-full md:w-90 text-lg dark:outline-gray-600 focus:outline-yellow-300 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </motion.div>

      <div className="flex gap-2 flex-col md:flex-row justify-evenly items-center -mt-2">
        <Link
          href="/"
          className="outline rounded outline-1 flex gap-2 justify-center items-center mt-8 bg-yellow-100 hover:shadow-xl hover:bg-yellow-900 hover:text-white w-1/4 hover:scale-95 transition p-3 font-bold"
        >
          <IoMicOutline />
          Voice Recognition
        </Link>
        <Link
          href="/gptsearch"
          className="outline rounded outline-1 flex gap-2 justify-center items-center mt-8 bg-yellow-100 hover:shadow-xl hover:bg-yellow-900 hover:text-white w-1/4 hover:scale-95 transition p-3 font-bold"
        >
          <SiOpenai />
          GPT Search
        </Link>
        <Link
          href="/decision"
          className="outline rounded outline-1 flex gap-2 justify-center items-center mt-8 bg-yellow-100 hover:shadow-xl hover:bg-yellow-900 hover:text-white w-1/4 hover:scale-95 transition p-3 font-bold"
        >
          <GrTree />
          Decision Data
        </Link>
      </div>
      <AnimatePresence>
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100/90 backdrop-blur-sm border border-yellow-500 p-2 md:p-3 relative w-5/6 md:w-11/12 mx-auto -mt-24 rounded"
          >
            {filteredData.length > 0 ? (
              filteredData.map((blog) => (
                <div
                  key={blog._id}
                  className="flex flex-col items-center justify-center md:flex-row"
                >
                  <div className="flex flex-col w-2/3 text-left md:gap-4 p-3">
                    <h1 className="font-bold text-xl">{blog.title}</h1>
                    <p className="font-semibold text-lg text-gray-500">
                      {blog.content}
                    </p>
                  </div>
                  <div className="md:h-96 w-1 border-s-2 border-gray-400 mx-2"></div>
                  <div className="flex flex-col md:flex-row justify-around items-center w-1/3">
                    <Link
                      href="/gptsearch"
                      onClick={() => {
                        router.push({
                          pathname: "/gptsearch",
                          query: { query: blog.title },
                        });
                      }}
                      className="outline rounded outline-1 flex justify-center items-center mt-8 bg-yellow-100 hover:shadow-xl hover:bg-yellow-900 hover:text-white hover:scale-95 transition p-3 font-bold"
                    >
                      GPT Search
                    </Link>
                    <Link
                      href="/decision"
                      className="outline rounded outline-1 flex justify-center items-center mt-8 bg-yellow-100 hover:shadow-xl hover:bg-yellow-900 hover:text-white hover:scale-95 transition p-3 font-bold"
                    >
                      Decision Data
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="font-bold">No blogs found</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Search;
