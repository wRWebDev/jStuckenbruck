import ParallaxPage from '../ParallaxPage'
import { SwiperSlide } from 'swiper/react'

const titleSlide = {
    minHeight: '90%',
    width: '66%',
    background: '#435733',
    color: '#fff',
    textAlign: 'center',
    padding: '50px'
}

const Content = () => {
    return (
        <>
            <ParallaxPage image="garden.jpg" folder="pages/about" >
                <SwiperSlide 
                    className="parallax-slide title-card"
                >
                    <h1>Biography</h1>
                    <p>Scroll to find out about Johann</p>
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide"
                >
                    <h2>Education</h2>
                    <p>Growing up in the USA, Germany, England and France, I had the upbringing of a spy!</p>
                    <p>But then I went to the Royal Academy, so that was pretty much the end of that...</p>
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide"
                >
                    <h2>Resaons I'm awesome</h2>
                    <p>I've got a lot of patience for people who dick me around with my website and don't answer their phones</p>
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide quote"
                >
                    <h2>Fucking awesome conducting, 5 sh*tting *s!</h2>
                    <p>The Guardian, 2023</p>
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide"
                >
                    <h2>In the pipepline</h2>
                    <p>I've got a lot going on in the future... I hope... If we're all still alive for the future!</p>
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide"
                >
                    <h2>Dreams &amp; Aspirations!</h2>
                    <p>I have a career after all of this is said and done.</p>
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide title-card"
                >
                    <h1>Press</h1>
                    <p>Click below to download Johann's official biography for promoters and event organisers</p>
                </SwiperSlide>
            </ParallaxPage>
        </>
    )
}

export default Content