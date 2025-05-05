const iconCode = data.weather[0].icon; // ikonice
const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // adresa ikonica


function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "25cd2a113fc23c0b1fcb15fc305c4ee6";
  
    if (!city) {
      alert("Unesite naziv grada.");
      return;
    }
  // Url API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
  // fetch url
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Grad nije pronadjen");
        }
        return response.json();
      })
      .then(data => {
        const iconCode = data.weather[0].icon; // ikonica
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // url link
      
        const weatherDiv = document.getElementById("weatherResult");
        weatherDiv.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <img src="${iconUrl}" alt="Weather icon">
          <p><strong>Temperatura:</strong> ${data.main.temp} °C</p>
          <p><strong>Vreme:</strong> ${data.weather[0].main}</p>
          <p><strong>Opis:</strong> ${data.weather[0].description}</p>
          <p><strong>Vlaznost vazduha:</strong> ${data.main.humidity}%</p>
        `;
      })
      .catch(error => {
        document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
      });
  }
  