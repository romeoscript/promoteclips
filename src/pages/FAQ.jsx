import React, { useState } from "react";
import { BsChevronRight as ChevronDownIcon } from "react-icons/bs";
import Footer from "../component/footer/Footer";
import Navbar from "../component/header/Navbar";


const faqs = [
    {
      question: "What are YouTube Views?",
      answer:
        "YouTube views represent the number of times a video has been watched. They are crucial for increasing a video's visibility and credibility",
    },
    {
      question: "Are the views genuine?",
      answer:
        "Yes, we provide real, high-quality views from active YouTube users. We do not use fake or bot-generated views",
    },
    {
      question: "Customer Support?",
      answer:
        "Our customer support team is available 24/7 to assist you. You can contact us through email, social media, or our contact form.",
    },
    {
      question: "Delivery Time?",
      answer:
        "The delivery time varies depending on the package you choose. Typically, views start increasing within hours of purchase and continue over the agreed-upon timeframe.",
    },
  ];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    function handleClick(index) {
        setActiveIndex(index === activeIndex ? null : index);
    }

    return (
        <>
            <div className="md:h-[30vh] h-[10vh] curtail">
                <Navbar />
            </div>
            <div className="text-white md:w-3/5 w-[90%] m-auto mt-[3rem] text-[#505abc]">
            <h2 className="text-white text-center text-3xl font-bold p-[2rem] text-black ">Our Buy <span className="text-[#505abc]">YouTube Views</span> FAQs</h2>
        
                {faqs.map((faq, index) => (
                    <div key={index} className=" py-4">
                        <button
                            onClick={() => handleClick(index)}
                            className="flex justify-between border-l-8 rounded-sm border-[#FF7D00]  text-[#505abc] items-center w-full px-4 py-2 text-lg font-medium text-left  focus:outline-none "
                        >
                            <span>{faq.question}</span>
                            <ChevronDownIcon
                                className={`${activeIndex === index ? "transform rotate-90" : ""
                                    } w-5 h-5`}
                            />
                        </button>
                        {activeIndex === index && (
                            <p className="mt-2 px-4 text-gray-500 md:w-4/5 p-[1.5rem] border border-white bg-gray-300 bg-opacity-5 backdrop-blur-md rounded-md">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default FAQ;
