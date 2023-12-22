import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Underline from '@/components/Underline';
import axios from 'axios';

function FeedbackForm() {
    const [feedbackData, setFeedbackData] = useState('');
    const [rating, setRating] = useState(0);
    const [toolsWorking, setToolsWorking] = useState(false);
    const [contactDeveloper, setContactDeveloper] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const feedback = { feedbackData, rating, toolsWorking, contactDeveloper };
        await axios.post('/api/feedback', feedback);
        setFeedbackData('');
        setRating(0);
        setToolsWorking(false);
        setContactDeveloper(false);
    };


    return (
        <>
            <Head>
                <title>Feedback</title>
            </Head>
            <Layout>
                <div className="flex flex-col items-center justify-center min-h-screen py-2">
                    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                        <h1 className='text-4xl lg:text-5xl pt-6 mx-2 text-gray-800 font-bold tracking-widest uppercase text-center'>Feedback</h1>
                        <Underline />

                        <p className="mt-3 text-2xl">
                            What do you think of the site?
                        </p>
                        <div className='rounded-lg bg-gradient-to-t from-gray-50 to-yellow-50 shadow-lg py-4 mt-5 mx-auto'>
                            <form onSubmit={handleSubmit} className='w-11/12 md:w-full p-4'>
                                <input
                                    placeholder='Enter feedback here'
                                    className={`w-full px-4 py-3 text-primary border-gray-500 border-2 rounded outline-none text-lg transition duration-150 ease-in-out mb-4`}
                                    type="text"
                                    value={feedbackData}
                                    onChange={(e) => setFeedbackData(e.target.value)}
                                />
                                <p className='font-bold'>Rate the panel on a scale of 1 to 5</p>
                                <input
                                    placeholder='Enter rating on a scale of 1 to 5'
                                    className={`w-full px-0 py-3 text-primary border-gray-500 border-2 rounded outline-none text-lg transition duration-150 ease-in-out mb-4`}
                                    type="range"
                                    min="1"
                                    max="5"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                                <p className='font-bold mb-5'>Are all tools working?</p>
                                <select
                                    className={`px-0 w-2/3 py-3 text-primary border-gray-500 border-2 rounded outline-none text-lg transition duration-150 ease-in-out mb-4`}
                                    value={toolsWorking ? 'yes' : 'no'}
                                    onChange={(e) => setToolsWorking(e.target.value === 'yes')}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <p className='font-bold mb-5'>Would you like to be contacted by the developer?</p>
                                <select
                                    className={`w-2/3 px-0 py-3 text-primary border-gray-500 border-2 rounded outline-none text-lg transition duration-150 ease-in-out mb-4`}
                                    value={contactDeveloper ? 'yes' : 'no'}
                                    onChange={(e) => setContactDeveloper(e.target.value === 'yes')}
                                >
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                                <button
                                    type="submit"
                                    className={`bg-yellow-700 border block mx-auto hover:text-yellow-800 hover:bg-transparent hover:border-yellow-800 transition text-white font-bold py-2 px-4 rounded`}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </main>
                </div>
            </Layout>
        </>
    );
}

export default FeedbackForm;
