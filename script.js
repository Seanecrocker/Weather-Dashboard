const apiKey = "e36b4c1f95b93d08f0cf7c2e3bb2deab";
const formEl = document.getElementById("formEl"); //Html line 15
const searchBtn = document.getElementById("searchBtn");
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
        console.log(data);
        })

}

formEl.addEventListener(`submit`, function(event) {
    event.preventDefault(); 
    const cityName = search.value
    apiCall(cityName)
})