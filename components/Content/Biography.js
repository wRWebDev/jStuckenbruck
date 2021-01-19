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


const Content = ({ content }) => {

    const downloadBiog = () => {
        console.log('downloading...')
    }
    
    return (
        <>
            <ParallaxPage image="garden.jpg" folder="pages/about" >
                { 
                    content.map(slide => {
                        switch(slide.type){
                            case 'title':
                                return  (<SwiperSlide className="parallax-slide title-card">
                                            <h1>{slide.title}</h1>
                                            <p>{slide.body}</p>
                                            <img className="struggle-arrow-down" src="/img/house/right-arrow.svg" style={{width:32, height:32, marginTop:30}} />
                                        </SwiperSlide>)
                            case 'quote':
                                return  (<SwiperSlide className="parallax-slide quote">
                                            <h2>{slide.quote}</h2>
                                            <p>{slide.from}</p>
                                        </SwiperSlide>)
                            default:
                                return  (<SwiperSlide className="parallax-slide">
                                            <h2>{slide.title}</h2>
                                            <p>{slide.body}</p>
                                        </SwiperSlide>)
                        }
                    })
                }
                <SwiperSlide 
                    className="parallax-slide title-card"
                >
                    <h1>Press</h1>
                    <p>Click below to download Johann's official biography for promoters and event organisers</p>
                    <button
                        id="download-button"
                        className="light-background"
                        onClick={downloadBiog}
                    >
                        <h4>Download</h4>
                    </button>
                </SwiperSlide>
            </ParallaxPage>
        </>
    )
}

export default Content