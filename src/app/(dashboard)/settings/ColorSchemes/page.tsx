'use client';
import ToggleSwitch from "@/components/ToggleSwitch";
import { useState } from "react";
import { Header } from '@/components/Settings/Header';

export default function ColorSchemeSetting() {
  const [isLight, setIsLight] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const handleLightToggle = () => {
    setIsLight(true);
    setIsDark(false);
  };

  const handleDarkToggle = () => {
    setIsLight(false);
    setIsDark(true);
  };

  return (
    <>
      <Header category={'Color Scheme'}
        label={'Change how Untitled UI look and feels in your browser.'} />
      <div className="flex flex-col mt-5">
        <label className="text-black font-medium text-xs">Color</label>
        <div className="flex flex-row mt-2">
          <div className="w-8 h-8 bg-violet-500 rounded-xl shadow-md mr-2"></div>
          <div className="w-8 h-8 bg-pink-500 rounded-xl shadow-md mr-2"></div>
          <div className="w-8 h-8 bg-blue-500 rounded-xl shadow-md mr-2"></div>
          <div className="w-8 h-8 bg-yellow-500 rounded-xl shadow-md mr-2"></div>
          <div className="w-8 h-8 bg-green-500 rounded-xl shadow-md mr-2"></div>
        </div>
        <div className="flex flex-row mt-2">
          <div className="w-8 h-8 bg-violet-900 rounded-xl shadow-md mr-2"></div>
          <div className="w-8 h-8 bg-amber-800 rounded-xl shadow-md mr-2"></div>
          <div className="w-8 h-8 bg-orange-500 rounded-xl shadow-md mr-2"></div>
          <div className="w-8 h-8 bg-gray-500 rounded-xl shadow-md mr-2"></div>
          <div className="w-8 h-8 bg-white rounded-xl shadow-md mr-2"></div>
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
          <button className="bg-gray-400 text-white mr-8 py-2 px-10 rounded-lg font-medium text-sm">
            Cancel
          </button>
          <button className="bg-blue-950 text-white py-2 px-10 rounded-lg font-medium text-sm">
            Save
          </button>
        </div>
      </div>
    </>

  );
}
