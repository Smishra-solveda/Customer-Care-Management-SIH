import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: 1.1 }}
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="w-full bg-center bg-cover h-screen
        bg-[url('https://www.questionpro.com/blog/wp-content/uploads/2022/05/customer-care.jpg')]"
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
        <motion.div initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} className="text-center">
          <h1 className="text-3xl font-semibold uppercase text-white lg:text-5xl">
            Customer Care Knowledge{" "}
            <span className="text-yellow-600">Management</span> Tool
          </h1>
          <Link href="/decision">
            <button className="max-w-xl md:w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-yellow-700 rounded-md lg:w-auto hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
              Start Now
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
