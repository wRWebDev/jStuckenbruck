/*
    CONTACT PAGE CONTENT
        - Displays the title and body content from the db
        - Uses the ContactForm module

    TODO: Social Media Icons
*/

const listStyle = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '30pt'
}

const listItemStyle = {
    width: 48,
    height: 48,
    marginRight: 10
}

import ContactForm from '../ContactForm'
import { socialMediaLinks } from '../lib/socialMediaLinks'
import { useEffect } from 'react'

const Content = ({ content }) => {

    const { title, body } = content

    /* Draw social media icons */
    useEffect(() => {
        document.querySelectorAll('.contact-sm-list')
            .forEach((container, i) => {
                container.innerHTML = socialMediaLinks[i].icon
                container.querySelector('svg').style.width = 48
                container.querySelector('svg').style.height = 48
            })
    }, [])

    return (
        <>
            <div className="normal-page-wrapper">

                {/* Title & content */}
                <h1>{title}</h1>
                <p>{body}</p>

                {/* Contact form */}
                <ContactForm />

                {/* Social media links */}
                <h2 style={{marginTop: '20pt'}}>Social Media</h2>
                <p>Follow Johann on social media, using the links below:</p>
                <ul style={listStyle}>
                {
                    socialMediaLinks.map((link, i) => (
                        <li key={i} style={listItemStyle}>
                            <a 
                                href={link.link}
                                className="contact-sm-list"
                            />
                        </li>
                    ))
                }
                </ul>
            </div>
        </>
    )
}

export default Content