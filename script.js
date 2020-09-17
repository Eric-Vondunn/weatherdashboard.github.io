
//var declarations

var searchButton = document.querySelector('.searchButton');
var inputValue = document.querySelector('.inputValue');

var display = document.querySelector('.display');

var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humid = document.querySelector('.humid');
var windSpeed = document.querySelector('.windSpeed');
var uvIndex = document.querySelector('.uvIndex');




var austin = document.querySelector('austin')
var chicago = document.querySelector('chicago')
var newYork = document.querySelector('newYork')
var orlando = document.querySelector('orlando')
var sanFrancisco = document.querySelector('sanFrancisco')
var denver = document.querySelector('denver')
var atlanta = document.querySelector('atlanta')


//function that allows the button to listen for the click and pull data


//function that allows the button to listen for the click and pull data for all cities
searchButton.addEventListener('click', function(){



    //q = city
    //then api key 
    
    // //api key b0c6bc42b271e039bd800514c28b41b7
    
    //in q the inputValue is the tag and the value is the type of text that is inputted into the input box 
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=b0c6bc42b271e039bd800514c28b41b7')
    
    //promises in JSON format
    //don't need semi colon because of this 
    
        .then(response => response.json())
        .then(data => {
            
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];
            var humidValue = data['main']['humidity'];
            var windSpeedValue = data['wind']['speed'];
            var uvIndexValue = data['main']['temp_kf'];
            
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
            humidity.innerHTML = humidValue;
            wind.speed.innerHTML = windSpeedValue;
            temp_kf.innerHTML = uvIndexValue;
    

            
        })
        //actually grab the data from the DOM
    
        
    
    //error catching
    .catch(err => alert("Wrong city name! Try again!"))
    
    })


    // functions for each specific city in the top cities
//Austin
.austin.addEventListener("click", function austin(){


    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=b0c6bc42b271e039bd800514c28b41b7')
    

        .then(response => response.json())
        .then(data => {
            
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];
            var humidValue = data['main']['humidity'];
            var windSpeedValue = data['wind']['speed'];
            var uvIndexValue = data['main']['temp_kf'];
    
            
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
            humidity.innerHTML = humidValue;
            wind.speed.innerHTML = windSpeedValue;
            temp_kf.innerHTML = uvIndexValue;
    
        })
       
    
    })



            //chicago
    .chicago.addEventListener("click", function chicago(){


    
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=b0c6bc42b271e039bd800514c28b41b7')
        
    
            .then(response => response.json())
            .then(data => {
                
                var nameValue = data['name'];
                var tempValue = data['main']['temp'];
                var descValue = data['weather'][0]['description'];
                var humidValue = data['main']['humidity'];
                var windSpeedValue = data['wind']['speed'];
                var uvIndexValue = data['main']['temp_kf'];
        
                
                name.innerHTML = nameValue;
                temp.innerHTML = tempValue;
                desc.innerHTML = descValue;
                humidity.innerHTML = humidValue;
                wind.speed.innerHTML = windSpeedValue;
                temp_kf.innerHTML = uvIndexValue;
        
            })
           
        
        })


            //New York function 
    .newYork.addEventListener("click", function newYork(){


    
        fetch('https://api.openweathermap.org/data/2.5/weather?q=NewYork&appid=b0c6bc42b271e039bd800514c28b41b7')
        
    
            .then(response => response.json())
            .then(data => {
                
                var nameValue = data['name'];
                var tempValue = data['main']['temp'];
                var descValue = data['weather'][0]['description'];
                var humidValue = data['main']['humidity'];
                var windSpeedValue = data['wind']['speed'];
                var uvIndexValue = data['main']['temp_kf'];
        
                
                name.innerHTML = nameValue;
                temp.innerHTML = tempValue;
                desc.innerHTML = descValue;
                humidity.innerHTML = humidValue;
                wind.speed.innerHTML = windSpeedValue;
                temp_kf.innerHTML = uvIndexValue;
        
            })
           
        
        })


            //orlando
    .orlando.addEventListener("click", function orlando(){


    
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=b0c6bc42b271e039bd800514c28b41b7')
        
    
            .then(response => response.json())
            .then(data => {
                
                var nameValue = data['name'];
                var tempValue = data['main']['temp'];
                var descValue = data['weather'][0]['description'];
                var humidValue = data['main']['humidity'];
                var windSpeedValue = data['wind']['speed'];
                var uvIndexValue = data['main']['temp_kf'];
        
                
                name.innerHTML = nameValue;
                temp.innerHTML = tempValue;
                desc.innerHTML = descValue;
                humidity.innerHTML = humidValue;
                wind.speed.innerHTML = windSpeedValue;
                temp_kf.innerHTML = uvIndexValue;
        
            })
           
        
        })


            //San Fran Function
    .sanFrancisco.addEventListener("click", function sanFran(){


    
        fetch('https://api.openweathermap.org/data/2.5/weather?q=SanFrancisco&appid=b0c6bc42b271e039bd800514c28b41b7')
        
    
            .then(response => response.json())
            .then(data => {
                
                var nameValue = data['name'];
                var tempValue = data['main']['temp'];
                var descValue = data['weather'][0]['description'];
                var humidValue = data['main']['humidity'];
                var windSpeedValue = data['wind']['speed'];
                var uvIndexValue = data['main']['temp_kf'];
        
                
                name.innerHTML = nameValue;
                temp.innerHTML = tempValue;
                desc.innerHTML = descValue;
                humidity.innerHTML = humidValue;
                wind.speed.innerHTML = windSpeedValue;
                temp_kf.innerHTML = uvIndexValue;
        
            })
           
        
        })


            //denver function
    .denver.addEventListener("click", function denver(){


    
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=b0c6bc42b271e039bd800514c28b41b7')
        
    
            .then(response => response.json())
            .then(data => {
                
                var nameValue = data['name'];
                var tempValue = data['main']['temp'];
                var descValue = data['weather'][0]['description'];
                var humidValue = data['main']['humidity'];
                var windSpeedValue = data['wind']['speed'];
                var uvIndexValue = data['main']['temp_kf'];
        
                
                name.innerHTML = nameValue;
                temp.innerHTML = tempValue;
                desc.innerHTML = descValue;
                humidity.innerHTML = humidValue;
                wind.speed.innerHTML = windSpeedValue;
                temp_kf.innerHTML = uvIndexValue;
        
            })
           
        
        })


            //atlanta function
    .atlanta.addEventListener("click", function atlanta(){


    
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=b0c6bc42b271e039bd800514c28b41b7')
        
    
            .then(response => response.json())
            .then(data => {
                
                var nameValue = data['name'];
                var tempValue = data['main']['temp'];
                var descValue = data['weather'][0]['description'];
                var humidValue = data['main']['humidity'];
                var windSpeedValue = data['wind']['speed'];
                var uvIndexValue = data['main']['temp_kf'];
        
                
                name.innerHTML = nameValue;
                temp.innerHTML = tempValue;
                desc.innerHTML = descValue;
                humidity.innerHTML = humidValue;
                wind.speed.innerHTML = windSpeedValue;
                temp_kf.innerHTML = uvIndexValue;
        
            })
           
        
        })