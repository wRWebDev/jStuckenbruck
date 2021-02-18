/*
    Video Gallery
        - Show embedded youtube video (1st in array provided by db)
        - Include slider of full video library
*/

import { useState } from 'react'
import Carousel from './Carousel'
import styles from './VideoGallery.module.css'

const VideoGallery = ({ videos }) => {

    const [ selectedVideo, setSelectedVideoTo ] = useState(videos[0])

    return (
        <div className={styles.moduleWrapper} id="videoGallery" >
            
            {/* Section Title */}
            <div className={styles.titleBlock}>
                <h1>Videos</h1>
            </div>
            
            {/* Video player container */}
            <div className={styles.videoContainer}>
                
                {/* Video details */}
                <h2 className="light-text">{selectedVideo.title}</h2>
                <h3 className="light-text">{selectedVideo.subtitle}</h3>
                
                {/* Embedded video */}
                <div className={styles.video}>
                    <iframe
                        src={`https://www.youtube.com/embed/${selectedVideo.embedCode}`} 
                        frameBorder="0" 
                        allow="
                            accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture" 
                        allowFullScreen
                        className='loading-background'
                    />

                    {/* Library slider */}
                    <Carousel 
                        videos={videos} 
                        handleSelection={index => setSelectedVideoTo(videos[index])}   
                    />
                </div>
            </div>
        </div>

    )
}

export default VideoGallery