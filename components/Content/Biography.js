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

    const downloadBiog = () => {
        console.log('downloading...')
    }

    return (
        <>
            <ParallaxPage image="garden.jpg" folder="pages/about" >
                <SwiperSlide 
                    className="parallax-slide title-card"
                >
                    <h1>Biography</h1>
                    <p>In demand in both the Opera House and Concert Hall, American/British Conductor Johann Stuckenbruck is a regular assistant conductor at Glyndebourne and guest conductor with the San Diego Symphony.</p>
                    <img className="struggle-arrow-down" src="/img/house/right-arrow.svg" style={{width:32, height:32, marginTop:30}} />
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide"
                >
                    <h2>Future Engagements</h2>
                    <p>Future engagements include concerts with the San Diego Symphony, the Salomon Orchestra, and will assist on a production of Donizetti's 'Lucrezia Borgia' at Opera de Tenerife. Johann will also assist Robin Ticciati at the Glyndebourne Festival on Janacek's 'Kat'a Kabanova', make his Glyndebourne Tour debut conducting Mozart's 'Die Zauberflöte', and will conduct the world premiere of Glyndebourne's 'Balancing the Score' commission 'Pay the Piper'.</p>
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide"
                >
                    <h2>Education</h2>
                    <p>Recipient of the ASRAM Prize, Johann graduated with distinction in Orchestral Conducting from the Royal Academy of Music. Upon graduating, Johann was second conductor to Sir Mark Elder and the Hallé Orchestra performing Berlioz's 'La Damnation de Faust' at the 2017 Edinburgh Festival and made successive debuts as a guest conductor with the Hallé Orchestra at Bridgewater Hall and the Royal Northern Sinfonia at the Northern Aldborough Festival.</p>
                    <p>While at the Royal Academy of Music, Johann studied with Sian Edwards and participated in masterclasses with Martyn Brabbins and Mark Stringer. He regularly assisted guest conductors including Sir Mark Elder, Edward Gardner, Manuel Lopez-Gomez and Semyon Bychkov. Abroad, Johann received mentorship from Daniele Gatti, Marin Alsop, Giancarlo Guerrero, Arvo Volmer and Neil Thompson.</p>
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide quote"
                >
                    <h2>Johann Stuckenbruck directed his large, virtuoso orchestra with inspirational drive, maintaining strict, rhythmic unanimity between stage and pit.</h2>
                    <p>Opera Magazine</p>
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide"
                >
                    <h2>Opera</h2>
                    <p>In opera, Johann made his Bloomsbury Theatre debut conducting Kurt Weill's 'The Tsar Has His Photograph Taken' and was assistant to Rafael Payare on Rossini's 'Il barbiere di Siviglia' at the Glyndebourne Festival and Leo McFall on Opera North's acclaimed production of Britten's 'Turn of the Screw'. He also conducted in the world premieres of Joanna Lee's vast community opera 'No Sound Ever Dies' at the Brooklands Museum and Lewis Murphy's 'Belongings' at Glyndebourne.</p>
                </SwiperSlide>
                <SwiperSlide 
                    className="parallax-slide"
                >
                    <h2>Orchestral</h2>
                    <p>Johann was rehearsal conductor for Mathieu Herzog at the inaugural Blaricum Festival in the Netherlands and has performed at the Campos do Jordão Festival in São Paulo. He has also acted as cover conductor for the San Diego Symphony.</p>
                    <p>As well as assisting concerts and recordings with the London Symphony Orchestra, London Philharmonic Orchestra, and Philharmonia, Johann has also recorded and performed numerous world premieres of works by Rob Keeley, Sophia Polevaya, Steve Pickett, Matthew Olyver, Tim Bowers and Robin Haigh among others and recorded the score to the multi award-winning short film 'DIVA' by Vasilis Alevizos, which received debuts at the LA Film Festival, Milan Film Festival and the British Film Institute.</p>
                </SwiperSlide>
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