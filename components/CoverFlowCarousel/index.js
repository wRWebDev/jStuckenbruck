const images = [
    'besancon1.jpg',
    'besancon2.jpg',
    'besancon3.jpg',
    'besancon4.jpg',
    'besancon5.jpg',
    'headshot1.jpg',
    'headshot2.jpg'
]
const folder = 'gallery'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Keyboard, Autoplay, EffectCoverflow } from 'swiper' 
import Image from 'next/image'

const CoverFlowCarousel = ({ }) => {

    SwiperCore.use([Keyboard, EffectCoverflow])

    return (
        <Swiper
            effect="coverflow"
            slidesPerView={1.8}
            coverflowEffect={{
                rotate: 45,
                modifier: 1,
                slideShadows: true,
                depth: 1000

            }}
            loop={true}
            loopedSlides={images.length}
            keyboard={true}
            speed={450}
        >
            {
                images.map(img => (
                    <SwiperSlide>
                        <Image
                            src={`/img/${folder}/${img}`}
                            layout="responsive"
                            width={700}
                            height={500}
                            objectFit="cover"
                            objectPosition="center"
                            className="loading-background"
                        />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )

}

export default CoverFlowCarousel