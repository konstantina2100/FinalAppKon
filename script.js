let nowDay = document.querySelector("#now-day");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
nowDay.innerHTML = `${day}`;
let nowDate = document.querySelector("#now-date");
let date = now.getDate();
let months = [
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
  "December"
];
let month = months[now.getMonth()];
let year = now.getFullYear();
nowDate.innerHTML = `${date} ${month} ${year}`;
let nowTime = document.querySelector("#now-time");
let hour = now.getHours();
let minute = now.getMinutes();
nowTime.innerHTML = `${hour}:${minute}`;
//
//
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let nowCity = document.querySelector("#now-city");
  nowCity.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
//
//
function changeCelsius(event) {
  event.preventDefault();
  let celsius = document.querySelector("#final-degree");
  celsius.innerHTML = `15 °C in
  Athens`;
}
let celsiusDegree = document.querySelector("#celsius-degree");
celsiusDegree.addEventListener("click", changeCelsius);
//
function changeFarenait(event) {
  event.preventDefault();
  let farenait = document.querySelector("#final-degree");
  farenait.innerHTML = `66 °F in
  Athens`;
}
let farenaitDegree = document.querySelector("#farenait-degree");
farenaitDegree.addEventListener("click", changeFarenait);
