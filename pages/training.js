import Head from 'next/head'
import Layout from '@/components/Layout'
import Underline from '@/components/Underline'

const ytVideos = [
    {
        id: 1,
        link: 'https://www.youtube.com/embed/_Z5bzqRdUNc?si=wPXKQzZEpbQPyXx3'
    },
    {
        id: 2,
        link: 'https://www.youtube.com/embed/ONliotY262w?si=LyxPrxWtIlBW6seE'
    },
    {
        id: 3,
        link: 'https://www.youtube.com/embed/hoIMH64x19w?si=LiIDAKTcUWUws0-g'
    },
    {
        id: 4,
        link: 'https://www.youtube.com/embed/eXLrmL9jDs8?si=eXE-TRCzPDx-54aO'
    },
    {
        id: 5,
        link: 'https://www.youtube.com/embed/bdmZwtfN6PQ?si=nJM7AdOkd46Tbqb3'
    },
    {
        id: 6,
        link: 'https://www.youtube.com/embed/PslX0ULB3do?si=YF4T0Ex0ol9M3-Wb'
    },
    {
        id: 7,
        link: 'https://www.youtube.com/embed/bObGdblklq8?si=kmtR4XBaO5_iUU5W'
    },
    {
        id: 8,
        link: 'https://www.youtube.com/embed/bJztViuCWHo?si=M8rosM2Q1S1khXR9'
    },
    {
        id: 9,
        link: 'https://www.youtube.com/embed/akCj5vIOBAo?si=IMoQ_ll1noENXIOp'
    },
    {
        id: 10,
        link: 'https://www.youtube.com/embed/3pX7kirzHu8?si=gxz1HCrnginaJyJM'
    },
    {
        id: 11,
        link: 'https://www.youtube.com/embed/IGZrP6yR9dI?si=7_PGZw1dUr_IzBzH'
    },
    {
        id: 12,
        link: 'https://www.youtube.com/embed/lmFehPVsyZM?si=otJmc565s7P9S1_3'
    },
    {
        id: 13,
        link: 'https://www.youtube.com/embed/A_TWb-3klS0?si=bx6wXe9yLpooAiq8'
    },
    {
        id: 14,
        link: 'https://www.youtube.com/embed/sN-DjtODs6M?si=JwrqM4A71WwZmPXM'
    },
    {
        id: 15,
        link: 'https://www.youtube.com/embed/jmdeiX8irN8?si=6HXrtY6xIeV0U5r1'
    },
]

const Training = () => {
    return (
        <div className='overflow-scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thumb-rounded'>
            <Head>
                <title>Training</title>
            </Head>
            <Layout>
                <div className='w-11/12 mx-auto'>
                    <h2 className="text-4xl mt-10 font-bold text-center text-gray-800 uppercase tracking-widest lg:text-5xl">
                        Start Training
                    </h2>
                    <Underline />
                    <p className="text-base text-gray-700 mt-2 md:text-lg text-center">
                A collection of videos to help you get started with your training.
              </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8'>
                        {ytVideos.map((video) => (
                            <div key={video.id}>
                                <iframe width="100%" height="245" src={video.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Training