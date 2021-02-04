import CoverFlowCarousel from '../CoverFlowCarousel'
import VideoGallery from '../VideoGallery'
import firebase from '../../db/firebase'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { useEffect, useLayoutEffect, useRef } from 'react'

const Content = ({ content }) => {

    /* Returns array of 2 documents: images & videos */
    const mediaQuery = firebase.firestore().collection('media').limit(2)
    const [ media ] = useCollectionDataOnce(mediaQuery, { idField: 'id' })

    const { title, body } = content
    
    const topOfVids = useRef(3000)
    const darkTheme = useRef(false)
    const header = document.querySelector('header')

    useLayoutEffect(()=>{
        window.addEventListener('scroll', () => {  
            if(window.scrollY > topOfVids.current){         
                header.style = {background: 'rgba(0,0,0,0.4)', color: '#fff'}
            }else if(window.scrollY <= topOfVids.current){
                header.style = {background: 'rgba(255,255,255,0.5)', color: '#000'}
            }
        })
    }, [])

    useEffect(()=>{
        if(media){
            // header = document.querySelector('header')
            topOfVids.current = document.getElementById('videoGallery').offsetTop
        }
    },[media])

    return (
        <>
            <div className="normal-page-wrapper">
                <h1>{title}</h1>
                <p>{body}</p>
                {/* <h2 style={{marginTop: '20pt'}}>Photo Gallery</h2> */}
                {
                    media 
                        ?   <>
                                <CoverFlowCarousel images={media[0].gallery} />
                                <VideoGallery videos={media[1].gallery} />
                            </>
                        : ''
                }
            </div>
        </>
    )
}

export default Content