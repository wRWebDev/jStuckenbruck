import axios from 'axios'
import { useState, useEffect } from 'react'
import styles from './contactForm.module.css'

const ContactForm = () => {

    const [ name, setNameTo ] = useState('')
    const [ email, setEmailTo ] = useState('')
    const [ message, setMessageTo ] = useState('')
    const [ userFeedback, setUserFeedbackTo ] = useState('')
    const [ sent, setSentTo ] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        setUserFeedbackTo('Sending your message to Johann...')
        const details = {name, email, message}
        await axios.post('/api/contact-form-mailer/admin', details)
        setUserFeedbackTo('Sending you a confirmation message...')
        await axios.post('/api/contact-form-mailer/client', details)
        setUserFeedbackTo('Thank you for your message.\nYou should hear back from Johann soon.')
        setSentTo(true)
    }

    useEffect(()=>{
        if(sent){
            setNameTo('')
            setEmailTo('')
            setMessageTo('')
        }
    }, [sent])

    return (
        <>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={e=>setNameTo(e.target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="text"
                        placeholder="email@address.com"
                        value={email}
                        onChange={e=>setEmailTo(e.target.value)}
                    />
                </label>
                <label className={styles.doubleWidth}>
                    Message
                    <textarea
                        rows={8}
                        placeholder="Type your message to Johann here..."
                        value={message}
                        onChange={e=>setMessageTo(e.target.value)}
                    />
                </label>

                <p className={styles.doubleWidth} style={userFeedback === '' ? {display: 'none'} : {}}>{userFeedback}</p>
                
                <button
                    type="submit"
                    disabled={userFeedback ? true : false}
                    style={userFeedback ? {cursor: 'not-allowed'} : {cursor: 'pointer'}}
                    className={styles.doubleWidth}
                >
                    Send
                </button>
            </form>
        </>
    )
}

export default ContactForm