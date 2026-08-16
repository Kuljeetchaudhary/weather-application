// const { response } = require("express");
// const { error } = require("node:console");
// const { json } = require("node:stream/consumers");

//const { response } = require("express");

const api_key = "YOUR_API_KEY";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const para = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weather_icon=document.querySelector(".weather-icon")
const error=document.querySelector(".error")
const weather=document.querySelector(".weather")

//  console.log(click)
//  console.log(input)
//  console.log(temp)
// console.log(para)
// console.log(wind)

searchbtn.addEventListener("click", () => {
  fetch(`${api_url}&q=${searchbox.value}&appid=${api_key}`)
    .then((response) => {
     if(response.status==404){
        error.style.display="block";
        weather.style.display="none";
    }
    else{
      error.style.display="none";
      weather.style.display="block";
      return response.json();
    }
    })
   
    .then((data) => {
       console.log(data)
      // console.log(data.name)
      //console.log(data.main.temp)
      // console.log(data.wind.speed)
      city.innerHTML = data.name;
      temp.innerHTML = Math.round(data.main.temp) + "°c";
      para.innerHTML = data.main.humidity + " % ";
      wind.innerHTML = data.wind.speed + " kmph ";
      console.log(data.weather[0].main);
      if(data.weather[0].main==="Clouds"){
      weather_icon.src="https://i.pinimg.com/736x/17/8d/a8/178da8600197c31dcb0c192662150872.jpg"
   
}
else if (data.weather[0].main==="Clear"){
      weather_icon.src="https://i.pinimg.com/1200x/64/44/08/644408ce6844b874386b0e8fe78c5865.jpg";

}
else if (data.weather[0].main==="Rain"){
      weather_icon.src="https://i.pinimg.com/736x/21/3e/f6/213ef607b1ce5da73343a6d615e7118f.jpg";

}
else if (data.weather[0].main==="Drizzle"){
      weather_icon.src="https://i.pinimg.com/1200x/1b/d6/d4/1bd6d45c0f23dfd7c42211349c2a4808.jpg";

}
else if (data.weather[0].main==="Mist"){
      weather_icon.src="https://i.pinimg.com/736x/7f/2c/5f/7f2c5fde3fc724774e483444ca9a9c7f.jpg";

}

   })



    .catch((error) => {
      console.log("OOPS! Some Error Occurs");
    });
});


