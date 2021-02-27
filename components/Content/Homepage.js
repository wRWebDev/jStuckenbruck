/*
    HOMEPAGE CONTENT
        - FullPageCarousel provides full-screen slider with fade effect
        - Wrapped in that is a CTA button, linking to the biog page
*/

import FullPageCarousel from '../FullPageCarousel'
import Link from 'next/link'
import ContactForm from '../ContactForm'
import reactStringReplace from 'react-string-replace'
import AOS from 'aos'
import { useEffect } from 'react'
import { NextEvent, ScrollAnimation, SectionImage, Button } from '../HeroPage'

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
                <ScrollAnimation />
            </FullPageCarousel>

            {/* Biography */}
            <section className="homepageSection biog">
                <SectionImage
                    img={`${process.env.NEXT_PUBLIC_BUCKET}/media/images/closeup.jpg`}
                    direction="right"
                />
                <article>
                    <h2 data-aos="fade-left">Johann Stuckenbruck</h2>
                    <p data-aos="fade-left">
                        {highlightBio(firstPara)}
                    </p>
                    <Button 
                        link="/biography"
                        text="Read more"
                    />
                </article>
                <ScrollAnimation />
            </section>
            
            {/* Next event */}
            <section className="homepageSection event">
                <SectionImage
                    img={`${process.env.NEXT_PUBLIC_BUCKET}/media/images/concerthall.jpg`}
                    direction="left"
                />
                <div 
                    data-aos="fade-right" 
                    className="eventInfo"
                >
                    <h2>Next Performance</h2>
                    <NextEvent />
                    <Button 
                        link="/schedule"
                        text="See more"
                    />
                </div>
                <ScrollAnimation inverted={true} />
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