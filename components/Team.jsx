import React from "react";
import Underline from "./Underline";
import { motion } from "framer-motion";

function AdminConnect() {

  const TeamData = [
    {
      id: "1",
      name: "ABC",
      img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1702569954~exp=1702570554~hmac=f8c79d1ec038ebe06a7d659ff098f2c1d024718bffad5d2ef3c0fda4b854144d",
      role: "Role",
      contact: "",
      chat: "",
      rating: "RATING",
  },
  {
    id: "2",
    name: "DEF",
    img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1702569954~exp=1702570554~hmac=f8c79d1ec038ebe06a7d659ff098f2c1d024718bffad5d2ef3c0fda4b854144d",
    role: "Role",
    contact: "",
    chat: "",
    rating: "RATING",
},
{
  id: "3",
  name: "GHI",
  img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1702569954~exp=1702570554~hmac=f8c79d1ec038ebe06a7d659ff098f2c1d024718bffad5d2ef3c0fda4b854144d",
  role: "Role",
  contact: "",
  chat: "",
  rating: "RATING",
},
{
  id: "4",
  name: "Name",
  img: "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1702569954~exp=1702570554~hmac=f8c79d1ec038ebe06a7d659ff098f2c1d024718bffad5d2ef3c0fda4b854144d",
  role: "Role",
  contact: "",
  chat: "",
  rating: "",
}
  ]

  return (
    <motion.div  initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay:0.2 }}
    viewport={{ once: true }}>
      <section className="">
        <div className="container px-6 py-8 mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 capitalize tracking-widest lg:text-5xl">
            ADMIN CONNECT
          </h2>
          <Underline/>
          <p className="text-base text-gray-700 py-2 md:text-lg text-center">
                Find the right person to connect with </p>
       



            <div className="px-4 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              
              {/* <p className="text-base  text-gray-700 md:text-lg text-center">
            
              </p> */}
            </div>
            <div
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
            >
              {TeamData &&
                TeamData.map((member) =>{
                  return (
                    <div key={member.id}>
                      <div className="relative overflow-hidden transition border duration-300 transform rounded-3xl shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                        <img
                          className="object-cover w-full sm:h-80"
                          src={member.img}
                          alt={member.name}
                        />

                        <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                          <p className="mb-1 text-lg font-bold text-gray-100">
                            {member.name}
                          </p>
                          <p className="mb-4 text-xs text-gray-100">
                            {member.role}
                          </p>
                          <p className="mb-4 text-xs tracking-wide text-gray-400">
                            {member.rating}
                          </p>

                          <div className="flex items-center justify-center space-x-3">
                            {/* <SocialIcon
                              url={member.contact}
                              target="chat
                              style={{ height: 35, width: 35 }}
                              bgColor="black"
                            /> */}

                            {/* <SocialIcon
                              url={member.social2}
                              target="_blank"
                              style={{ height: 35, width: 35 }}
                              bgColor="black"
                            /> */}
                            <button>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </button>
                           <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

         
        </div>
      </section>
    </motion.div>
  );
}

export default AdminConnect;