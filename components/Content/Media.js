import CoverFlowCarousel from '../CoverFlowCarousel'
import VideoGallery from '../VideoGallery'
import firebase from '../../db/firebase'
import { useCollectionDataOnce } from 'react-firebase-hooks/firestore'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const Content = ({ content }) => {

    /* Returns array of 2 documents: images & videos */
    const mediaQuery = firebase.firestore().collection('media').limit(2)
    const [ media ] = useCollectionDataOnce(mediaQuery, { idField: 'id' })

    const { title, body } = content
    
    const topOfVids = useRef(3000)
    let darkTheme = false

    useLayoutEffect(()=>{
        window.addEventListener('scroll', () => {
            setInterval(()=>{
                if(!darkTheme && (window.scrollY > topOfVids.current)){         
                    document.querySelector('header').style.color = "#fff"
                    document.querySelector('header').style.background = "rgba(0,0,0,0.5)"
                    darkTheme = true
                }else if(darkTheme && (window.scrollY <= topOfVids.current)){
                    document.querySelector('header').style.color = "#000"
                    document.querySelector('header').style.background = "rgba(255,255,255,0.5)"
                    darkTheme = false
                }
            }, 200)
        })
    }, [])

    useEffect(()=>{
        if(media){
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