import { useState } from 'react'
import Carousel from './Carousel'
import styles from './VideoGallery.module.css'

const VideoGallery = ({ videos }) => {

    const [ selectedVideo, setSelectedVideoTo ] = useState(videos[0])
    const thumbnails = videos.map(vid => vid.embedCode)

    return (
        <div className={styles.moduleWrapper} id="videoGallery" >
            <div className={styles.titleBlock}>
                <h1>Videos</h1>
                <a 
                    href="https://www.youtube.com/channel/UCb2AdVRb--qQsceXOhh2ErQ" 
                    target="_blank"
                    rel="noopener noreferrer"    
                />
                {/* <p>Subscribe to Johann's Youtube channel</p> */}
            </div>
            <div className={styles.videoContainer}>
                <h2 className="light-text">{selectedVideo.title}</h2>
                <h3 className="light-text">{selectedVideo.subtitle}</h3>
                
                <div className={styles.video}>
                    <iframe
                        src={`https://www.youtube.com/embed/${selectedVideo.embedCode}`} 
                        frameborder="0" 
                        allow="
                            accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture" 
                        allowfullscreen
                        className='loading-background'
                    />
                    <Carousel 
                        images={thumbnails} 
                        handleSelection={index => setSelectedVideoTo(videos[index])}   
                    />
                </div>
            </div>
        </div>

    )
}

export default VideoGallery