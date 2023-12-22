import React from "react";
import CountUp from "react-countup";
import Underline from "./Underline";
import { motion } from "framer-motion";

export default function Statistic() {

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
    <motion.div initial="hidden"
    viewport={{ once: true }}
    whileInView="show"
    variants={variants} className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 capitalize tracking-widest lg:text-5xl">
        STATISTICS
      </h2>
      <Underline />
      <p className="text-base text-gray-700 mt-2 md:text-lg text-center">
        Staticstics of calls resolved by the team
      </p>
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 pt-10">
        <motion.div variants={item} className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
            <CountUp
              end={100}
              duration={5}
              suffix="+"
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Calls Resolved
          </p>
        </motion.div>
        <motion.div variants={item} className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
            <CountUp
              end={84}
              duration={5}
              suffix="%"
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Ratings
          </p>
        </motion.div>
        <motion.div variants={item}  className="text-center md:border-r">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
            <CountUp
              end={97}
              duration={5}
              suffix="%"
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Effieciency
          </p>
        </motion.div>
        <motion.div variants={item}  className="text-center">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
            <CountUp
              end={93}
              duration={5}
              suffix="%"
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
          </h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Panel Rating
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
