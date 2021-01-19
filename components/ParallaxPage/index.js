import SwiperCore, { Keyboard, Parallax, Mousewheel, EffectFade } from 'swiper' 
import { Swiper, SwiperSlide } from 'swiper/react'

const ParallaxPage = ({ folder, image, children }) => {
        
    SwiperCore.use([Keyboard, Parallax, Mousewheel, EffectFade])

    return (
        <Swiper
            direction="vertical"
            speed={1000}
            parallax={true}
            style={{height: 'calc(100vh - 95px)', overflowY: 'hidden'}}
            mousewheel={true}
            effect="fade"
            fadeEffect={{
                crossFade: true
            }}
            keyboard={true}
        >
            <div 
                className="parallax-bg"
                style={{
                    backgroundImage: `url(/img/${folder}/${image})`,
                }}   
                data-swiper-parallax="-10%"
            />
            {children}
        </Swiper>


    )
}

export default ParallaxPage