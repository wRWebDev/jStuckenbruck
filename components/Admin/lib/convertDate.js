const convertDate = date => (new Date(date).toLocaleDateString('en-GB', { 
    day: 'numeric',
    month: 'short',
    year: '2-digit'
}))

export { convertDate }