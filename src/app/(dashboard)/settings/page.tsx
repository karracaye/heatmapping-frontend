'use client';
import {useState} from 'react';
import SettingList from '../../../components/SettingList';
import {SAMPLE_DATA} from './data';
import ColorSchemeSetting from '@/components/ColorSchemeSetting';
import UserManagementSetting from '@/components/UserManagementSetting';

// Define a type for the keys of SAMPLE_DATA
type SettingKey = keyof typeof SAMPLE_DATA;

const Settings = () => {
  const [selectedSetting, setSelectedSetting] = useState<SettingKey>('user-management');

  function handleOnSelect(settingIdentifier:SettingKey){
    setSelectedSetting(settingIdentifier);
  }

  return (
    <div className="flex flex-1 border-2 rounded-lg m-5 shadow-md">
      <div className="border-[1px] pl-10 pr-10 pt-14 pb-20 rounded-bl-lg rounded-tl-lg shadow-md">
          <text className="text-2xl font-bold border-b-[3px] pb-4 pr-36">Settings</text>
          <div className="flex flex-col mt-10 mb-3">
            <span className="text-gray-300 font-bold text-base mt-5">General Settings</span>
            <SettingList onSelect={()=>handleOnSelect('user-management')}>User Management</SettingList>
            <SettingList onSelect={()=>handleOnSelect('data-import-export')}>Data Import/Export</SettingList>

            <span className="text-gray-300 font-bold text-base mt-5">Visualization Settings</span>
            <SettingList onSelect={()=>handleOnSelect('color-schemes')}>Color Schemes</SettingList>
            <SettingList onSelect={()=>handleOnSelect('data-points')}>Data Points</SettingList>
            <SettingList onSelect={()=>handleOnSelect('geographic-overlays')}>Geographical Overlays</SettingList>
            <SettingList onSelect={()=>handleOnSelect('legend-and-labels')}>Legends and Labels</SettingList>
            <SettingList onSelect={()=>handleOnSelect('heatmap-intensity')}>Heatmap Intensity</SettingList>

            <span className="text-gray-300 font-bold text-base mt-5">Interactive Features</span>
            <SettingList onSelect={()=>handleOnSelect('time-slider')}>Time Slider</SettingList>
            <SettingList onSelect={()=>handleOnSelect('hover-tooltips')}>Hover Tooltips</SettingList>
            <SettingList onSelect={()=>handleOnSelect('clickable-data-points')}>Clickable Data Points</SettingList>

            <span className="text-gray-300 font-bold text-base mt-5">Data Management</span>
            <SettingList onSelect={()=>handleOnSelect('data-filters')}>Data Filters</SettingList>
            <SettingList onSelect={()=>handleOnSelect('data-privacy-and-security')}>Data Privacy and Security</SettingList>

            <span className="text-gray-300 font-bold text-base mt-5">Notification and Alerts</span>
            <SettingList onSelect={()=>handleOnSelect('alert-configurations')}>Alert Configurations</SettingList>
          </div>
      </div>
      <div className="flex-1 p-10">
    	  {selectedSetting === 'user-management' && (<UserManagementSetting />)}
        {selectedSetting === 'color-schemes' && (<ColorSchemeSetting />)}
      </div>
    </div>
  );
};

export default Settings;
