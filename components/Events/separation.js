/* Function to separate out each performance into a new event */
const separatePerformances = (list, future) => {
    let currentYear = 0
    const newList = []
    list.forEach(uniqueEvent => {
        uniqueEvent.performances.forEach(performance => {
            const thisYear = new Date(performance.seconds * 1000).getFullYear()
            if(thisYear !== currentYear){
                newList.push({
                    type: 'year',
                    year: thisYear,
                    performanceDate: new Date(`January 1, ${thisYear} 00:00:00`).getTime() / 1000
                })
            }
            // Add a new event card
            newList.push({
                type: 'event',
                performanceDate: performance.seconds,
                ...uniqueEvent
            })

            // Update what the current year is
            currentYear = thisYear
        })
    })
    // return in order of each individual performance
    const now = parseInt(new Date().getTime() / 1000)
    return newList
        .filter(a => {
            return future 
                ? a.performanceDate >= now
                : a.performanceDate < now
        })
        .sort((a,b)=>{
            return a.performanceDate - b.performanceDate
        })
}

export { separatePerformances }