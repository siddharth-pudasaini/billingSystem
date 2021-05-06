//Highlighting the current location in navbar

let navbar = document.querySelector('.navbar');
let sideMenu = document.querySelector('.sideMenu');
let addRoomForm = document.querySelector('.addRoomForm');
let time = document.querySelector('.time');

navbar.innerHTML += `<a href="/">Home</a>
    <a href="/checkIn">CheckIn</a>
    <a href="/bill">Manage Bill</a>
    <a href="/checkOut">Check Out</a>
     `;

if (sideMenu !== null)
    sideMenu.innerHTML += `<div class='sideMenuItem'>
        <a href='/addRoom'>Add Room</a>
      </div>
      <div class='sideMenuItem'>
        <a href='/singleRoomStatus'>Room Status</a>
      </div>`;

let navItems = document.querySelectorAll('a');
navItems.forEach((item) => {
    let currentWindowLocation = window.location.href;
    let linkWindowLocation = item.href;
    if (currentWindowLocation === linkWindowLocation) {
        item.style.backgroundColor = 'red';
    }
});

setInterval(() => {
    time.innerText = new Date();
}, 1000);

let weatherData = {};

const weather = async () => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Tikapur&appid=e01d252a9077395e7ffcfcc54e01d447`
        );
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

weather().then((data) => (weatherData = data));
console.log(weatherData);

// let loggedInStatus = sessionStorage.getItem('loggedInStatus')

// if (loggedInStatus === null || loggedInStatus === false) {
//     alert("You are not logged in. Please login to continue")
//     window.location.replace('http://localhost:8000/loginPage')
// }
