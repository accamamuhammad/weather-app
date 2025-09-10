"use client";

//? React & Next
import React, { use } from "react";
import Image from "next/image";
import { useState } from "react";

//? Assets
import fogIcon from "../../../public/images/icon-fog.webp";
import rainIcon from "../../../public/images/icon-rain.webp";
import snowIcon from "../../../public/images/icon-snow.webp";
import sunnyIcon from "../../../public/images/icon-sunny.webp";
import stormIcon from "../../../public/images/icon-storm.webp";
import drizzleIcon from "../../../public/images/icon-drizzle.webp";
import overcastIcon from "../../../public/images/icon-overcast.webp";
// import partlyCloudyIcon from "../../../public/images/icon-partly-cloudy.webp";

const Display = () => {
  const [capital, setCapital] = useState("Berlin");
  const [country, setCountry] = useState("Germany");
  const [temperature, setTemperature] = useState(68);
  const [date, setDate] = useState({
    day: "Tuesday",
    mth: "Aug",
    num: "5",
    year: "2025",
  });
  const [properties, setProperties] = useState({
    feelsLike: "64",
    humidity: "46",
    wind: "9",
    precipitation: "0",
  });
  const [currentUnits, setCurrentUnits] = useState({
    temperature: "°",
    windSpeed: "mph",
    precipitation: "in",
  });

  const [dailyForecast, setDdailyForecast] = useState([
    { day: "Mon", temperature: 68, feelLike: 57, Icon: fogIcon },
    { day: "Tue", temperature: 68, feelLike: 57, Icon: rainIcon },
    { day: "Wed", temperature: 68, feelLike: 57, Icon: snowIcon },
    { day: "Thur", temperature: 68, feelLike: 57, Icon: sunnyIcon },
    { day: "Fri", temperature: 68, feelLike: 57, Icon: stormIcon },
    { day: "Sat", temperature: 68, feelLike: 57, Icon: drizzleIcon },
    { day: "Sun", temperature: 68, feelLike: 57, Icon: overcastIcon },
  ]);

  return (
    <section className="w-full px-6 pb-5 gap-5 flex flex-col items-center justify-center">
      <div className="w-full py-7 sm:px-5 gap-2.5 rounded-xl bg-[url('/images/bg-today-small.svg')] md:bg-[url('/images/bg-today-large.svg')]  bg-no-repeat bg-cover bg-center flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <div className="w-full sm:w-fit text-center sm:text-left space-y-2">
          <h1 className="text-3xl sm:text-2xl text-white font-DM-Sans">
            {capital}, {country}
          </h1>
          <p className="text-neutral-200 text-lg sm:text-base">
            {date.day}, {date.mth} {date.num}, {date.year}
          </p>
        </div>
        <div className="gap-2 sm:gap-1 flex flex-row items-center justify-center">
          <Image src={sunnyIcon} width={120} height={120} alt="sunny-icon" />
          <h1 className="text-[5rem] text-white font-DM-Sans rotate-[3deg]">
            {temperature}°
          </h1>
        </div>
      </div>
      <div className="w-full grid gap-5 grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1">
        <div className="w-full h-32 p-5 bg-neutral-850 rounded-xl shadow-2xl flex flex-col justify-between items-start">
          <h2 className="text-white font-DM-Sans opacity-65 text-xl">
            Feels Like
          </h2>
          <h1 className="text-white text-3xl">
            {properties.feelsLike}
            {currentUnits.temperature}
          </h1>
        </div>
        <div className="w-full h-32 p-5 bg-neutral-850 rounded-xl shadow-2xl flex flex-col justify-between items-start">
          <h2 className="text-white font-DM-Sans opacity-65 text-xl">
            Humidity
          </h2>
          <h1 className="text-white text-3xl">{properties.humidity}%</h1>
        </div>
        <div className="w-full h-32 p-5 bg-neutral-850 rounded-xl shadow-2xl flex flex-col justify-between items-start">
          <h2 className="text-white font-DM-Sans opacity-65 text-xl">
            Feels Like
          </h2>
          <h1 className="text-white text-3xl">
            {properties.wind} {currentUnits.windSpeed}
          </h1>
        </div>
        <div className="w-full h-32 p-5 bg-neutral-850 rounded-xl shadow-2xl flex flex-col justify-between items-start">
          <h2 className="text-white font-DM-Sans opacity-65 text-xl">
            Feels Like
          </h2>
          <h1 className="text-white text-3xl">
            {properties.precipitation} {currentUnits.precipitation}
          </h1>
        </div>
      </div>
      <div className="w-full mt-2 flex flex-col gap-3.5 items-start justify-start">
        <h1 className="w-full text-white text-lg font-medium font-DM-Sans flex items-start justify-start">
          Daily forecast
        </h1>
        <div className="w-full gap-5 grid grid-cols-3 grid-rows-3 sm:grid-cols-4 sm:grid-rows-2 md:grid-cols-5 lg:grid-cols-7 lg:grid-rows-1">
          {dailyForecast.map((item, index) => (
            <div
              key={index}
              className="w-full p-3 gap-3 bg-neutral-850 rounded-lg border-neutral-600 border-1 flex flex-col justify-between"
            >
              <h1 className="text-center text-white font-medium opacity-80">
                {item.day}
              </h1>
              <div className="w-full flex items-center justify-center">
                <Image
                  src={item.Icon}
                  width={70}
                  height={70}
                  alt="weather-icon"
                />
              </div>
              <div className="w-full text-white opacity-80 flex items-center justify-between">
                <p>{item.feelLike}°</p>
                <p>{item.temperature}°</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Display;
