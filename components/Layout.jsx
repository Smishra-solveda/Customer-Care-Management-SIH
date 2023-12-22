import Navbar from './Navbar'
import Footer from './Footer'
import Background from './Background'
import Chatbot from './Chatbot'

const Layout = ({ children }) => {
    return (
        <>
            <Background />
            <Navbar />
            {children}
            <Chatbot />
            <Footer />
        </>
    )
}

export default Layout