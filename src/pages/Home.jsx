import React from 'react'
import Body from '../component/body/Body'
import Footer from '../component/footer/Footer'
import Header from '../component/header/Header'
import Services from '../component/services/Services'

const Home = () => {
    return (
        <div>
            <Header />
            <Body />
            <Services />
            <Footer />
        </div>
    )
}

export default Home