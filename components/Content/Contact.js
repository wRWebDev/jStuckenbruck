/*
    CONTACT PAGE CONTENT
        - Displays the title and body content from the db
        - Uses the ContactForm module
*/

import ContactForm from '../ContactForm'

const Content = ({ content }) => {

    const { title, body } = content

    return (
        <>
            <div className="normal-page-wrapper">
                <h1>{title}</h1>
                <p>{body}</p>
                <ContactForm />
                <h2 style={{marginTop: '20pt'}}>Social Media</h2>
                <p>Follow Johann on social media, using the links below:</p>
            </div>
        </>
    )
}

export default Content