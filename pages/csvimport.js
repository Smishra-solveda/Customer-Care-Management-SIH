import Head from "next/head"
import Layout from "@/components/Layout"
import Underline from "@/components/Underline"
import { FiUpload } from "react-icons/fi"
import axios from "axios"

const CSVImport = () => {
    const handleFileChange = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                await axios.post('/api/upload-csv', formData);
                console.log('CSV file uploaded successfully');
            } catch (error) {
                console.error('Error uploading CSV file:', error);
            }
        }
    };
    return (
        <>
            <Head>
                <title>Import from CSV</title>
            </Head>
            <Layout>
                <h1 className='text-4xl lg:text-5xl pt-6 text-gray-800 font-bold tracking-widest uppercase text-center'>Importing Files from CSV</h1>
                <Underline />

                <div>
                    <h2 className="text-2xl lg:text-3xl pt-6  uppercase text-center">Instructions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 mx-auto gap-6 text-center">
                        <div className="text-lg md:text-xl text-gray-800 font-bold tracking-widest outline rounded outline-1 outline-yellow-800 flex justify-center items-center mt-8 bg-yellow-100 hover:shadow-xl hover:bg-yellow-900/80 backdrop-blur-sm hover:text-white hover:scale-95 transition py-8 px-3">
                            Upload the CSV file only
                        </div>
                        <div className="text-lg md:text-xl text-gray-800 font-bold tracking-widest outline rounded outline-1 outline-yellow-800 flex justify-center items-center mt-8 bg-yellow-100 hover:shadow-xl hover:bg-yellow-900/80 backdrop-blur-sm hover:text-white hover:scale-95 transition py-8 px-3">
                            The file must and only contain headers - NAME, PHONE NUMBER, LAST CONVERSATION, PRODUCT DETAILS, LAST OFFERS
                        </div>
                        <div className="text-lg md:text-xl text-gray-800 font-bold tracking-widest outline rounded outline-1 outline-yellow-800 flex justify-center items-center mt-8 bg-yellow-100 hover:shadow-xl hover:bg-yellow-900/80 backdrop-blur-sm hover:text-white hover:scale-95 transition py-8 px-3">
                            The processing might take sometime to appear
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-2 mt-12">
                    <label className="w-24 h-24 outline outline-gray-200 transition-all duration-500 hover:bg-gray-200 flex flex-col justify-center items-center rounded-lg cursor-pointer">
                        <FiUpload size={34} color="grey" />
                        <input type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                    <p>Upload CSV file only</p>
                </div>

            </Layout>
        </>
    )
}

export default CSVImport