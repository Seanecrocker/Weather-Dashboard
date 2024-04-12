const apiKey = "e36b4c1f95b93d08f0cf7c2e3bb2deab";
const formEl = document.getElementById("formEl"); //Html line 15
const search = document.getElementById("search"); //Html line 18
const resultsDiv = document.getElementById("results");

function apiCall(param) {
   const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${param}&appid=${apiKey}`
   console.log(apiUrl);
   
   fetch(apiUrl).then(function(response){
    console.log(response);
    return response.json();
    })
    .then(function(data) {
        console.log(data)
        const list = data.list
        const currentDay = list[0].dt_txt
        const date = currentDay.split(` `)
        const time = date[1]

        const filteredList = list.filter((day)=>{
            return day.dt_txt.split(" ") [1] === time;
        });
            filteredList.push(list[list.length-1])

        console.log(filteredList)
        for (let index = 0; index < filteredList.length; index++) {
            const element = filteredList[index];
            console.log(element)
            
            const resultsDiv = document.querySelector('#result')
            const weatherInfo = document.createElement("div");

const weatherBox = document.querySelector('.weather-box');

const temperatureElement = document.createElement('p');
const humidityElement = document.createElement('p');
const windSpeedElement = document.createElement('p');

temperatureElement.textContent = `Temperature: ${element.main.temp}`;
humidityElement.textContent = `Humidity: ${element.main.humidity}`;
windSpeedElement.textContent = `Wind Speed: ${element.wind.speed}`;

weatherBox.appendChild(temperatureElement);
weatherBox.appendChild(humidityElement);
weatherBox.appendChild(windSpeedElement);
    }
  })
}

formEl.addEventListener(`submit`, function(event) {
    event.preventDefault(); 
    const cityName = search.value
    apiCall(cityName)
})