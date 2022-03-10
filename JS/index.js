const weatherapi=
{
    key:"f9dfa445aae43ca632ce93c0eacfa384",
    url:"https://api.openweathermap.org/data/2.5/weather"
}

const inputBox=document.getElementById('inputBox');
inputBox.addEventListener('keypress',(e)=>{
    
    if(e.keyCode==13)
    {
            
            getWeatherReport(inputBox.value);
            let details=document.getElementById('details');
            
            details.style.display="block";
        
    }
    
    //get Weather Report Function--

    function getWeatherReport(city)
    {
        fetch(`${weatherapi.url}?q=${city}&appid=${weatherapi.key}&units=metric`)
        .then(weather =>{
            return weather.json();
        }).then(showWeatherReport);
    }
    
    //show Weather Report Function
    function showWeatherReport(weather)
     {
        
        let city=document.getElementById('city');
        city.innerText=`${weather.name},${weather.sys.country}`;

        let temp=document.getElementById('temp');
        temp.innerHTML=`${Math.round(weather.main.temp)}&degC`;

        let minmax=document.getElementById('min-max');
        minmax.innerHTML=`${Math.floor(weather.main.temp_min)}&degC[MIN],${Math.round(weather.main.temp_max)}&degC[MAX]`; 
        
        let short=document.getElementById('short');
        
        short.innerText=`${weather.weather[0].description}`;
        
        let date=document.getElementById('date');
        let today=new Date();    
        date.innerText=dateManage(today);           
    
        if(short.textContent=='smoke')
        {
            document.body.style.backgroundImage="url('https://imengine.public.prod.dur.navigacloud.com/?uuid=6315052D-B5C0-4D04-8C06-34CBEE7F4EC8&function=cover&type=preview&source=false&width=2048&height=2048')";
        }
        else if(short.textContent=='cloudy')
        {
            document.body.style.backgroundImage="url('https://images.all-free-download.com/images/graphiclarge/clouds_cloudiness_forward_238873.jpg')";
        }
        else if(short.textContent=='haze')
        {
            document.body.style.backgroundImage="url('https://media.wired.co.uk/photos/606dba04751ea43ccd9898b5/16:9/w_2560%2Cc_limit/london-heatwave.jpg')";
            let audio=new Audio('voice/wind.wav');
            audio.play();
        }
        else if(short.textContent=='snow')
        {
            document.body.style.backgroundImage="url('https://imageio.forbes.com/specials-images/imageserve/5fed2de951ff8d421183b6e6/0x0.jpg?format=jpg&width=1200&fit=bounds')";
            let audio=new Audio('voice/wind.wav');
            audio.play();
        }
         else if(short.textContent=='Thunderstrom')
        {
            document.body.style.backgroundImage="url('https://s7d2.scene7.com/is/image/TWCNews/thunder-lightning-weather-2928925jpg')";
        }
    
        else if(short.textContent=='rainy')
        {
            document.body.style.backgroundImage="url('https://s3.amazonaws.com/static.beavercountyradio.com/wp-content/uploads/2019/05/27071943/rain.jpg')";
            let audio=new Audio('voice/rainandbrokencloud.wav');
            audio.play();
        } 
        
        else if(short.textContent=='broken clouds')
        {
            document.body.style.backgroundImage="url('https://www.novinite.com/media/images/2019-11/photo_verybig_201517.jpg')";
            let audio=new Audio('voice/rainandbrokencloud.wav');
            audio.play();
        }
        
        else if(short.textContent=='clear sky')
        {
            document.body.style.backgroundImage="url('https://media.istockphoto.com/photos/blue-sky-with-bright-sun-and-clouds-picture-id1007768414?b=1&k=20&m=1007768414&s=170667a&w=0&h=9ijRGKZYLQJz5GO0ZwisNhraxPRY3wUFWe2wjCfS-Uc=')";
            let audio=new Audio('voice/cleasky.wav');
            audio.play();
        }
    }
})

//Date Function
function dateManage(dates)
{
    let days=['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
    let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year=dates.getFullYear();
    let month=months[dates.getMonth()];
    let date=dates.getDate();
    let day=days[dates.getDay()];

    return `${date} ${month}(${day}),${year}`;
}