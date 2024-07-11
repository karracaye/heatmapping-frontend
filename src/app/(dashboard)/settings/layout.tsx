'use client';
// import REACT, { useState } from "react";
import styles from "../../../styles/textList.module.css";
import { SAMPLE_DATA } from "./data";
import Image from "next/image";
import SettingIcon from "../../../../public/icon/setting.svg";
import DataImportExport from "./DataImportExport";
import ColorSchemeSetting from "@/components/ColorSchemeSetting";
import Link from "next/link";
import { useState } from "react";

// Define a type for the keys of SAMPLE_DATA
type SettingKey = keyof typeof SAMPLE_DATA;

export default function SettingsLayout({
  children
}: {
  children: React.ReactNode;
}) {

const [selectedSetting, setSelectedSetting] = useState<SettingKey>();

function handleOnClick(settingIdentifier: SettingKey) {
  setSelectedSetting(settingIdentifier);
}

let settingContent = (
  <p className="text-black text-sm text-center">No Selected Setting yet...</p>
);

if (selectedSetting) {
  settingContent = (
    <>
      {/* {selectedSetting === "user-management" && <UserManagementSetting />} */}
      {selectedSetting === "data-import-export" && <DataImportExport />}
      {selectedSetting === "color-schemes" && <ColorSchemeSetting />}
    </>
  );
}

  return (
    <div className="flex flex-grow border-[1px] rounded-lg mt-3 mb-5 mx-10 shadow-md h-auto">
      <div className="flex flex-col pl-10 pr-10 pt-6 pb-32 rounded-bl-lg rounded-tl-lg shadow-md border">
        <Image src={SettingIcon} alt="Setting Icon" />
        <label className="text-2xl font-medium border-b-[2px] pb-3 pt-3 pr-28">
          Settings
        </label>
        <div className="flex flex-col mt-5 mb-3">
          <label className="text-gray-300 font-medium text-sm mt-3">
            General Settings
          </label>
          <Link
            href={"/settings/UserManagement"}
            className={`${styles.textList} ${
              selectedSetting === "user-management" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
          >
            User Management
          </Link>
          <text
            className={`${styles.textList} ${
              selectedSetting === "data-import-export" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("data-import-export")}
          >
            Data Import/Export
          </text>

          <label className="text-gray-300 font-medium text-sm mt-3">
            Visualization Settings
          </label>
          <text
            className={`${styles.textList} ${
              selectedSetting === "color-schemes" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("color-schemes")}
          >
            Color Schemes
          </text>
          <text
            className={`${styles.textList} ${
              selectedSetting === "data-points" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("data-points")}
          >
            Data Points
          </text>
          <text
            className={`${styles.textList} ${
              selectedSetting === "geographic-overlays" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("geographic-overlays")}
          >
            Geographical Overlays
          </text>
          <text
            className={`${styles.textList} ${
              selectedSetting === "legend-and-labels" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("legend-and-labels")}
          >
            Legends and Labels
          </text>
          <text
            className={`${styles.textList} ${
              selectedSetting === "heatmap-intensity" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("heatmap-intensity")}
          >
            Heatmap Intensity
          </text>

          <label className="text-gray-300 font-medium text-sm mt-3">
            Interactive Features
          </label>
          <text
            className={`${styles.textList} ${
              selectedSetting === "time-slider" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("time-slider")}
          >
            Time Slider
          </text>
          <text
            className={`${styles.textList} ${
              selectedSetting === "hover-tooltips" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("hover-tooltips")}
          >
            Hover Tooltips
          </text>
          <text
            className={`${styles.textList} ${
              selectedSetting === "clickable-data-points" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("clickable-data-points")}
          >
            Clickable Data Points
          </text>

          <label className="text-gray-300 font-medium text-sm mt-3">
            Data Management
          </label>
          <text
            className={`${styles.textList} ${
              selectedSetting === "data-filters" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("data-filters")}
          >
            Data Filters
          </text>
          <text
            className={`${styles.textList} ${
              selectedSetting === "data-privacy-and-security"
                ? styles.active
                : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("data-privacy-and-security")}
          >
            Data Privacy and Security
          </text>

          <label className="text-gray-300 font-medium text-sm mt-3">
            Notification and Alerts
          </label>
          <text
            className={`${styles.textList} ${
              selectedSetting === "alert-configurations" ? styles.active : null
            } text-xs text-black cursor-pointer pb-2 pt-2 pl-9`}
            onClick={() => handleOnClick("alert-configurations")}
          >
            Alert Configurations
          </text>
        </div>
      </div>
      <div className="flex flex-1 h-auto w-full p-10">{children}</div>
    </div>
  );
}
