/*
    HOMEPAGE CONTENT
        - FullPageCarousel provides full-screen slider with fade effect
        - Wrapped in that is a CTA button, linking to the biog page
*/

import FullPageCarousel from '../FullPageCarousel'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../ContactForm'
import reactStringReplace from 'react-string-replace'
import AOS from 'aos'
import { useEffect } from 'react'

/* 
    Function to wrap any words from inside [square brackets] 
    into <strong> tags 
*/
const highlightBio = string =>
reactStringReplace(string, /\[+(.*?)\]+/g, (match, i) => (
    <strong key={i}>{match}</strong>
))

const Content = ({ content, biography }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    const { images} = content

    const firstPara = biography.body.split('\n')[0]

    return (
        <>
            {/* Hero Section */}
            <FullPageCarousel
                folder="homepage-carousel"
                images={images}
            >
                <div className="scrollDown">
                    <span />
                    <span />
                    <span />
                </div>
            </FullPageCarousel>

            {/* Biography */}
            <section className="homepageSection biog">
                <div 
                    className="image"
                    data-aos="fade-right"    
                >
                    <Image 
                        src={`${process.env.NEXT_PUBLIC_BUCKET}/media/images/closeup.jpg`}
                        layout="responsive"
                        width={250}
                        height={250}
                    />
                </div>
                <article>
                    <h2 data-aos="fade-left">Johann Stuckenbruck</h2>
                    <p data-aos="fade-left">
                        {highlightBio(firstPara)}
                    </p>
                    <div data-aos="fade-up">
                        <Link href="/biography">
                            <button>
                                Read more
                            </button>
                        </Link>
                    </div>
                </article>
                <div 
                    className="scrollDown" 
                    style={{filter: 'invert(1)'}}
                    data-aos="fade-down"
                >
                    <span /><span /><span />
                </div>
            </section>
            
            {/* Next event */}
            <section className="homepageSection event">
                Event here
            </section>
            <section className="homepageSection contact">
                <ContactForm />
            </section>
        </>
    )
}

export default Content