import Layout from '@/components/Layout';
import Head from 'next/head';
import CustomerForm from '@/components/CustomerForm';
import Underline from '@/components/Underline';

const AddCustomer = () => {
    return (
        <>
            <Head>
                <title>Add Customer</title>
            </Head>
            <Layout>
                <div>
                    <h2 className="text-4xl font-bold text-center text-gray-800 uppercase tracking-widest lg:text-5xl mt-5">
                        Add Customer
                    </h2>
                    <Underline />
                    <CustomerForm />
                </div>
            </Layout>
        </>
    )
}

export default AddCustomer;