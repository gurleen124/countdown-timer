const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 11, 11, 30, 0);

let year = futureDate.getFullYear();
let month = futureDate.getMonth();
let date = futureDate.getDate();
let hours = futureDate.getHours();
let mins = futureDate.getMinutes();
let weekday = futureDate.getDay();

month = months[month];
weekday = weekdays[weekday];

let giveaway = document.getElementById("giveaway");
giveaway.innerText = `Giveaway Ends On ${weekday}, ${date} ${month} ${year} ${hours}:${mins}am`;

const items = document.querySelectorAll(".deadline-format h4");
const futureTime = futureDate.getTime();

function getRemainingTime() {
    
    const today = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSec = 1000;

    let remainingTime = futureTime - today;
    console.log(remainingTime);

    let d = Math.floor(remainingTime / oneDay);
    daysLeft.innerText = `${d}`;
    let h = Math.floor((remainingTime % oneDay) / oneHour);
    hoursLeft.innerText = `${h}`;
    let m = Math.floor(((remainingTime % oneDay) % oneHour) / oneMinute);
    minsLeft.innerText = `${m}`;
    let s = Math.floor((((remainingTime % oneDay) % oneHour) % oneMinute) / oneSec)
    secsLeft.innerText = `${s}`;
}

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();








