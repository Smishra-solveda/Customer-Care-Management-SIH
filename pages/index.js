import Cards from "@/components/Cards"
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import Search from "@/components/Search"
import AdminConnect from "@/components/Team"
import Statistic from "@/components/stats"
import Head from "next/head"

export default function Home() {
  return (
    <div className="overflow-scroll h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-yellow-600 scrollbar-thumb-rounded">
      <Head >
        <title>MCIP Customer Care Management </title> </Head>
      <Layout>
        <Hero />
        <Search />
        <Cards />
        
        <Statistic/>
        <AdminConnect/>
      </Layout>
    </div>
  )
}

