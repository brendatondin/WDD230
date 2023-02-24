const now = new Date().getTime()

const lastVisited = document.querySelector("#lastVisited")

if (!localStorage.getItem('lastVisit')) {
    localStorage.setItem('lastVisit', now)
} else {
    const lastVisit = localStorage.getItem('lastVisit')

    const timeDiff = now - lastVisit

    const daysDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24))

    lastVisited.textContent = `Days since last visit: ${daysDiff}`

    localStorage.setItem('lastVisit', now)
}