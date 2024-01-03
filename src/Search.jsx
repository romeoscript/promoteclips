// src/YouTubeLinkFetcher.js

import React, { useState } from 'react';

const YouTubeLinkFetcher = () => {
    const [link, setLink] = useState('https://www.youtube.com/watch?v=3WCIyNOrzwM&t=88s');
    const [videoDetails, setVideoDetails] = useState(null);

    const extractVideoID = (url) => {
        let videoIDPattern = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
        let matches = url.match(videoIDPattern);
        return matches ? matches[1] : null;
    };

    const fetchVideoDetails = () => {
        const videoID = extractVideoID(link);
        if (!videoID) {
            alert('Invalid YouTube link.');
            return;
        }

        const apiKey = 'AIzaSyDIf9X3nxHznmwhX1aLDx93_vyB4HAlIus';
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${apiKey}&part=snippet`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.items && data.items.length > 0) {
                    setVideoDetails(data.items[0].snippet);
                } else {
                    alert('Video not found.');
                }
            })
            .catch(error => {
                alert('Error fetching video details.');
            });
    };

    return (
        <div>
            <input 
                type="text" 
                value={link} 
                onChange={(e) => setLink(e.target.value)} 
                placeholder="Paste YouTube link here..." 
            />
            <button onClick={fetchVideoDetails}>Get Video Details</button>
            {videoDetails && (
                <div>
                    <h2>{videoDetails.title}</h2>
                    <p>{videoDetails.description}</p>
                </div>
            )}
        </div>
    );
};

export default YouTubeLinkFetcher;
