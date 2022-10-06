const url = 'https://api.openweathermap.org/data/2.5/'
const key = '580bd15c147d97b88993aa7a67845729'


const setQuery = (e)=> {
    if(e.keyCode=='13')
        getResult(search.value)
}

const getResult = (cityName) =>{

    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=eng`
    fetch(query)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText=`${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText=`${Math.round(result.main.temp)} °C`

    let desc = document.querySelector('.desc')
    desc.innerText= result.weather[0].description
}


const search=document.getElementById('search')
search.addEventListener('keypress',setQuery)