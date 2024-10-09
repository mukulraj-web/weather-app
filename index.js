 const searchButton=document.querySelector("#search-button");
 const search = document.querySelector("#search-box");
 const weather = document.querySelector('#image-of-weather')
 const tempt = document.querySelector('#tempt')
 const cityName = document.querySelector('#city-name')
 const humidity = document.querySelector("#text1 h3")
 const windSpeed = document.querySelector("#text2 h3")
const Arr = ["rain.jpg","hail.jpg","rain-with-thunder.jpg","sunny-cloudy.jpg","sunny-rain.jpg","sunny.jpg"]
 
searchButton.addEventListener('click',()=>{
    newVal = search.value.toLowerCase();
    newTemp = Math.floor(Math.random()*40);
    newImage = Arr[Math.floor(Math.random()*6)];
    newHumidity = Math.floor(Math.random()*100);
    newWindSpeed = Math.floor(Math.random()*100)

    windSpeed.textContent = `${newWindSpeed}Km/h`
    humidity.textContent = `${newHumidity} %`
    weather.src = newImage
    cityName.textContent = newVal
    tempt.textContent = `${newTemp}\u00B0C`
    
   
    
//    if (newVal== "patna"){
//     alert("heavy rainfall")
//   }else{
//     alert("error")
//    }
});
