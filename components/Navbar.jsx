import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import UserProfile from "./UserProfile";
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import NotificationBox from "./NotificationBox";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    id: 0,
    name: "IVR Data",
    path: "/IVR",
  },
  {
    id: 1,
    name: "Add New Customer",
    path: "/newcustomer",
  },
  {
    id: 2,
    name: "Decision Data",
    path: "/decision",
  },
  {
    id: 3,
    name: "Training",
    path: "/training",
  },
  {
    id: 4,
    name: "Analytical Reports",
    path: "/analytical",
  },
  {
    id: 5,
    name: "Blogs",
    path: "/blogs",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (!session && router.pathname !== "/login") {
      router.push("/login");
    }
  }, [session, router]);

  // function to toggle the menu button
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // function to toggle the notification button
  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen);
  };

  const inactiveLink =
    "button hover:scale-105 transition hover:border hover:border-orange-400 rounded-full py-1 px-2 font-normal";
  const activeLink =
    inactiveLink +
    " border text-yellow-700 border-yellow-800 rounded-full py-1 px-2 font-normal hover:border-green-500";

  return (
    <>
      <nav className="sticky bg-gradient-to-t from-gray-50 to-yellow-50 top-0 w-full left-0 z-40 backdrop-blur-md shadow-md bg-opacity-80 text-gray-600">
        <div className="container max-w-full px-4 md:px-8">
          <div className="flex items-center justify-between py-1 h-14 sm:h-20">
            <Link href="/" className="transform scale-75 ">
              <div className="flex items-center">
                <Image
                  src="/Logo.png"
                  alt="logo"
                  width={70}
                  height={70}
                  className="left-0 p-1"
                />
              </div>
            </Link>

            {/* Menu button for mobile devices */}
            <div className="md:hidden">
              <button
                className="mobile-menu-button transform hover:scale-105 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* desktop menu items */}
            <ul className="md:flex md:items-center md:gap-8 mx-2 font-bold md:ml-4 hidden">
              {navItems.map((item) => (
                <Link href={item.path} key={item.id}>
                  <li
                    className={
                      pathname.includes(item.path) ? activeLink : inactiveLink
                    }
                  >
                    <p href={item.path}>{item.name}</p>
                  </li>
                </Link>
              ))}
              <a
                href="#"
                className="flex items-center p-2 text-gray-600 capitalize transition-all transform   hover:outline hover:outline-orange-300 hover:scale-105 rounded-full"
                onClick={toggleNotification}
              >
                <IoMdNotificationsOutline className="w-5 h-5" />

                <AnimatePresence>
                  {notificationOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 bg-white bg-opacity-90"
                    >
                      <NotificationBox />
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
              {!session ? (
                <li>
                  <Link
                    className="bg-orange-400 text-white rounded-full py-2 px-4 font-medium transition-all hover:bg-transparent hover:text-gray-800 hover:border hover:border-yellow-800"
                    href="/login"
                  >
                    Sign In
                  </Link>
                </li>
              ) : (
                <UserProfile />
              )}
            </ul>

            {/* mobile menu items */}
            <ul
              className={`${
                isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
              } absolute top-full text-left  left-0 right-0 md:hidden transition-all duration-300 transform origin-top ease-in-out bg-white bg-opacity-90`}
            >
              {navItems.map((item) => (
                <Link href={item.path} key={item.id}>
                  <li className="border-y-2 pl-10 py-2 font-bold">
                    <p>{item.name}</p>
                  </li>
                </Link>
              ))}
              <li
                className="border-y-2 pl-10 py-2 font-bold"
                onClick={toggleNotification}
              >
                Notifications
                {notificationOpen && <NotificationBox />}
              </li>
              {!session ? (
                <Link
                  className="bg-orange-400 text-white rounded-full py-2 px-4 font-medium transition-all hover:bg-transparent hover:text-gray-800 hover:border hover:border-yellow-800"
                  href="/login"
                >
                  <li>Sign In</li>
                </Link>
              ) : (
                <UserProfile />
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
