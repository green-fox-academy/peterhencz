const express = require('express');
const app = express();
const PORT = 3000;
const forecasts = [
  {
    city: 'Barcelona',
    location: 'Spain',
    weather: [
            {temp: 2, icon: 'h'},
      { temp: 15, icon: 'partly_cloudy', message: 'Not too sunny.' },
      { temp: 17, icon: 'sunny', message: 'So far so good.' },
      { temp: 16, icon: 'rainy', message: 'Rihanna - Umbrella' },
      { temp: 18, icon: 'sunny', message: 'Here comes the sun.' },
    ],
  },
  {
    city: 'London',
    location: 'United Kingdom',
    weather: [ 
      { temp: 3, icon: 'rainy', message: 'Meh...' },    
      { temp: 4, icon: 'snowy', message: 'Go home winter.' },
      { temp: 7, icon: 'rainy', message: 'Do you have an umbrella?' },      
      { temp: 9, icon: 'rainy', message: 'It\'s rainy.' },
      { temp: 11, icon: 'thunder', message: 'Meh... Again.' },
    ],
  },
  {
    city: 'Budapest',
    location: 'Hungary',
    weather: [
      { temp: 12, icon: 'partly_cloudy', message: 'It\'s cloudy.' },
      { temp: 16, icon: 'rainy', message: 'Sooo... Wet.' },
      { temp: 18, icon: 'partly_cloudy', message: 'Here comes the sun.' },
      { temp: 16, icon: 'sunny', message: 'Not too sunny.' },
      { temp: 19, icon: 'sunny', message: 'So far so good.' },
    ],
  },
  {
    city: 'Seattle',
    location: 'Washington, US',
    weather: [
      { temp: 11, icon: 'thunder', message: 'Complete Grey' },
      { temp: 11, icon: 'thunder', message: 'Just stay in bed.' },
      { temp: 13, icon: 'rainy', message: 'Meh...' },
      { temp: 12, icon: 'partly_cloudy', message: 'Still meh...' },
      { temp: 13, icon: 'rainy', message: 'Not too sunny.' },
    ],
  },
  {
    city: 'Miami',
    location: 'Florida, US',
    weather: [
      { temp: 33, icon: 'sunny', message: 'Hot.' },
      { temp: 35, icon: 'sunny', message: 'Too hot!' },
      { temp: 34, icon: 'sunny', message: 'Sunny.' },
      { temp: 34, icon: 'partly_cloudy', message: 'Beach time!' },
      { temp: 35, icon: 'sunny', message: 'Here comes the sun.' },
    ],
  },
];

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  const choosenCity = req.query.cities;
  if (choosenCity === undefined) {
    res.render ('home', {
      weatherData: forecasts,
    });
  } else {
    res.render ('cities', {
      weatherData: forecasts,
      choosenCity: req.query.cities,
      id: req.query.id,
    })
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
