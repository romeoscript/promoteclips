import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import logo from '../../assets/react.svg';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import TransitionsModal from './Modal';
import Skeleton from '@mui/material/Skeleton';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion, useAnimation } from 'framer-motion';


import Navbar from './Navbar';



export default function Header() {
    const [link, setLink] = useState('');
    const [videoDetails, setVideoDetails] = useState(null);
    const [videos, setVideos] = useState([]);
    const [info, setInfo] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const mainControls = useAnimation();
 


    useEffect(() => {
        mainControls.start('visible');
    }, [mainControls]);

    const extractVideoID = (url) => {
        const videoIDPattern = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/ ]{11})/i;
        const matches = url.match(videoIDPattern);
        return matches ? matches[1] : null;
    };

    const fetchVideoDetails = () => {

        if (!link.trim()) {
            setError('Please enter a keyword or paste a YouTube link.');
            return; // Exit the function if the input is empty
        }
        const videoID = extractVideoID(link);
        const apiKey = 'AIzaSyDIf9X3nxHznmwhX1aLDx93_vyB4HAlIus';
        let apiUrl = '';

        if (videoID) {
            apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${apiKey}&part=snippet`;
        } else {
            apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${encodeURIComponent(link)}&part=snippet&type=video&maxResults=5`;
        }

        setLoading(true);
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (videoID) {
                    setVideos([data.items[0].snippet]);
                } else {
                    setVideos(data.items.map(item => item.snippet));
                }
                setLoading(false);
                setError('');
            })
            .catch(() => {
                setError('Error fetching video details.');
                setLoading(false);
            });
    };

    const slideIn = {
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.25 } }
    };

    return (
        <div className='containers'>
            <Navbar />

            <div className="menuheader">
                <motion.h1
                    variants={slideIn}
                    initial="hidden"
                    animate={mainControls}
                >
                    Skyrocket your YouTube Views with us!
                </motion.h1>
                <motion.p
                    variants={slideIn}
                    initial="hidden"
                    animate={mainControls}
                    className='motion_p'

                >
                    With our services, you can reach your desired YouTube Views! And not just that, you get more subscribers, likes, shares and even comments! So what are you waiting for?!
                </motion.p>

                <div className='input_container'>
                    <FormControl sx={{ width: { xs: '90%', sm: '40%' } }}>
                        <OutlinedInput
                            placeholder="Search video or paste link (youtube.com/watch? =xyz"
                            value={link}
                            onChange={(e) => {
                                setLink(e.target.value);
                                if (e.target.value.trim() === '') {
                                    setVideos([]);
                                    setVideoDetails(null);
                                    setLoading(false);
                                    setError('');
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    fetchVideoDetails();
                                }
                            }}

                            endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon cursor="pointer" onClick={fetchVideoDetails} />
                                </InputAdornment>
                            }
                        />
                    </FormControl>


                    {/* <button className='start' onClick={fetchVideoDetails}>START</button> */}
                    {info && <TransitionsModal setInfo={setInfo} video={videoDetails} />}
                    <section className='absolute_video'>
                        {videos.map((videoDetail, index) => (
                            <motion.aside
                                key={index}
                                initial="hidden"
                                animate="visible"
                                variants={slideIn}
                                onClick={() => {
                                    setVideoDetails(videoDetail);
                                    setInfo(true);
                                }}
                            >
                                <img src={videoDetail.thumbnails.high.url} alt="" />
                                <div>
                                    <h2>
                                        {videoDetail.title.length > 70
                                            ? videoDetail.title.substring(0, 70) + "..."
                                            : videoDetail.title}
                                    </h2>
                                    <p>
                                        {videoDetail.description.length > 100
                                            ? videoDetail.description.substring(0, 100) + "..."
                                            : videoDetail.description}
                                    </p>
                                </div>
                            </motion.aside>
                        ))}

                        {loading && <aside>
                            <Skeleton variant="rounded" width={210} height={60} />
                            <div>
                                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                <Skeleton variant="rounded" width={'100%'} height={40} />
                            </div>
                        </aside>}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </section>
                </div>
            </div>
        </div>
    );
}
