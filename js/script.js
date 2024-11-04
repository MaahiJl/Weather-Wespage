// ایجاد ارایه ی بک گراند ها
const bgArrays = [
    "url('/imgs/sky-1280x720-soft-clouds-gradient-tranquil-moonlight-26644.jpg')",
    "url('/imgs/sky-1280x720-soft-clouds-tranquil-lunar-gradient-hues-26656.jpg')",
    "url('/imgs/sky-1280x720-soft-clouds-tranquil-moonlight-26640.jpg')",
    "url('/imgs/sky-1280x720-soft-clouds-tranquil-moonlight-26646.jpg')",
];

// تابع خودخوان برای تغییر بکگراند
(function changeBG (){
    // ایجاد setinterval
    setInterval(function(){
         // تولید ایندکس رندوم
        let randomIndex = Math.floor(Math.random() * bgArrays.length ) 
        // انتخاب بکگراند با ایندکس رندوم
        document.body.style.backgroundImage = bgArrays[randomIndex]
    },10000)
})();
// ------------
// دیتابیس اب و هوا
const citiesData = {
    tehran: {city: "Tehran", temp:9 ,description: "Cloudy",humidity: "humidity: 60%",wind: "Wind speed: 6.2 km/h", },
    tabriz: {city: "Tabriz", temp:1 ,description: "Snowy",humidity: "humidity: 20%",wind: "Wind speed: 5 km/h", },
    esfahan: {city: "Esfahan", temp:12 ,description: "Rainy",humidity: "humidity: 65%",wind: "Wind speed: 4.1 km/h", },
    yazd: {city: "Yazd", temp:41 ,description: "Sunny",humidity: "humidity: 10%",wind: "Wind speed: 6 km/h", },
}

// ایجاد رویداد onclick روی دکمه
let searchButton = document.getElementById('search-button')
searchButton.addEventListener('click', function(){
     // دریافت نام شهر از کاربر
    let userSearchInputValue = document.getElementById('search-bar').value
    // درصورت اشتباه وارد کردن نام شهر
    if(citiesData[userSearchInputValue] === undefined){
        document.getElementById('alert').style.display = 'block'
        setTimeout(function() {
            document.getElementById('alert').style.display = 'none'

        },3000)
    }else{
        // درصورت درست وارد کردن نام شهر
        // تغییر اطلاعات هر شهر
        document.querySelector('.city').innerHTML = "Weather in " + citiesData[userSearchInputValue].city
        document.querySelector('.temp').innerHTML = citiesData[userSearchInputValue].temp + "°C"
        document.querySelector('.description').innerHTML = citiesData[userSearchInputValue].description
        document.querySelector('.humidity').innerHTML = citiesData[userSearchInputValue].humidity
        document.querySelector('.wind').innerHTML = citiesData[userSearchInputValue].wind

        // تغییر رنگ ها
        if(citiesData[userSearchInputValue].temp < 10){
            document.querySelector('.temp').style.color = '#87A2FF'
        }else if(citiesData[userSearchInputValue].temp > 20){
            document.querySelector('.temp').style.color = '#B8001F'
        }else{
            document.querySelector('.temp').style.color = '#fff'
        };
        // تغییر svg ها
        if(citiesData[userSearchInputValue].description === "Sunny"){
            document.getElementById('svg').setAttribute("src", "/imgs/sunny.svg")
        }else if(citiesData[userSearchInputValue].description === "Rainy"){
            document.getElementById('svg').setAttribute("src", "/imgs/rain.svg")
        }else if(citiesData[userSearchInputValue].description === "Snowy"){
            document.getElementById('svg').setAttribute("src", "/imgs/snow.svg")
        }

        // نمایش اطلاعات هر شهر
        document.querySelector('.weather.loading').style.visibility = 'visible';
        document.querySelector('.weather.loading').classList.remove('loading-none')
        document.querySelector('.weather.loading').style.removeProperty("max-height"); 
    };
 

});

 // رویداد keydown
let searchInput = document.getElementById('search-bar')
searchInput.addEventListener('keydown', function(){
    let userSearchInputValue = document.getElementById('search-bar').value
    // برگرداندن تغیرات اعمال شده 
    document.querySelector('.weather.loading').style.visibility = 'hidden';
    document.querySelector('.weather.loading').classList.add('loading-none')
    document.querySelector('.weather.loading').style.maxHeight = '20px' 
})
console.log(document.getElementsByClassName('hi'));
console.log(document.querySelector('.hi'));
