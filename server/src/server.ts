import axios from 'axios';
import express, { Request, Response } from 'express';
import dotenv from "dotenv";
dotenv.config();

async function getWeatherData(cityName: string) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&q=${cityName}&units=metric&lang=pt_br`
  );

  return response.data;
}

export async function handleWeather(req: Request, res: Response) {
  const city = 'London';
  const weatherData = await getWeatherData(city);

  res.json({ weatherData });
}

const app = express();
const port = 3000;

app.get('/weather', handleWeather);

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});

/* getWeatherData('São Paulo')
console.log(handleWeather) */
