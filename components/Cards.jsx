import { Merriweather } from 'next/font/google';
import { MdFeedback } from 'react-icons/md';
import { FaDatabase } from 'react-icons/fa6';
import { TbReportAnalytics } from "react-icons/tb";
import Link from 'next/link';
import Underline from './Underline';
import { motion } from 'framer-motion';

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900'],
})

const cardData = [
    {
        id: 1,
        icon: <FaDatabase size={54} color="orange" />,
        title: 'Customer Database',
        link: '/customers',
    },
    {
        id: 2,
        icon: <MdFeedback size={54} color='orange' />,
        title: 'Feedback Data',
        link: '/feedback',
    },
    {
        id: 3,
        icon: <TbReportAnalytics size={54} color="orange" />,
        title: 'Analytic Report',
        link: '/analytical',
    }
]

const Cards = () => {


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



    return (
        <div
         variants={variants} className="mt-24 flex flex-col flex-grow items-center">
            <h2 className="text-4xl font-bold text-center text-gray-800 capitalize tracking-widest lg:text-5xl">
                CATEGORIES
            </h2>
            <Underline />
            <p className="text-base text-gray-700 mt-2 mb-6 md:text-lg text-center">
         Not sure where to start? Find the right category to begin
        </p>

            <motion.div initial="hidden"
    viewport={{ once: true }}
    whileInView="show"
    variants={variants} className="grid grid-cols-1 md:grid-cols-3 justify-around gap-3 w-11/12 md:w-3/4 mx-auto">
                {cardData.map((card) => (
                    <Link href={card.link} key={card.id} className="outline rounded outline-1 outline-yellow-800 flex justify-center items-center mt-8 bg-yellow-100 hover:shadow-xl hover:bg-yellow-900/80 backdrop-blur-sm hover:text-white hover:scale-95 transition">
                        <motion.div variants={item} className="flex flex-col justify-center items-center px-4 py-14 hover:animate-pulse">
                            {card.icon}
                            <h3 className={`text-2xl font-black ${merriweather.className}`}>{card.title}</h3>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
}

export default Cards;
