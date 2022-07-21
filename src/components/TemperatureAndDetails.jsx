import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTear,
  UilTemperature,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy </p>
      </div>

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src="https://www.nicepng.com/png/detail/1-15276_sun-png-clip-art-planet-sun-clipart.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={19} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={19} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">35%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={19} className="mr-1" />
            Windspeed:
            <span className="font-medium ml-1">32 km/hr</span>
          </div>
        </div>
      </div>

      <div
        className="flex flow-row items-center justify-center 
    space-x-2 text-white text-sm
    py-3"
      >
        <UilSun />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <UilSunset />
        <p className="font-light">
          set: <span className="font-medium ml-1">07:35 PM</span>
        </p>
        <UilArrowUp />
        <p className="font-light">
          High: <span className="font-medium ml-1">45°</span>
        </p>
        <UilArrowDown />
        <p className="font-light">
          Low: <span className="font-medium ml-1">06°</span>
        </p>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
