import { urlAlphabet } from 'nanoid'
import SwiperCore, { Keyboard } from 'swiper' 
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './VideoGallery.module.css'
import { useLayoutEffect, useState, useRef } from 'react'
import mitt from 'next/dist/next-server/lib/mitt'

const apiUrl = (vid = String) => `https://img.youtube.com/vi/${vid}/hqdefault.jpg`


const Carousel = ({ images, handleSelection }) => {

    SwiperCore.use([Keyboard])

    console.log(images)

    const [ numberOfThumbnails, setNumberOfThumbnailsTo ] = useState(4)

    useLayoutEffect(()=>{
        window.addEventListener('resize', ()=>{
            if((numberOfThumbnails !== 4) && (window.innerWidth > 920)){
                setNumberOfThumbnailsTo(4)
            }else if((numberOfThumbnails !== 3) && (window.innerWidth <= 920) && (window.innerWidth > 600)){
                setNumberOfThumbnailsTo(3)            
            }else if((numberOfThumbnails !== 2) && (window.innerWidth <= 600)){
                setNumberOfThumbnailsTo(2)            
            }
        })
    }, [])

    return (
        <div className={styles.videoSliderWrapper}>
            <Swiper
                slidesPerView={numberOfThumbnails}
                spaceBetween={20}
                // watchOverflow={true}
            >
                {
                    images.map((img, i) => {
                        console.log(img)
                        return (
                            <SwiperSlide>
                                <img 
                                    src={apiUrl(img)} 
                                    onClick={()=>handleSelection(i)}
                                    style={{cursor:'pointer', width:'100%', height:'auto'}}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Carousel