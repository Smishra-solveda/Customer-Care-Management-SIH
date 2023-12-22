import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative bottom-0 mt-16 bg-gradient-to-b from-slate-50 to-yellow-50">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-white"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-gray-700">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link
              href="/"
              aria-label="Go home"
              title="Logo"
              className="inline-flex items-center"
            >
              <Image src="/LogoWithName.png" width={120} height={120} alt="logo" />

            </Link>
            <div className="mt-1 lg:max-w-sm">
              <p className="text-sm font-semibold text-gray-600">
                Customer Care Management Tool.
              </p>
            </div>
            <Link href="/feedback" className="text-sm hover:underline">
              Feedback
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">




            <div>
              <p className="font-semibold tracking-wide text-yellow-700 relative group max-w-fit cursor-default">
                <span>DATA</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-500 transition-all group-hover:w-full"></span>
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/decision"
                    className="transition-colors duration-300 hover:text-amber-500"
                  >
                    Decision Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="/training"
                    className="transition-colors duration-300 hover:text-amber-500"
                  >
                    Training
                  </Link>
                </li>

              </ul>
            </div>


            <div>
              <p className="font-semibold tracking-wide text-yellow-700 relative group max-w-fit cursor-default">
                <span>CUSTOMERS</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-500 transition-all group-hover:w-full"></span>
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/addcustomer"
                    className="transition-colors duration-300 hover:text-amber-500"
                  >
                    Add new customer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-amber-500"
                  >
                    Import customer data
                  </Link>
                </li>

              </ul>
            </div>



            <div>
              <p className="font-semibold tracking-wide text-yellow-700 relative group max-w-fit cursor-default">
                <span>EXTRAS</span>
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-yellow-500 transition-all group-hover:w-full"></span>
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="/ivr"
                    className="transition-colors duration-300 hover:text-amber-500"
                  >
                    IVR
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-300 hover:text-amber-500"
                  >
                    Analytical report
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-yellow-400 sm:flex-row">
          <p className="text-sm text-gray-700">
            © Copyright {new Date().getFullYear()}
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">

            <Link
              href="/"
              className="transition hover:scale-105 hover:text-gray-500"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
