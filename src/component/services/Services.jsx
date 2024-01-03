import "./services.css"
import React from 'react'

export default function Services() {
  return (
    <div>
        <h1 className="servicesHeader">Our Services</h1>
        <div className="services">
            <div className="servicesImage">
                <img src="icons/services.png" alt="" />
            </div>
            <div className="servicesCatalog">
                <div>
                    <h1>Real YouTube Views</h1>
                    <p>Enhance your video's visibility and credibility with genuine views from real users.</p>
                </div>
                <div>
                    <h1>YouTube Likes</h1>
                    <p>Increase engagement and trust by getting more thumbs-up on your content.</p>
                </div>
                <div>
                    <h1>YouTube Subscribers</h1>
                    <p>Build a loyal fan base and grow your channel organically.</p>
                </div>
                <div>
                    <h1>Instant Results</h1>
                    <p>See a surge in your YouTube metrics within hours.</p>
                </div>
            </div>
        </div>
        <button className="btn">Get Started</button>
    </div>
  )
}
