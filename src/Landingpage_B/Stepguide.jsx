import React from "react";
import { stepData } from "../data";

function StepGuide() {
  return (
    <>
      <div className="p-8 md:p-16 lg:p-32">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#590E87] pb-3">
          Reward System
        </h2>
        <p className="text-lg md:text-lg font-normal text-black w-full md:w-[70%] lg:w-[60%] pb-12">
          Motivates children to continue learning by implementing a reward
          system, where they can earn badges or points for completing activities
          and achieving milestones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stepData.map((step, index) => (
            <div key={index} className="relative mb-8  p-4">
              <div className="flex mb-2">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#590E87] text-white">
                  {index + 1}
                </div>
                {index === 0 && (
                  <div className="absolute top-[15%] left-9 w-full h-[1px] bg-[#590E87]"></div>
                )}
                {index === 1 && (
                  <div className="absolute top-[15%] left-9 w-full h-[1px] bg-[#590E87]"></div>
                )}
                {index === 2 && (
                  <div className="absolute top-[15%] left-9 w-full h-[1px] bg-[#590E87]"></div>
                )}
              </div>

              <div className="rounded-lg bg-yellow-100 p-4">
                <div className="ml-4">
                  <h3 className="text-base md:text-lg lg:text-xl text-gray-600 font-semibold tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default StepGuide;
