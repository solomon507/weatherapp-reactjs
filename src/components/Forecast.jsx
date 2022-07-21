import React from "react";

function Forecast({ title }) {
  return (
    <div>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div
        className="flex flex-row items-center 
      justify-between text-white"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30pm</p>
          <img
            src="https://www.citypng.com/public/uploads/preview/download-white-grey-real-sky-cloud-png-3163086851376vxdonxm5.png"
            alt=""
            className="w-10 my-1 h-10"
          />
          <p className="font-medium"></p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30pm</p>
          <img
            src="https://toppng.com/uploads/preview/cloud-png-8-11527947711aaacr2pccr.png"
            alt=""
            className="w-10 my-1 h-10"
          />
          <p className="font-medium"></p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30pm</p>
          <img
            src="https://www.nicepng.com/png/detail/1-15276_sun-png-clip-art-planet-sun-clipart.png"
            alt=""
            className="w-10 my-1 h-10"
          />
          <p className="font-medium"></p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30pm</p>
          <img
            src="https://toppng.com/uploads/preview/cloud-png-8-11527947711aaacr2pccr.png"
            alt=""
            className="w-10 my-1 h-10"
          />
          <p className="font-medium"></p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">4:30pm</p>
          <img
            src="https://www.citypng.com/public/uploads/preview/download-white-grey-real-sky-cloud-png-3163086851376vxdonxm5.png"
            alt=""
            className="w-10 my-1 h-10"
          />
          <p className="font-medium"></p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
