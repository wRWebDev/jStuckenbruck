import SwiperCore, { Keyboard, Autoplay, EffectFade } from 'swiper' 
import { Swiper, SwiperSlide } from 'swiper/react'
import { nanoid } from 'nanoid'


SwiperCore.use([Keyboard, Autoplay, EffectFade])
const FullPageCarousel = ({ folder, images }) => {
    return (
        <Swiper
            loop={true}
            loopedSlides={images.length}
            slidesPerView={1}
            keyboard={{
                enabled:true
            }}
            autoplay={{
                delay: 4000
            }}
            effect="fade"
            speed={1500}
        >
        {
            images.map(img => (
                <SwiperSlide 
                    key={nanoid()}
                    style={{
                        width: '100%',
                        height: 'calc(100vh - 95px)',
                        backgroundImage: `url(img/${folder}/${img})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                />
            ))
        }
        </Swiper>
    )
}

export default FullPageCarousel