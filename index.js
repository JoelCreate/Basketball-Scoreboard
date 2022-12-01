let home = document.getElementById("homePoints")
let guest = document.getElementById("guestPoints")
//let newGameTotal = document.getElementById("newGame")

let totalHome = 0
let totalGuest = 0
let newTotal = 0

// Home Team
function plusOneHome() {
    totalHome += 1
    home.textContent = totalHome
}

function plusTwoHome() {
    totalHome += 2
    home.textContent = totalHome
}

function plusThreeHome() {
    totalHome += 3
    home.textContent = totalHome
}

//Guest Team
function plusOneGuest() {
    totalGuest += 1
    guest.textContent = totalGuest
}

function plusTwoGuest() {
    totalGuest += 2
    guest.textContent = totalGuest
}

function plusThreeGuest() {
    totalGuest += 3
    guest.textContent = totalGuest
}

function newGame() {
    totalHome = 0
    totalGuest = 0
    home.textContent = totalHome
    guest.textContent = totalGuest
}


