/*
    Full video library
        - shows all videos as a slider/swiper
        - on hover, shows video title on a dark overlay (appears from bottom)
*/

import SwiperCore, { Keyboard, EffectCoverflow } from 'swiper' 
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './VideoGallery.module.css'
import Image from 'next/image'
import { nanoid } from 'nanoid'

/* Function to return image url based on video code passed by db */
const apiUrl = (vid = String) => `https://img.youtube.com/vi/${vid}/hqdefault.jpg`

/* Library carousel component */
const Carousel = ({ videos, handleSelection }) => {

    SwiperCore.use([Keyboard, EffectCoverflow])
    
    return (
        <div className={styles.videoSliderWrapper}>
            <Swiper
                slidesPerView={2.4}
                spaceBetween={20}
                speed={450}
            >
                {
                    // for each video in the array
                    videos.map((vid, i) => {
                        return (
                            //make a thumbnail
                            <SwiperSlide key={nanoid()} className={styles.videoSlide}>
                                
                                {/* which has an image */}
                                <Image 
                                    src={apiUrl(vid.embedCode)} 
                                    onClick={()=>handleSelection(i)}
                                    style={{cursor:'pointer', width:'100%', height:'auto'}}
                                    layout="responsive"
                                    width={480}
                                    height={360}
                                />

                                {/* and an overlay with the title */}
                                <div 
                                    className={styles.vidCarouselInfo}
                                    onClick={()=>handleSelection(i)}    
                                >
                                    {vid.title}
                                </div>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Carousel