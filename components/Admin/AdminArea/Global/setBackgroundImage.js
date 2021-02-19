export const setBackgroundImage = () => {
    const body = document.querySelector('body')
    body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1502&q=80)'
    body.style.backgroundPosition = 'center'
    body.style.backgroundSize = 'cover'
    body.style.backgroundRepeat = 'no-repeat'
    body.style.backgroundAttachment = 'fixed'
    body.style.minHeight = '100vh'
}