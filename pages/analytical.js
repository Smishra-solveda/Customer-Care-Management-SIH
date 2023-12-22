import Head from 'next/head'
import Layout from '@/components/Layout'
import PieChart from '@/components/chart/PieChart'
import Underline from '@/components/Underline';


const Analytical = () => {
    return (
        <div className='overflow-scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thumb-rounded'>
            <Head>
                <title>Analytical Reports</title>
            </Head>
            <Layout>
                <h1 className='text-4xl lg:text-5xl pt-6 mx-2 text-gray-800 font-bold tracking-widest uppercase text-center'>Analytics</h1>
                <Underline />
                <p className="text-base text-gray-700 mt-2 md:text-lg text-center">
              Analytical reports for your reference data
              </p>
                <div className='flex  justify-around items-center flex-col md:flex-row'>
                    <div className='bg-yellow-100/50 shadow-lg rounded backdrop-blur-sm'>
                        <PieChart
                            title="Call Resolved"
                            value={"100+"}
                            series={[100]}
                            colors={["#9b8e63", "#ebd996"]}
                          
                        />
                        <PieChart
                            title="Positive Ratings"
                            value={"84%"}
                            series={[84, 16]}
                            colors={["#9b8e63", "#ebd996"]}
                        />
                    </div>

                    <div className='bg-yellow-100/50 shadow-lg rounded backdrop-blur-sm'>
                        <PieChart
                            title="Efficiency"
                            value={"97%"}
                            series={[97, 3]}
                            colors={["#9b8e63", "#ebd996"]}
                        />
                        <PieChart
                            title="Panel Rating"
                            value={"93%"}
                            series={[93, 7]}
                            colors={["#9b8e63", "#ebd996"]}
                        />
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Analytical
