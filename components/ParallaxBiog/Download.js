/*
    Request an up-to-date biog
        - Simple contact form, email address only
        - Sends email to client requesting up-to-date emails
        - Hits api endpoint 'bio-request'
*/

import { useState } from 'react'
import styles from './styles/ParallaxBiog.module.css'
import axios from 'axios'

export default function Download({ coverImage }){

    const [ buttonOpen, setButtonOpenTo ] = useState(false)
    const [ email, setEmailTo ] = useState('')
    const [ userText, setUserTextTo ] = useState('Request')
    const [ error, setErrorTo ] = useState('')
    const [ disableButton, setDisableButtonTo ] = useState(false)

    const sendRequest = () => {
        setButtonOpenTo(false)
        setUserTextTo('Sending...')
        axios.post('/api/bio-request', {email})
            .then(() => {
                setUserTextTo('Request Sent!')
                setTimeout(()=>{
                    setDisableButtonTo(true)
                }, 2000)
            })
            .catch(() => {
                setUserTextTo('Oops...')
                setErrorTo('Something went wrong. Please try again later.')
                setTimeout(()=>{
                    setUserTextTo('Request')
                }, 3000)
            })
    }

    return (
        <section
            id="biogDownload"
            className={`${styles.biogSection} ${styles.downloadSection}`}
            // FIXME: Cross-site script issue when using fast-average-color
            // Error info at https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
            // Homepage: https://github.com/fast-average-color/fast-average-color
            // style={{background:'#546A47'}}
        >
            <img src={`${process.env.NEXT_PUBLIC_BUCKET}/media/images/closeup.jpg`} />
            <div className={styles.downloadText}>
                <h2>Need an up to date biography?</h2>
                <p>Please remember that permission should be sought before reproducing Johann's biography in promotional materials, digital or printed.</p>
                <p>Use the button below to send a request for Johann's most up-to-date biography, and consent to distribute.</p>
                <div
                    className={styles.requestButton}
                    onClick={() => {if(!buttonOpen){setButtonOpenTo(!buttonOpen)}}}
                    style={buttonOpen ? {} : {cursor: 'pointer'}}
                    style={disableButton ? {display: 'none'} : {}}
                >
                    {
                        buttonOpen && !disableButton
                            ? <>
                                <input 
                                    type="email"
                                    value={email}
                                    onChange={e=>{setEmailTo(e.target.value)}}
                                    placeholder="Enter your email address"
                                />
                                <button
                                    onClick={()=>{sendRequest()}}
                                >
                                    Request
                                </button>
                            </>
                            : userText
                    }
                </div>
                {error ? <h5>{error}</h5> : ''}
            </div>
        </section>
    )
}