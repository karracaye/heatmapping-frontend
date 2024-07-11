'use client';
import {useState} from 'react';
import TabListButton from './TabListButton';
import { SAMPLE_DATA } from './data';

// Define a type for the keys of SAMPLE_DATA
type SettingKey = keyof typeof SAMPLE_DATA;

export default function ListOfSettings(){
  const [selectedSetting, setSelectedSetting] = useState<SettingKey>('user-management');

   function handleOnSelect(selectedTab:SettingKey){
        setSelectedSetting(selectedTab);
    }

  return (
    <div className="flex flex-row">
      <section>
        <menu>
          <h1 className="font-bold text-gray-500">General Settings</h1>
          <TabListButton onSelect={()=> handleOnSelect('user-management')}>User Management</TabListButton>
          <TabListButton onSelect={()=> handleOnSelect('data-import-export')}>Data Import/Export</TabListButton>

          <h1 className="font-bold text-gray-500">Visualization Settings</h1>
          <TabListButton onSelect={()=> handleOnSelect('color-schemes')}>Color Schemes</TabListButton>
          <TabListButton onSelect={()=> handleOnSelect('data-points')}>Data Points</TabListButton>
          <TabListButton onSelect={()=> handleOnSelect('geographic-overlays')}>Geographic Overlays</TabListButton>
          <TabListButton onSelect={()=> handleOnSelect('leged-and-labels')}>Leged and Labels</TabListButton>
          <TabListButton onSelect={()=> handleOnSelect('heatmap-intensity')}>Heatmap Intensity</TabListButton>
        </menu>
      </section>
      <div className="flex-row border w-full h-full">
        <h3>{SAMPLE_DATA[selectedSetting].title}</h3>
        <p>{SAMPLE_DATA[selectedSetting].description}</p>
      </div>
    </div>
  );
}