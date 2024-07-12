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
    <div className="flex flex-grow border-[1px] rounded-lg mt-3 mb-5 mx-10 shadow-md h-auto">
      <div className="flex flex-col border-r-[1px] shadow-md pb-24 px-3">
        <div className="border-b-2 m-2 flex flex-row justify-center items-center pb-2 pt-4 pr-28 mx-5 text-black font-bold text-sm">
          <Image src={SettingIcon} alt={"Setting Icon"} />
          <label>Settings</label>
        </div>
        {settingsList.map((section, index) => (
          <div key={index} className="flex flex-col mx-5">
            <label className="text-gray-300 font-bold text-xs mt-3">
              {section.category}
            </label>
            {section.links.map((link, idx) => (
              <Link key={idx} href={link.href} className={`text-xs font-normal text-black cursor-pointer pb-2 pt-2 pl-9 ${pathName === link.href ? 'text-red-900' : 'text-black'}`}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-1 h-auto w-full p-10">{children}</div>
    </div>
  );
}
