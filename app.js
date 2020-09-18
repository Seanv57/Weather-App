let loc = document.getElementById("location");
let tempIcon = document.getElementById("icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let iconFile;
window.addEventListener("load", () => {
  let lon;
  let lat;

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=67b986cb0b996a3bc4ef6c908ae25e75`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then(data => {
          const {name} = data;
          const {temp} = data.main;
          const {id, main} = data.weather[0];
          loc.innerHTML = name;
          climate.innerHTML = main;
          tempValue.innerHTML = Math.round((temp * (9/5))-459.67);
          if (id < 250) {
            tempIcon.src = 'icons/11d.png'
          } else if (id < 350){
            tempIcon.src = 'icons/09d.png'
          } else if (id < 510){
            tempIcon.src = 'icons/10d.png'
          } else if (id < 519){
            tempIcon.src = 'icons/13d.png'
          } else if (id < 550){
            tempIcon.src = 'icons/09d.png'
          } else if (id < 650){
            tempIcon.src = 'icons/13d.png'
          } else if (id < 790){
            tempIcon.src = 'icons/50d.png'
          } else if (id === 800){
            tempIcon.src = 'icons/01d.png'
          } else if (id === 801){
            tempIcon.src = 'icons/02d.png'
          } else if (id === 802){
            tempIcon.src = 'icons/03d.png'
          } else if (id < 805){
            tempIcon.src = 'icons/04d.png'
          }
        })
    })
  }
})
