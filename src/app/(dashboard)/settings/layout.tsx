'use client';
import SettingIcon from "../../../../public/icon/setting.svg";
import Image from 'next/image'
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function SettingsLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const pathName = usePathname(); //to determine if a link is active

  const settingsList = [
    {
      category: 'General Settings', links: [
        { href: '/settings/UserManagement', label: 'User Management' },
        { href: '/settings/DataImportExport', label: 'Data Import/Export' },
      ]
    },
    {
      category: 'Visualization Settings', links: [
        { href: '/settings/ColorSchemes', label: 'Color Schemes' },
        { href: '/settings/DataPoints', label: 'Data Points' },
        { href: '/settings/GeographicOverlays', label: 'Geographical Overlays' },
        { href: '/settings/LegendAndLabels', label: 'Legends and Labels' },
      ]
    },
    {
      category: 'Interactive Features', links: [
        { href: '/settings/TimeSlider', label: 'Time Slider' },
        { href: '/settings/HoverTooltips', label: 'Hover Tooltips' },
        { href: '/settings/ClickableDataPoints', label: 'Clickable Data Points' },
      ]
    },
    {
      category: 'Data Management', links: [
        { href: '/settings/DataFilters', label: 'Data Filters' },
        { href: '/settings/DataPrivacyAndSecurity', label: 'Data Privacy and Security' },
      ]
    },
    {
      category: 'Notification and Alerts', links: [
        { href: '/settings/AlertConfiguration', label: 'Alert Configuration' },
      ]
    },
  ];

  return (
    <div className="w-full h-full grow pt-5 pl-[3%] pr-[2.5%]">
      <div className="flex flex-row relative max-h-full min-h-[80vh] rounded-[10px] shadow-[0_0_1px_2.9px_rgba(0,0,0,0.03)]">
        {/* Side Bar */}
        <div className="w-[20%] border-r-[1px] shadow-md p-6 rounded-l-md bg-white">
          <div className="flex flex-wrap items-center flex-row border-b-[1px] pb-2 mb-5">
            <Image src={SettingIcon} alt={"Setting Icon"} />
            <label className="text-sm font-bold">Settings</label>
          </div>
          {settingsList.map((section, index) => (
            <div key={index} className="flex flex-wrap flex-col">
              <label className="text-gray-300 font-medium text-xs mt-3 pl-2">
                {section.category}
              </label>
              {section.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className={`text-xs font-normal text-black cursor-pointer pb-2 pt-2 pl-10 ${
                    pathName === link.href ? "text-red-600" : "text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        {/* Content Area */}
        <div className="w-[80%] pt-10 pl-14 pr-24 rounded-r-[10px] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
