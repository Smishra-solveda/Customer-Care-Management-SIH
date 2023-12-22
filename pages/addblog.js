import Layout from '@/components/Layout'
import Underline from '@/components/Underline'
import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    async function addNotification() {
        const info = `New Blog uploaded`;
        await axios.post('/api/notification', { info });
    }

    const notify = () => toast.success('Blog uploaded!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const blog = { title, content }
            await axios.post('/api/blogs', blog)
            setTitle('')
            setContent('')
            addNotification();
            notify();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Head>
                <title>Blogs</title>
            </Head>
            <Layout>
                <h1 className='text-4xl lg:text-5xl pt-6 text-gray-800 font-bold tracking-widest uppercase text-center'>Add new blogs</h1>
                <Underline />

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />

                <form
                    className='w-11/12 md:w-5/6 mx-auto mt-12'
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Title"
                        className="w-full p-2 my-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-yellow-600"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Content"
                        className="w-full p-2 my-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-yellow-600"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="w-1/4 p-2 my-2 bg-orange-400 text-white rounded hover:bg-orange-600"
                    >
                        Submit
                    </button>
                </form>
            </Layout>
        </>
    )
}

export default Blogs