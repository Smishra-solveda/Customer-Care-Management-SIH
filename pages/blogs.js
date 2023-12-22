import Layout from '@/components/Layout'
import Underline from '@/components/Underline'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrashAlt } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Blogs = () => {

    const [blogs, setBlogs] = useState([])
    const [expandedBlogs, setExpandedBlogs] = useState([]);

    const toggleExpand = (blogId) => {
        setExpandedBlogs((prevExpandedBlogs) => {
            if (prevExpandedBlogs.includes(blogId)) {
                return prevExpandedBlogs.filter((id) => id !== blogId);
            } else {
                return [...prevExpandedBlogs, blogId];
            }
        });
    };


    function fetchBlogs() {
        axios.get('/api/blogs')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    async function addNotification() {
        const info = `Blog Deleted`;
        await axios.post('/api/notification', { info });
    }

    const notify = () => toast.error('Blog deleted!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    async function handleDelete(blog) {
        const confirmDelete = window.confirm(`Are you sure you want to delete blog ${blog.title}?`);
        if (confirmDelete) {
            const _id = blog._id;
            await axios.delete('/api/blogs?_id=' + _id);
        }
        fetchBlogs();
        notify();
        addNotification();
    }

    return (
        <motion.div
 initial={{ opacity: 0, y: 40 }}
 transition={{ duration: 0.6, delay: 0.1, ease: [0.43, 0.13, 0.23, 0.96]  }}
        viewport={{ once: true }}
    whileInView={{opacity:1, y:0}} className='overflow-scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thumb-rounded'>
            <Head>
                <title>Blogs</title>
            </Head>
            <Layout>
                <h1 className='text-4xl lg:text-5xl pt-6 text-gray-800 font-bold tracking-widest uppercase text-center'>Blogs</h1>
                <Underline />
                <div className='text-center mt-2'>
                    <p className="text-base text-gray-700 md:text-lg text-center">
                        The list of blogs you can reference to and read.
                    </p>
                    <Link href='/addblog' className='hover:underline'>
                        Want to add a blog?
                    </Link>
                </div>


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

                <motion.div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12 w-11/12 mx-auto'>
                    {blogs.map((blog) => (
                        <div key={blog._id} className='flex flex-col text-black hover:text-white text-left md:gap-4 bg-yellow-100 hover:bg-yellow-950/70 transition p-3 group relative rounded-md' onClick={() => toggleExpand(blog._id)}>
                            <h1 className='font-bold text-2xl'>{blog.title}</h1>
                            <p className='text-base font-light group-hover:text-gray-200'>
                                {expandedBlogs.includes(blog._id) ? blog.content : (blog.content.length > 800 ? `${blog.content.substring(0, 800)}...` : blog.content)}
                            </p>
                            <button onClick={() => handleDelete(blog)} className='bg-yellow-100 hover:bg-red-500 transition-colors  max-w-fit p-2 text-xl hover:text-white rounded-md hover:bg-transparent outline outline-1 outline-red-400 text-red-500' >
                                <FaTrashAlt />
                            </button>
                        </div>
                    ))}
                </motion.div>
            </Layout>
        </motion.div>
    )
}

export default Blogs