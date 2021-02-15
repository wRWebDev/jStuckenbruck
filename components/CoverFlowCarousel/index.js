import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Keyboard, Mousewheel, EffectCoverflow, Controller, Autoplay, Navigation } from 'swiper' 
import Image from 'next/image'
import styles from './styles.module.css'
import { RemoveScroll } from 'react-remove-scroll';
import { useState } from 'react'
import { nanoid, urlAlphabet } from 'nanoid'


const CoverFlowCarousel = ({ images }) => {

    const [ mainSwiper, setMainSwiperTo ] = useState(null)
    const [ fullScreenSwiper, setFullScreenSwiperTo ] = useState(null)
    const [ showingFullscreen, setShowingFullscreenTo ] = useState(false)

    const toggleFullscreen = () => {
        // context.toggleShowingHeader()
        setShowingFullscreenTo(!showingFullscreen)
    }

    SwiperCore.use([Keyboard, Mousewheel, EffectCoverflow, Controller, Autoplay, Navigation])

    return (
        <>
            <div className={styles.moduleWrapper}>
                <Swiper
                    effect="coverflow"
                    slidesPerView={1.5}
                    coverflowEffect={{
                        rotate: 45,
                        modifier: 1,
                        slideShadows: true,
                        depth: 1000
                    }}
                    autoplay={{
                        delay: 2500
                    }}
                    loop={true}
                    loopedSlides={images.length}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true
                    }}
                    speed={450}
                    mousewheel={{
                        forceToAxis: true
                    }}
                    onSwiper={setMainSwiperTo}
                    controller={{ control: fullScreenSwiper }}
                    className="black-and-white"
                >
                    {
                        images.map(img => (
                            <SwiperSlide key={nanoid()}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BUCKET}/media/images/${img.src}`}
                                    layout="responsive"
                                    width={1400}
                                    height={1280}
                                    objectFit="cover"
                                    objectPosition="center"
                                    className="loading-background"
                                    onClick={toggleFullscreen}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/* Fullscreen */}
            {
                <RemoveScroll enabled={showingFullscreen ? true : false}>
                    {
                        <div 
                            className={styles.fullScreenLightbox} 
                            style={ !showingFullscreen ? { display: 'none' } : {} }
                        >
                            <div className={`${styles.fullScreenInnerWrapper}`}>
                                <Swiper
                                    onSwiper={setFullScreenSwiperTo}
                                    controller={{control: mainSwiper}}
                                    slidesPerView={1}
                                    loop={true}
                                    loopedSlides={images.length}
                                    grabCursor={true}
                                    style={{width:'100vw !important', height:'100vh !important', marginLeft: '0 !important'}}
                                    className="fullscreen"
                                    preloadImages={false}
                                    navigation
                                >
                                    {
                                        images.map(img => (
                                            <SwiperSlide 
                                                key={nanoid()}
                                                className="dark-background"
                                                style={{
                                                    width: '100vw', 
                                                    height: '100vh',
                                                    backgroundImage: `url(${process.env.NEXT_PUBLIC_BUCKET}/media/images/${img.src})`,
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'contain',
                                                    backgroundRepeat: 'no-repeat'
                                                }}
                                            >
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <button 
                                className={styles.fullScreenCloseButton} 
                                onClick={toggleFullscreen}
                            >
                                <div />
                                <div />
                            </button>
                        </div>
                    }
                </RemoveScroll>
            }
        </>
    )

}

export default CoverFlowCarousel