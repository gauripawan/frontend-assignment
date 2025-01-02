import { ArrowLongUpIcon } from "@heroicons/react/16/solid";
import ant from '../assets/ant.png'
import subtract from '../assets/Subtract.png'
import card from '../assets/Group.png'


const AuthLeft = () => {
  return (
    <div className="hidden md:flex h-full w-1/2 bg-white relative flex-col justify-center items-center">
      <img
        src={subtract}
        alt={"logo"}
        className="absolute left-0 bottom-0 w-[300px] aspect-square"
      />
      <div
        className="flex rounded-xl flex-col w-full max-w-[400px] bg-gray-50"
        style={{ boxShadow: "0px 0px 24px rgba(8, 23, 53, 0.16)" }} // Added drop shadow
      >
        <div className="flex gap-2 items-center border-b p-4">
          <img src={ant} alt="logo" className="w-6 h-6" />
          <span className="font-bold text-gray-700">
            AI to Detect & Autofix Bad Code
          </span>
        </div>
        <div className="flex gap-4 justify-between items-center p-6">
          {[
            { label: "Language Support", value: "30+" },
            { label: "Developers", value: "10K+" },
            { label: "Hours Saved", value: "100K+" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="font-semibold text-lg text-black">
                {item.value}
              </span>
              <span className="text-sm text-gray-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex rounded-xl flex-col gap-2 p-4 px-8 translate-x-[50%] -translate-y-[10px] bg-white"
        style={{ boxShadow: "0px 0px 24px rgba(8, 23, 53, 0.16)" }} // Added drop shadow
      >
        <div className="flex justify-between min-w-40">
          <img src={card} alt={"graph"} className="cursor-pointer size-12" />
          <div className="flex flex-col">
            <div className="flex items-center text-primary text-[#0049c6]">
              <ArrowLongUpIcon className="w-5" /> 
              14%
            </div>
            <div className="font-light text-xs">This week</div>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <span className="font-semibold">Issues Fixed</span>
            <span className="font-bold text-2xl">500K+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLeft;
