'use client';
import ToggleSwitch from "@/components/ToggleSwitch";
// import { useState } from "react";
import { Header } from '@/components/Settings/Header';


export default function ColorSchemeSetting() {
  // const [isLight, setIsLight] = useState(true);
  // const [isDark, setIsDark] = useState(false);

  // const handleLightToggle = () => {
  //   setIsLight(true);
  //   setIsDark(false);
  // };

  // const handleDarkToggle = () => {
  //   setIsLight(false);
  //   setIsDark(true);
  // };

  return (
    <>
      <Header
        category={"Color Scheme"}
        label={"Change how Untitled UI look and feels in your browser."}
      />
      {/* <div className="flex flex-col mt-5">
        <label className="text-black font-medium text-xs">Color</label>
        <div className="flex flex-row mt-2">
          <div className="w-5 h-5 bg-violet-500 rounded-md shadow-md mr-2"></div>
          <div className="w-5 h-5 bg-pink-500 rounded-md shadow-md mr-2"></div>
          <div className="w-5 h-5 bg-blue-500 rounded-md shadow-md mr-2"></div>
          <div className="w-5 h-5 bg-yellow-500 rounded-md shadow-md mr-2"></div>
          <div className="w-5 h-5 bg-green-500 rounded-md shadow-md mr-2"></div>
        </div>
        <div className="flex flex-row mt-2">
          <div className="w-5 h-5 bg-violet-900 rounded-md shadow-md mr-2"></div>
          <div className="w-5 h-5 bg-amber-800 rounded-md shadow-md mr-2"></div>
          <div className="w-5 h-5 bg-orange-500 rounded-md shadow-md mr-2"></div>
          <div className="w-5 h-5 bg-gray-500 rounded-md shadow-md mr-2"></div>
          <div className="w-5 h-5 bg-white rounded-md shadow-md mr-2"></div>
        </div>
        <div className="mt-10">
          <input type="checkbox" className="mr-[5px]" />
          <text className="text-xs text-black font-medium">
            Automatically pick an accent color from my background
          </text>
        </div>
        <div className="mt-10">
          <text className="text-xs text-black font-medium">
            Show Color on Title bar
          </text>
          <ToggleSwitch />
        </div>
        <div className="flex flex-col mt-10">
          <text className="text-black text-xs font-medium">
            Choose your System Mode
          </text>
          <div>
            <input type="radio" checked={isLight} onChange={handleLightToggle} />
            <label className="mr-5 pl-[5px] text-xs">Light</label>
            <input type="radio" checked={isDark} onChange={handleDarkToggle} />
            <label className="pl-[5px] text-xs">Dark</label>
          </div>
        </div>
        <div className="mt-10">
          <button className="bg-gray-400 text-white mr-8 py-2 px-10 rounded-md font-medium text-sm">
            Cancel
          </button>
          <button className="bg-blue-950 text-white py-2 px-10 rounded-md font-medium text-sm">
            Save
          </button>
        </div>
      </div> */}
      <div className="flex flex-col mt-5">
        <div className="flex flex-row ">
          <div className="flex flex-col w-[34%]">
            <text className="text-xs text-black font-medium">
              Interface theme
            </text>
            <text className="text-xs text-gray-300">
              Select or customize your UI theme.
            </text>
          </div>
          <div className="flex flex-col w-[22%]">
            <div className="w-[130px] h-[100px] bg-blue-300 rounded-lg mb-2"></div>
            <text className="text-xs text-black">System preference</text>
          </div>
          <div className="flex flex-col w-[22%]">
            <div className="w-[130px] h-[100px] bg-blue-100 rounded-lg mb-2"></div>
            <text className="text-xs text-black">Light</text>
          </div>
          <div className="flex flex-col w-[22%]">
            <div className="w-[130px] h-[100px] bg-blue-700 rounded-lg mb-2"></div>
            <text className="text-xs text-black">Dark</text>
          </div>
        </div>

        <div className="flex flex-row mt-10">
          <div className="flex flex-col w-[34%]">
            <text className="text-xs text-black font-medium">Title bar</text>
            <text className="text-xs text-gray-300">
              Show color on the title bar.
            </text>
          </div>
          <div className="w-[66%]">
            <ToggleSwitch />
          </div>
        </div>

        <div className="flex flex-row mt-10">
          <div className="flex flex-col w-[34%] ">
            <text className="text-xs text-black font-medium">Color</text>
            <text className="text-xs text-gray-300">
              Choose color for your icon and button.
            </text>
          </div>
          <div className="flex flex-col w-[66%]">
            <div className="flex flex-row mt-2">
              <div className="w-5 h-5 bg-violet-500 rounded-md shadow-md mr-2"></div>
              <div className="w-5 h-5 bg-pink-500 rounded-md shadow-md mr-2"></div>
              <div className="w-5 h-5 bg-blue-500 rounded-md shadow-md mr-2"></div>
              <div className="w-5 h-5 bg-yellow-500 rounded-md shadow-md mr-2"></div>
              <div className="w-5 h-5 bg-green-500 rounded-md shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="w-5 h-5 bg-violet-900 rounded-md shadow-md mr-2"></div>
              <div className="w-5 h-5 bg-amber-800 rounded-md shadow-md mr-2"></div>
              <div className="w-5 h-5 bg-orange-500 rounded-md shadow-md mr-2"></div>
              <div className="w-5 h-5 bg-gray-500 rounded-md shadow-md mr-2"></div>
              <div className="w-5 h-5 bg-white rounded-md shadow-md mr-2"></div>
            </div>
            <div className="flex flex-row mt-5">
              <input type="checkbox" className="mr-[5px]" />
              <text className="text-xs text-black">
                Automatically pick a color from my icon and button.
              </text>
            </div>
            <div className="flex flex-row mt-7 items-center">
              <div className="mr-[5px] bg-blue-950 w-5 h-5 rounded-md"></div>
              <text className="text-xs text-black">Customize</text>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-10">
          <div className="flex flex-col w-[34%] ">
            <text className="text-xs text-black font-medium">Map Color</text>
            <text className="text-xs  text-gray-300">
              Pick a pallete for your map.
            </text>
          </div>
          <div className="flex flex-row w-[66%]">
            <div className="flex flex-row mr-5">
              <div className="w-7 h-5 bg-blue-600"></div>
              <div className="w-7 h-5 bg-blue-400"></div>
              <div className="w-7 h-5 bg-blue-200"></div>
            </div>
            <div className="flex flex-row mr-5">
              <div className="w-7 h-5 bg-pink-600"></div>
              <div className="w-7 h-5 bg-pink-400"></div>
              <div className="w-7 h-5 bg-pink-200"></div>
            </div>
            <div className="flex flex-row mr-5 ">
              <div className="w-7 h-5 bg-red-600"></div>
              <div className="w-7 h-5 bg-red-400"></div>
              <div className="w-7 h-5 bg-red-200"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-row mt-24">
          <button className="bg-gray-400 mr-6 text-white rounded-md font-medium text-xs w-[10%] h-7">
            Cancel
          </button>
          <button className="bg-blue-950 text-white rounded-md font-medium text-xs w-[10%] h-7">
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
