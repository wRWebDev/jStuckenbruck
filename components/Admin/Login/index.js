import { useState } from 'react'

const Login = ({ handleLogin }) => {
    
    const [ email, setEmailTo ] = useState('')
    const [ password, setPasswordTo ] = useState('')
    
    return (
        <form onSubmit={e => handleLogin(e, email, password)}>
            <input 
                name="email"
                type="email"
                value={email}
                onChange={e => {setEmailTo(e.target.value)}}
            />
            <input 
                name="password"
                type="password"
                value={password}
                onChange={e => {setPasswordTo(e.target.value)}}
            />
            <button type="submit">Log in</button>
        </form>
    )
}

export default Login