import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import axios from 'axios'
import Loader from '@/components/Loader'
import { FaTrashAlt } from 'react-icons/fa'
import { IoSearchOutline } from 'react-icons/io5'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Underline from '@/components/Underline'
import { FaPen } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const Customer = () => {

    const item = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    const variants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    async function deleteNotification() {
        const info = `Customer Deleted`;
        await axios.post('/api/notification', { info });
    }

    function fetchCustomers() {
        setLoading(true);
        axios.get('/api/customer')
            .then(response => {
                setCustomers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchCustomers();
    }, []);

    const notify = () => toast.error('Customer deleted!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    async function deleteCustomer(customer) {
        const confirmDelete = window.confirm(`Are you sure you want to delete customer ${customer.name}?`);
        if (confirmDelete) {
            const _id = customer._id;
            await axios.delete('/api/customer?_id=' + _id);
        }
        fetchCustomers();
        notify();
        deleteNotification();
    }

    function handleSearchInputChange(e) {
        setSearchQuery(e.target.value);
    }

    const filteredData = customers.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.details.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className='overflow-scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thumb-rounded'>
            <Head>
                <title>New Customer</title>
            </Head>
            <Layout>
                <h1 className='text-4xl lg:text-5xl pt-6 text-gray-800 font-bold tracking-widest uppercase text-center'>New Customer</h1>
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
                <Underline />
                <div
                     className='w-11/12 mx-auto'>

                    <motion.div initial="hidden"
                    viewport={{ once: true }}
                    whileInView="show"
                    variants={variants} className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 grid-rows-1'>
                        <Link href="/addcustomer">
                            <motion.div variants={item}  className='text-2xl rounded hover:scale-95 text-center text-white hover:text-black bg-yellow-800 hover:bg-transparent transition px-3 py-5 mx-2 cursor-pointer outline outline-yellow-800'>Add Data Manually</motion.div>
                        </Link>
                        <Link href="/csvimport">
                            <motion.div variants={item}  className='text-2xl rounded hover:scale-95 text-center text-white hover:text-black bg-yellow-800 hover:bg-transparent transition px-3 py-5 mx-2 cursor-pointer outline outline-yellow-800'>Import from CSV</motion.div>
                        </Link>
                        <Link href="/">
                            <motion.div variants={item}  className='text-2xl rounded hover:scale-95 text-center text-white hover:text-black bg-yellow-800 hover:bg-transparent transition px-3 py-5 mx-2 cursor-pointer outline outline-yellow-800'>Extract Data</motion.div>
                        </Link>
                    </motion.div>


                    <h3 className='text-2xl md:text-3xl uppercase pt-5 md:pb-3 mt-4 text-gray-800 text-center font-bold tracking-wider'>Existing Customers</h3>


                    {/* SEARCH */}
                    <div className='relative flex flex-col gap-3 md:flex-row mx-auto justify-center items-center py-4 mt-4 md:mt-0'>
                        <span className='absolute right-8 text-2xl'>
                            <IoSearchOutline />
                        </span>
                        <input
                            type='text'
                            placeholder='Search'
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            className='block w-full p-3 md:p-2 mx-1 text-gray-700 bg-white outline outline-3 outline-gray-200 rounded md:w-90 text-lg dark:outline-gray-600 focus:outline-blue-400 dark:focus:outline-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                        />
                    </div>



                    {customers &&
                        <div className='mt-6 overflow-x-auto'>
                            <div className='absolute left-1/2 mx-auto'>
                                {loading && <Loader />}
                            </div>
                            <table className='w-full table-auto'>

                                <thead>
                                    <tr className='bg-orange-300 font-bold text-center'>
                                        <td className='border border-gray-400 px-4 py-2'>ID</td>
                                        <td className='border border-gray-400 px-4 py-2'>Name</td>
                                        <td className='border border-gray-400 px-4 py-2'>Phone</td>
                                        <td className='border border-gray-400 px-4 py-2'>Last Conversation</td>
                                        <td className='border border-gray-400 px-4 py-2'>Product Details</td>
                                        <td className='border border-gray-400 px-4 py-2'>Last Offers</td>
                                        <td className='border border-gray-400 px-4 py-2'></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredData.map(customer => (
                                        <tr key={customer._id} className='even:bg-orange-100 outline outline-1 backdrop-blur-sm outline-black'>
                                            <td className='px-4 py-2'>{customer._id}</td>
                                            <td className='px-4 py-2'>{customer.name}</td>
                                            <td className='px-4 py-2'>{customer.details}</td>
                                            <td className='px-4 py-2'>{customer.lastConversation}</td>
                                            <td className='px-4 py-2'>{customer.productDetails}</td>
                                            <td className='px-4 py-2'>{customer.lastOffers}</td>
                                            <td className='px-4 py-2 flex gap-2'>
                                                <Link href={`/editcustomer/${customer._id}`}
                                                    className='text-white bg-blue-500 cursor-pointer outline-1 outline rounded p-2 flex justify-center items-center hover:bg-transparent hover:text-blue-500 hover:scale-105 transition-all'
                                                >
                                                    <FaPen />
                                                </Link>
                                                <button
                                                    className='text-white bg-red-500 cursor-pointer outline-1 outline rounded p-2 flex justify-center items-center hover:bg-transparent hover:text-red-500 hover:scale-105 transition-all'
                                                    onClick={() => deleteCustomer(customer)}
                                                >
                                                    <FaTrashAlt />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </Layout>
        </div>
    )
}

export default Customer