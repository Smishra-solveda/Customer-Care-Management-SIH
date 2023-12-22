import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerForm = (
    {
        _id,
        name: initialName,
        details: initialDetails,
        lastConversation: initialLastConversation,
        productDetails: initialProductDetails,
        lastOffers: initialLastOffers
    }
) => {
    const [name, setName] = useState(initialName || '');
    const [details, setDetails] = useState(initialDetails || '');
    const [lastConversation, setLastConversation] = useState(initialLastConversation || '');
    const [productDetails, setProductDetails] = useState(initialProductDetails || '');
    const [lastOffers, setLastOffers] = useState(initialLastOffers || '');

    const notify = () => toast.success('Customer added!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    async function addNotification() {
        const customerName = name;
        const info = `New Customer Added ${customerName}`;
        await axios.post('/api/notification', { info });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const customer = { name, details, lastConversation, productDetails, lastOffers };
        if (_id) {
            await axios.put('/api/customer', { ...customer, _id });
        } else {
            await axios.post('/api/customer', customer);
        }
        setName('');
        setDetails('');
        setLastConversation('');
        setProductDetails('');
        setLastOffers('');
        addNotification();
        notify();
    };

    return (
        <div>
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
            <div className='rounded-lg bg-gradient-to-t from-gray-50 to-yellow-50 shadow-lg py-4 mt-5 mx-auto max-w-2xl'>
                <form onSubmit={handleSubmit} className='w-11/12 md:w-3/4 mx-auto'>

                    <input
                        type="text"
                        id="name"
                        placeholder='Enter customer name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        className={`w-full px-4 py-3 text-primary border-gray-500 border-2 rounded outline-none text-lg transition duration-150 ease-in-out mb-4`}
                    />

                    <input
                        type="text"
                        id="details"
                        placeholder='Enter customer phone number'
                        value={details}
                        onChange={(event) => setDetails(event.target.value)}
                        className={`w-full px-4 py-3 text-primary border-2 border-gray-500  rounded outline-none text-lg transition duration-150 ease-in-out mb-4`}
                    />
                    <input
                        type="text"
                        id="lastConversation"
                        placeholder='Enter Date of Last conversation with customer'
                        value={lastConversation}
                        onChange={(event) => setLastConversation(event.target.value)}
                        className={`w-full px-4 py-3 text-primary border-2 border-gray-500 rounded outline-none text-lg transition duration-150 ease-in-out mb-4`}
                    />

                    <input
                        type="text"
                        id="productDetails"
                        placeholder='Customer product details'
                        value={productDetails}
                        onChange={(event) => setProductDetails(event.target.value)}
                        className={`w-full px-4 py-3 text-primary border-2 border-gray-500 rounded outline-none text-lg transition duration-150 ease-in-out mb-4`}
                    />

                    <textarea
                        type="text"
                        id="lastOffers"
                        placeholder='Last offers to customer'
                        value={lastOffers}
                        onChange={(event) => setLastOffers(event.target.value)}
                        className={`w-full px-4 py-3 text-primary border-2 border-gray-500 rounded outline-none text-lg transition duration-150 ease-in-out mb-4`}
                    />
                    <button
                        type="submit"
                        className={`bg-yellow-700 border hover:text-yellow-800 hover:bg-transparent hover:border-yellow-800 transition text-white font-bold py-2 px-4 rounded`}
                    >
                        Add Customer
                    </button>
                </form>
            </div>
            <div className='text-center mt-12'>
                <p className='text-sm text-gray-500'>
                    Done adding customers? Go to the <Link className='hover:underline text-blue-500' href='/newcustomer'>list of customers</Link>
                </p>
            </div>
        </div>
    );
}

export default CustomerForm;