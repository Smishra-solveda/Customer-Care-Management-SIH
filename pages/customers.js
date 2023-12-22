import Head from "next/head";
import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "@/components/Loader";
import { IoSearchOutline } from "react-icons/io5";
import Underline from "@/components/Underline";

const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

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

    function handleSearchInputChange(e) {
        setSearchQuery(e.target.value);
    }

    const filteredData = customers.filter((data) =>
        data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.details.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Head>
                <title>Customers</title>
            </Head>
            <Layout>
            <h2 className="text-4xl mt-10 font-bold text-center text-gray-800 capitalize tracking-widest lg:text-5xl">
            CUSTOMERS
          </h2>
       <Underline/>


                {/* SEARCH */}
                <div className='relative flex flex-col gap-3 md:flex-row mx-auto justify-center items-center py-4 mt-4 md:mt-0 w-11/12'>
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
                    <div className='mt-6 overflow-x-auto w-11/12 mx-auto'>

                        {/* TABLE */}
                        <table className='w-full table-auto'>
                            <div className='absolute left-1/2 mx-auto z-50'>
                                {loading && <Loader />}
                            </div>
                            <thead>
                                <tr className='bg-orange-300 font-bold text-center'>
                                    <td className='border border-gray-400 px-4 py-2'>ID</td>
                                    <td className='border border-gray-400 px-4 py-2'>Name</td>
                                    <td className='border border-gray-400 px-4 py-2'>Phone number</td>
                                    <td className='border border-gray-400 px-4 py-2'>Last Conversation</td>
                                    <td className='border border-gray-400 px-4 py-2'>Product Details</td>
                                    <td className='border border-gray-400 px-4 py-2'>Last Offers</td>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map(customer => (
                                    <tr key={customer._id} className='even:bg-orange-100'>
                                        <td className='border border-gray-400 px-4 py-2'>{customer._id}</td>
                                        <td className='border border-gray-400 px-4 py-2'>{customer.name}</td>
                                        <td className='border border-gray-400 px-4 py-2'>{customer.details}</td>
                                        <td className='border border-gray-400 px-4 py-2'>{customer.lastConversation}</td>
                                        <td className='border border-gray-400 px-4 py-2'>{customer.productDetails}</td>
                                        <td className='border border-gray-400 px-4 py-2'>{customer.lastOffers}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </Layout>
        </>
    )
}

export default Customers;