import Layout from "@/components/Layout";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CustomerForm from "@/components/CustomerForm";
import Underline from "@/components/Underline";

const EditCustomer = () => {
    const [customerInfo, setCustomerInfo] = useState(null)
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        if (!id) return;
        axios.get('/api/customer?_id=' + id)
            .then(response => {
                setCustomerInfo(response.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    return (
        <>
            <Head>
                <title>Edit Customer</title>
            </Head>
            <Layout>
                <div>
                    <h2 className="text-4xl font-bold text-center text-gray-800 uppercase tracking-widest lg:text-5xl mt-5">
                        Edit Customer
                    </h2>
                    <Underline />
                    {customerInfo && <CustomerForm {...customerInfo} />}
                </div>
            </Layout>
        </>
    );
}

export default EditCustomer;