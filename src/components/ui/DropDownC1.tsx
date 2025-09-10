"use client";

//? React
import React from "react";
import { useState } from "react";

//? Next
import Image from "next/image";

//? Assets
import tickIcon from "../../../public/images/icon-checkmark.svg";

const DropDownC1 = () => {
  //* States
  //? Temperature
  const [currentTemperature, setCurrentTemperature] =
    useState<string>("celsius");
  const [currentTemperatureState, setCurrentTemperatureState] =
    useState<boolean>(true);
  //? Wind Speed
  const [currentWindSpeed, setCurrentWindSpeed] = useState<string>("km/h");
  const [currentWindSpeedState, setCurrentWindSpeedState] =
    useState<boolean>(true);
  //? Precipitation
  const [currentPrecipitation, setPrecipitation] =
    useState<string>("millimeters");
  const [currentPrecipitationState, setCurrentPrecipitationState] =
    useState<boolean>(true);
  //? All States
  const [allStates, setAllStates] = useState({
    temperature: currentTemperature,
    windSpeed: currentWindSpeed,
    precipitation: currentPrecipitation,
  });

  //* Function
  //? Temperature
  const handleToggleTemperature = () => {
    setCurrentTemperatureState(!currentTemperatureState);
    if (currentTemperatureState) {
      setCurrentTemperature("fahrenheit");
    } else {
      setCurrentTemperature("celsius");
    }
  };
  //? Wind Speed
  const handleToggleWindSpeed = () => {
    setCurrentWindSpeedState(!currentWindSpeedState);
    if (currentWindSpeedState) {
      setCurrentWindSpeed("mph");
    } else {
      setCurrentWindSpeed("km/h");
    }
  };
  //? Precipitation
  const handleTogglePrecipitation = () => {
    setCurrentPrecipitationState(!currentPrecipitationState);
    if (currentPrecipitationState) {
      setPrecipitation("inches");
    } else {
      setCurrentWindSpeed("millimeters");
    }
  };

  return (
    <section className="w-[12rem] px-1.5 pt-1 pb-2 h-fit space-y-1.5 bg-neutral-850 border-[0.5px] border-neutral-600 shadow-2xl rounded-lg">
      <button className="text-white focus:border focus:border-white hover:bg-neutral-600/30 cursor-pointer px-2.5 py-2 w-full rounded-lg text-left text-[0.9rem] font-DM-Sans hover:opacity-85">
        Switch to Imperial
      </button>
      {/* Temperature */}
      <div onClick={handleToggleTemperature} className="space-y-1">
        <h2 className="text-neutral-750 focus:border-2 px-1.5 text-[0.85rem] font-DM-Sans font-medium">
          Temperature
        </h2>
        <div
          onClick={handleToggleTemperature}
          className={`${
            currentTemperatureState ? "bg-neutral-600/30" : "bg-none"
          } ${"w-full py-1 px-2 cursor-pointer rounded-lg flex flex-row items-center justify-between"}`}
        >
          <span className="text-white text-sm font-DM-Sans">Celsius (°C)</span>
          <Image
            src={tickIcon}
            width={12}
            height={12}
            alt="checkmark-icon"
            className={`${currentTemperatureState ? "" : "hidden"}`}
          />
        </div>
        <div
          onClick={handleToggleTemperature}
          className={`${
            currentTemperatureState ? "bg-none" : "bg-neutral-600/30"
          } ${"w-full py-1 px-2 cursor-pointer rounded-lg flex flex-row items-center justify-between"}`}
        >
          <span className="text-white text-sm font-DM-Sans">
            Fahrenheit (°F)
          </span>
          <Image
            src={tickIcon}
            width={12}
            height={12}
            alt="checkmark-icon"
            className={`${currentTemperatureState ? "hidden" : ""}`}
          />
        </div>
      </div>
      <div className="w-full h-[0.15px] my-0.5 bg-white opacity-20"></div>
      {/* Wind Speed */}
      <div onClick={handleToggleWindSpeed} className="space-y-1 mt-2">
        <h2 className="text-neutral-750 focus:border-2 px-1.5 text-[0.85rem] font-DM-Sans font-medium">
          Wind Speed
        </h2>
        <div
          onClick={handleToggleWindSpeed}
          className={`${
            currentWindSpeedState ? "bg-neutral-600/30" : "bg-none"
          } ${"w-full py-1 px-2 cursor-pointer rounded-lg flex flex-row items-center justify-between"}`}
        >
          <span className="text-white text-sm font-DM-Sans">km/h</span>
          <Image
            src={tickIcon}
            width={12}
            height={12}
            alt="checkmark-icon"
            className={`${currentWindSpeedState ? "" : "hidden"}`}
          />
        </div>
        <div
          onClick={handleToggleWindSpeed}
          className={`${
            currentWindSpeedState ? "bg-none" : "bg-neutral-600/30"
          } ${"w-full py-1 px-2 cursor-pointer rounded-lg flex flex-row items-center justify-between"}`}
        >
          <span className="text-white text-sm font-DM-Sans">mph</span>
          <Image
            src={tickIcon}
            width={12}
            height={12}
            alt="checkmark-icon"
            className={`${currentWindSpeedState ? "hidden" : ""}`}
          />
        </div>
      </div>
      <div className="w-full h-[0.15px] my-0.5 bg-white opacity-20"></div>
      {/* Precipitation */}
      <div onClick={handleTogglePrecipitation} className="space-y-1 mt-2">
        <h2 className="text-neutral-750 focus:border-2 px-1.5 text-[0.85rem] font-DM-Sans font-medium">
          Precipitation
        </h2>
        <div
          onClick={handleTogglePrecipitation}
          className={`${
            currentPrecipitationState ? "bg-neutral-600/30" : "bg-none"
          } ${"w-full py-1 px-2 cursor-pointer rounded-lg flex flex-row items-center justify-between"}`}
        >
          <span className="text-white text-sm font-DM-Sans">
            Millimeters (mm)
          </span>
          <Image
            src={tickIcon}
            width={12}
            height={12}
            alt="checkmark-icon"
            className={`${currentPrecipitationState ? "" : "hidden"}`}
          />
        </div>
        <div
          onClick={handleTogglePrecipitation}
          className={`${
            currentPrecipitationState ? "bg-none" : "bg-neutral-600/30"
          } ${"w-full py-1 px-2 cursor-pointer rounded-lg flex flex-row items-center justify-between"}`}
        >
          <span className="text-white text-sm font-DM-Sans">Inches (in)</span>
          <Image
            src={tickIcon}
            width={12}
            height={12}
            alt="checkmark-icon"
            className={`${currentPrecipitationState ? "hidden" : ""}`}
          />
        </div>
      </div>
    </section>
  );
};

export default DropDownC1;
