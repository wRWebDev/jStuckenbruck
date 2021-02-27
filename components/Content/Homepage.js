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
import NextEvent from './HeroPage/NextEvent'

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
            duration: 600
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
                    <span /><span /><span />
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
                    data-aos="fade-down"
                >
                    <span /><span /><span />
                </div>
            </section>
            
            {/* Next event */}
            <section className="homepageSection event">
                <div 
                    className="image"
                    data-aos="fade-left"    
                >
                    <Image 
                        src={`${process.env.NEXT_PUBLIC_BUCKET}/media/images/concerthall.jpg`}
                        layout="responsive"
                        width={250}
                        height={250}
                    />
                </div>
                <div data-aos="fade-right">
                    <h2>Next Performance</h2>
                    <NextEvent />
                    <div data-aos="fade-up">
                        <Link href="/schedule">
                            <button>
                                See more
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact form */}
            <section className="homepageSection contact">
                <h2 data-aos="fade-up">Get in touch</h2>
                <ContactForm />
            </section>
        </>
    )
}

export default Content