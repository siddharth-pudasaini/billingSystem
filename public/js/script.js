//Highlighting the current location in navbar
let navItems = document.querySelectorAll('a');
navItems.forEach((item) => {
    let currentWindowLocation = window.location.href;
    let linkWindowLocation = item.href;
    if (currentWindowLocation === linkWindowLocation) {
        item.style.backgroundColor = 'red';
    }
});

// let loggedInStatus = sessionStorage.getItem('loggedInStatus')

// if (loggedInStatus === null || loggedInStatus === false) {
//     alert("You are not logged in. Please login to continue")
//     window.location.replace('http://localhost:8000/loginPage')
// }
