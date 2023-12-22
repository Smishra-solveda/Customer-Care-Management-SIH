import Layout from '@/components/Layout'
import Underline from '@/components/Underline'
import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import { FaPaperPlane } from "react-icons/fa6";
import TypingAnimation from '@/components/TypingAnimation'
import { useRouter } from 'next/router'

const GPTSearch = () => {
    const router = useRouter()
    const { query } = router.query

    const [inputValue, setInputValue] = useState(query || '')
    const [chatLog, setChatLog] = useState([])
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: inputValue }])
        sendMessage(inputValue)
        setInputValue('')
    }

    async function sendMessage(message) {
        let data = JSON.stringify({
            "model": "gpt-3.5-turbo-1106",
            "messages": [
                {
                    "role": "user",
                    "content": message,
                }
            ],
            "max_tokens": 2048,
            "temperature": 0.7
        });

        const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.openai.com/v1/chat/completions',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            data: data
        };

        setLoading(true)

        axios.request(config)
            .then((response) => {
                setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices?.[0].message?.content }])
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            });
    }

    return (
        <div className='overflow-scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thumb-rounded'>
            <Head>
                <title>GPT Search</title>
            </Head>
            <Layout>
                <h1 className='text-4xl lg:text-5xl pt-6 text-gray-800 font-bold tracking-widest uppercase text-center'>GPT Search</h1>
                <Underline />
                <p className="text-base text-gray-700 mt-2 md:text-lg text-center">
                    Ask GPT any question and it will answer you.
                </p>
                <div className='w-11/12 md:w-3/4 mx-auto p-3 overflow-y-auto'>
                    {chatLog.map((message, index) => (
                        <>
                            <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`${message.type === "user" ? "bg-yellow-300/70" : "bg-yellow-100"} rounded-lg p-3 text-black max-w-sm shadow-lg mt-6`}>
                                    {message.message}
                                </div>

                            </div>
                        </>
                    ))}
                    {
                        loading &&
                        <div key={chatLog.length} className='flex justify-start'>
                            <div className='bg-gray-200 rounded-lg p-3 text-black max-w-sm'>
                                <TypingAnimation />
                            </div>
                        </div>
                    }
                </div>
                <form className='w-11/12 md:w-5/6 mx-auto mt-12 flex-none p-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                        <input
                            type="text"
                            className="bg-yellow-100 w-full p-2 md:p-3 rounded-lg outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-40 flex-grow"
                            placeholder="Type your message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type='submit' className='bg-yellow-700 hover:scale-105 transition-all hover:shadow-lg text-white px-6 py-4 rounded-lg'><FaPaperPlane className='hover:scale-125 transition' /></button>
                    </div>
                </form>



            </Layout>
        </div>
    )
}

export default GPTSearch