const validate = (expectations = Number, name, email, message) => {
    
    const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(!name || !email){
        return false
    }

    if(typeof(name) !== 'string' || typeof(email) !== 'string'){
        return false
    }

    /* Disallow if name < 2, or name > 50 */
    if(name.length < 2 || name.length > 50){
        return false
    }
    /* Disallow if email doesn't match above regex */
    if(!email.match(emailFormat) || email.length > 254){
        return false
    }

    // FIXME: 
    // if(expectations === 2 && message !== undefined){ console.log(message); return false}

    if(expectations === 3){
        if(!message){return false}
        if(typeof(message) !== 'string'){return false}
        /* Disallow if message shorter than 30 chars */
        if(message.length < 30){return false}
    }
    return true
}

export { validate }