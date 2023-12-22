import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import Underline from '@/components/Underline';
import Link from 'next/link';

const Feedback = () => {

    const [FeedbackData, setFeedbackData] = useState([])

    async function fetchFeedback() {
        const response = await axios.get('/api/feedback')
        setFeedbackData(response.data)
    }

    useEffect(() => {
        fetchFeedback()
    }, [])

    return (
        <>
            <Head>
                <title>Feedback</title>
            </Head>
            <Layout>
                <h1 className='text-4xl lg:text-5xl pt-6 mx-2 text-gray-800 font-bold tracking-widest uppercase text-center'>Feedback</h1>
                <Underline />
                <p className='text-center text-sm font-light mt-4'>Add your <Link href="/addfeedback" className="hover:underline">feedback!</Link></p>
                <div className='mt-6 overflow-x-auto w-11/12 mx-auto'>
                    <table className='w-full table-auto'>
                        <thead>
                            <tr className='bg-orange-300 font-bold text-center'>
                                <td className='border border-gray-400 px-4 py-2'>Feedback</td>
                                <td className='border border-gray-400 px-4 py-2'>Rating</td>
                                <td className='border border-gray-400 px-4 py-2'>Tools Working</td>
                                <td className='border border-gray-400 px-4 py-2'>Contact Developer</td>
                            </tr>
                        </thead>
                        <tbody>
                            {FeedbackData.map(feedback => (
                                <tr key={feedback._id} className='even:bg-orange-100'>
                                    <td className='border border-gray-400 px-4 py-2'>{feedback.feedbackData}</td>
                                    <td className='border border-gray-400 px-4 py-2'>{feedback.rating}</td>
                                    <td className='border border-gray-400 px-4 py-2'>{feedback.toolsWorking ? "True" : "False"}</td>
                                    <td className='border border-gray-400 px-4 py-2'>{feedback.contactDeveloper ? "True" : "False"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </Layout>

        </>
    );
}

export default Feedback;