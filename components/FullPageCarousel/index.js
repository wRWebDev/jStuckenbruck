import SwiperCore, { Keyboard, Autoplay, EffectFade } from 'swiper' 
import { Swiper, SwiperSlide } from 'swiper/react'
import { nanoid } from 'nanoid'


SwiperCore.use([Keyboard, Autoplay, EffectFade])
const FullPageCarousel = ({ folder, images, children }) => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                marginTop: '-95px'
            }}
        >
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
                            height: '100vh',
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_BUCKET}/media/images/${img})`,
                            backgroundPosition: 'center top',
                            backgroundSize: 'cover'
                        }}
                    />
                ))
            }
            { children }
            </Swiper>
        </div>
    )
}

export default FullPageCarousel