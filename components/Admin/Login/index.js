import { useState } from 'react'
import { TextyInput, Button } from '../FormElements'
import styles from './styles/login.module.css'

const Login = ({ handleLogin }) => {
    
    const [ email, setEmailTo ] = useState('')
    const [ password, setPasswordTo ] = useState('')
    
    return (
        <div className={styles.loginPageWrapper}>
            <div className={styles.loginPageInner}>
                <form onSubmit={e => handleLogin(e, email, password)}>
                    <img src="/wrwebdev.svg" />
                    <TextyInput 
                        type="email"
                        changeHandler={e => {setEmailTo(e.target.value)}}
                        value={email}
                        name="email"
                        label=""
                        placeholder="Username"
                        autoComplete="email"
                        />
                    <TextyInput 
                        type="password"
                        changeHandler={e => {setPasswordTo(e.target.value)}}
                        value={password}
                        name="password"
                        label=""
                        placeholder="Password"
                        autoComplete="current-password"
                        />
                    <Button 
                        type="submit"
                        text="Sign in"
                        />
                </form>
            </div>
        </div>
    )
}

export default Login