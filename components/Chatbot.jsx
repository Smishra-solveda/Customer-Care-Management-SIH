import Layout from "@/components/Layout";
import Underline from "@/components/Underline";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "./utils/contants";
import { cacheResults } from "./utils/searchSlice";


import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa6";
import TypingAnimation from "@/components/TypingAnimation";
import { useRouter } from "next/router";
import { MdClose } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useRef } from "react";

const Chatbot = () => {
  const router = useRouter();
  const { query } = router.query;

  const [inputValue, setInputValue] = useState(query || "");
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatLog]);

  function handleChatToggle() {
    setIsChatOpen((prevIsChatOpen) => !prevIsChatOpen);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);
    sendMessage(inputValue);
    setInputValue("");
  }


  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[inputValue]) {
        setSuggestions(searchCache[inputValue]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + inputValue);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [inputValue]: json[1],
      })
    );
  };

  return (
    <div
      className={`fixed bottom-8 bg-yellow-800/80 rounded shadow-2xl backdrop-blur-lg z-50 right-8 ${isChatOpen ? "w-1/2" : "w-10"
        }`}
    >
      <div
        className={`bg-yellow-500 shadow-lg text-black p-3 rounded cursor-pointer`}
        onClick={handleChatToggle}
      >
        {isChatOpen ? (
          <MdClose className="hover:scale-105 hover:bg-yellow-800 hover:text-white rounded transition-colors" />
        ) : (
          <FaPhoneAlt className="hover:animate-pulse animate-wiggle" />
        )}
      </div>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-11/12 md:w-5/6 mx-auto p-3 overflow-y-auto">
              {chatLog.map((message, index) => (
                <>
                  <div
                    key={index}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"
                      }`}
                  >
                    <div
                      className={`${message.type === "user"
                          ? "bg-yellow-200/70"
                          : "bg-yellow-100"
                        } rounded-lg p-3 text-black max-w-sm shadow-lg mt-6`}
                    >
                      {message.message}
                    </div>
                  </div>
                </>
              ))}
              {loading && (
                <div key={chatLog.length} className="flex justify-start">
                  <div className="bg-gray-200 rounded-lg p-3 text-black max-w-sm">
                    <TypingAnimation />
                  </div>
                </div>
              )}
            </div>
            <form
              className="w-11/12 md:w-5/6 mx-auto mt-12 flex-none p-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <input
                  type="text"
                  className="bg-yellow-100 w-full p-2 md:p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-40 flex-grow"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setShowSuggestions(false)}
                />
                <button
                  type="submit"
                  className="bg-yellow-600 hover:scale-105 transition-all hover:shadow-lg text-white px-6 py-4 rounded-lg"
                >
                  <FaPaperPlane className="hover:scale-125 transition" />
                </button>
                {showSuggestions && (
                  <div className="absolute bottom-20 bg-white py-2 px-2 w-11/12 mx-auto shadow-lg rounded-lg border border-gray-100">
                    <ul>
                      {suggestions.map((s) => (
                        <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                          🔍 {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
  async function sendMessage(message) {
    let data = JSON.stringify({
      model: "gpt-3.5-turbo-1106",
      messages: [
        {
          role: "user",
          content: `${message} can you please reply in points only?`,
        },
      ],
      max_tokens: 2048,
      temperature: 0.7,
    });

    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      data: data,
    };

    setLoading(true);

    axios
      .request(config)
      .then((response) => {
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices?.[0].message?.content },
        ]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  return (
    <div
      className={`fixed bottom-8 bg-yellow-800/80 rounded shadow-2xl backdrop-blur-lg z-50 right-8 ${isChatOpen ? "w-1/2" : "w-10"
        }`}
    >
      <div
        className={`bg-yellow-500 shadow-lg text-black p-3 rounded cursor-pointer`}
        onClick={handleChatToggle}
      >
        {isChatOpen ? (
          <MdClose className="hover:scale-105 hover:bg-yellow-800 hover:text-white rounded transition-colors" />
        ) : (
          <FaPhoneAlt className="hover:animate-pulse animate-wiggle" />
        )}
      </div>
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            ref={chatContainerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-h-96 overflow-y-auto"
          >
            <div className="w-11/12 md:w-5/6 mx-auto p-3 overflow-y-auto">
              {chatLog.map((message, index) => (
                <>
                  <div
                    key={index}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"
                      }`}
                  >
                    <div
                      className={`${message.type === "user"
                        ? "bg-yellow-200/70"
                        : "bg-yellow-100"
                        } rounded-lg p-3 text-black max-w-sm shadow-lg mt-6`}
                    >
                      {message.type === "bot" && message.message ? (
                        <ul className="list-disc pl-4">
                          {message.message.split('\n').map((point, pointIndex) => (
                            <li key={pointIndex} className="list-none">{point}</li>
                          ))}
                        </ul>
                      ) : (
                        message.message
                      )}

                    </div>
                  </div>
                </>
              ))}
              {loading && (
                <div key={chatLog.length} className="flex justify-start">
                  <div className="bg-gray-200 rounded-lg p-3 text-black max-w-sm">
                    <TypingAnimation />
                  </div>
                </div>
              )}
            </div>
            <form
              className="w-11/12 md:w-5/6 mx-auto mt-12 flex-none p-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <input
                  type="text"
                  className="bg-yellow-100 w-full p-2 md:p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-40 flex-grow"
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-yellow-600 hover:scale-105 transition-all hover:shadow-lg text-white px-6 py-4 rounded-lg"
                >
                  <FaPaperPlane className="hover:scale-125 transition" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
