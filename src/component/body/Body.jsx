import React from 'react';
import './body.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Body() {
    // Animation controls for each section
    const controls1 = useAnimation();
    const [ref1, inView1] = useInView({ threshold: 0.1 });

    const controls2 = useAnimation();
    const [ref2, inView2] = useInView({ threshold: 0.1 });

    const controls3 = useAnimation();
    const [ref3, inView3] = useInView({ threshold: 0.1 });

    const controls4 = useAnimation();
    const [ref4, inView4] = useInView({ threshold: 0.1 });

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    React.useEffect(() => {
        if (inView1) controls1.start('visible'); else controls1.start('hidden');
        if (inView2) controls2.start('visible'); else controls2.start('hidden');
        if (inView3) controls3.start('visible'); else controls3.start('hidden');
        if (inView4) controls4.start('visible'); else controls4.start('hidden');
    }, [controls1, inView1, controls2, inView2, controls3, inView3, controls4, inView4]);

    return (
        <div className='page_container'>
            <motion.div className='pagecontent' ref={ref1} initial="hidden" animate={controls1} variants={fadeIn}>
                <div className='youtubetext'>
                    <h2>Add Your Youtube Video</h2>
                    <p>To promote your YouTube video, you can either paste the video URL or enter the video name. Afterward, select the desired quantity of views, likes, subscribers, comments, or shares.</p>
                </div>
                <div className='youtubeimage'>
                    <img src="icons/Rectangle 3.png" alt="" />
                </div>
            </motion.div>

            <motion.div className='pagecontent second_child' ref={ref2} initial="hidden" animate={controls2} variants={fadeIn}>
                <div className='youtubeimage'>
                    <img src="icons/tab.png" alt="" />
                </div>
                <div className='youtubetext'>
                    <h2> Customize Your Order</h2>
                    <p>Once you've included your video, you're just one step away from completing your order. By default, the order quantities are pre-set as recommendations for a quick order. However, you have the option to tailor them to your specific requirements by utilizing the sliders and adjusting them from left to right or vice versa.</p>
                </div>
            </motion.div>

            <motion.div className='pagecontent' ref={ref3} initial="hidden" animate={controls3} variants={fadeIn}>
                <div className='youtubetext'>
                    <h2> Finish your Order </h2>
                    <p>Once you've included your video, you're just one step away from completing your order. By default, the order quantities are pre-set as recommendations for a quick order. However, you have the option to tailor them to your specific requirements by utilizing the sliders and adjusting them from left to right or vice versa. </p>
                </div>
                <div className='youtubeimage'>
                    <img src="icons/camera.png" alt="" />
                </div>
            </motion.div>

            <motion.h1 className='whyUs_header' ref={ref4} initial="hidden" animate={controls4} variants={fadeIn}>
                Why Use Promoteclips?
            </motion.h1>

            <div className='whyUs'>
                <div>
                    <img src="icons/video.png" alt="" />
                    <p>Enhance your video's visibility and credibility with genuine views from real users.</p>
                </div>
                <div>
                    <img src="icons/youtbe.png" alt="" />
                    <p>Enhance your video's visibility and credibility with genuine views from real users.</p>
                </div>
                <div>
                    <img src="icons/chart.png" alt="" />
                    <p>Enhance your video's visibility and credibility with genuine views from real users.</p>
                </div>
            </div>
        </div>
    );
}
