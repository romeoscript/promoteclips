import React from 'react'
import ContactForm from '../component/ContactForm'
import Footer from '../component/footer/Footer'
import Navbar from '../component/header/Navbar'

const Contact = () => {
    return (
        <div>
            <div className="md:h-[30vh] h-[10vh] curtail">
                <Navbar />
            </div>
            <section className='p-[2rem]'>
                <h2 className='text-2xl'>Got questions?</h2>
                <p className='text-2xl'>Don't hesitate to reach out!</p>
                <div className='my-[1rem]'>
                    <p className='font-100 text-sm'>Don't hesitate to reach out!</p>
                    <p className='font-100 text-sm'>You can expect a response within 5-10 minutes.</p>
                    <p className='font-100 text-sm'>For the speediest assistance, we suggest filling out our contact form or shooting us an email.</p>
                </div>
                <ContactForm className='md:w-[50%] shadow-md gap-2 p-[1rem]'/>
            </section>
            <Footer />
        </div>
    )
}

export default Contact