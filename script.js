const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
console.log(weatherBox);
console.log(weatherDetails);

search.addEventListener('click', () => {

    console.log("clicked");
    const APIKey = '6118437796fbd3677670213e87c74afb';
    const city = document.querySelector('.search-box input').value;
    

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6118437796fbd3677670213e87c74afb`).then(response => response.json()).then(json => {
        console.log(city);
        console.log(json);
        if (json.cod == '404'){
            container.style.height = '400px';
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        container.style.height = '555px';
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weatherBox .temperature');
        const description = document.querySelector('.weatherBox .description');
        const humidity = document.querySelector('.weatherDetails .humidity span');
        const wind = document.querySelector('.weatherDetails wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png'
                break;

            case 'Rain':
                image.src = 'images/rain.png'
                break;

            case 'Snow':
                image.src = 'images/snow.png'
                break;

            case 'Clouds':
                image.src = 'images/cloud.png'
                break;

            case 'Mist':
                image.src = 'images/mist.png'
                break;

            case 'Haze':
                image.src = 'images/mist.png'
                break;

            default:
                image.src = 'images/cloud.png';
        }

        temperature.textContent = `${parseInt(json.main.temp)}`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`; 
    });

});