import SwiperCore, { Keyboard, EffectCoverflow } from 'swiper' 
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './VideoGallery.module.css'
import Image from 'next/image'
import { nanoid } from 'nanoid'

const apiUrl = (vid = String) => `https://img.youtube.com/vi/${vid}/hqdefault.jpg`

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
                    videos.map((vid, i) => {
                        return (
                            <SwiperSlide key={nanoid()} className={styles.videoSlide}>
                                <Image 
                                    src={apiUrl(vid.embedCode)} 
                                    onClick={()=>handleSelection(i)}
                                    style={{cursor:'pointer', width:'100%', height:'auto'}}
                                    layout="responsive"
                                    width={480}
                                    height={360}
                                />
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