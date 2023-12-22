import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"

const Signin = () => {
    const router = useRouter()
    const { data: session } = useSession()
    if (session) {
        router.push("/")
    }

    return (
        <>
            <Head>
                <title>Sign In</title>
            </Head>
            <div className="overflow-scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thumb-rounded">
                <Head>
                    <title>Sign In</title>
                </Head>

                <div className="bg-white">
                    <div className="flex justify-center h-screen">
                        <div className="hidden bg-cover lg:block lg:w-2/3 bg-[url('/Login.jpg')] bg-opacity-0">
                            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                                <div className="flex-grow position: absolute top-10 max-w-2xl bg-black bg-opacity-30 backdrop-blur-xl p-3 rounded-lg">
                                    <h2 className="text-2xl font-bold text-white sm:text-3xl">MCIP</h2>

                                    <p className="max-w-xl mt-3 text-gray-300">
                                        MCIP is a Customer Management and Interaction Platform, seamlessly integrating customer data to optimize business operations and elevate customer satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                            <div className="flex-1">
                                <div className="text-center">
                                    <div className="flex justify-center mx-auto">
                                        <Image className="w-auto h-7 sm:h-12" width={250} height={250} src="/Logo.png" alt="Logo" />
                                    </div>

                                    <p className="mt-3 text-2xl md:text-lg text-gray-500">Sign in to access your account</p>
                                </div>

                                <div className="mt-8">

                                    <div className="mt-6">

                                        <button


                                            className="flex items-center justify-center w-full px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-gray-800 rounded-lg  hover:bg-gray-200"
                                            onClick={() => signIn("google")}>

                                           

                                            <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                            </svg>

                                            <span className="mx-2">Sign in with Google</span>

                                        </button>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Signin