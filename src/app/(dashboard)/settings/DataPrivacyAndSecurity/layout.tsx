"use client";
import { Header } from "@/components/Settings/Header";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function DataPrivacyAndSecurityLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname(); //to determine if a link is active
  const dps = {
    links: [
      {
        href: "/settings/DataPrivacyAndSecurity/PasswordAndDataProtection",
        label: "Password And Data Protection"
      },
      {
        href: "/settings/DataPrivacyAndSecurity/DataPrivacyPolicy",
        label: "Data Privacy Policy"
      }
    ]
  };

  return (
    <>
      <Header category={"Data Privacy And Security"} label={"This section details the procedures and protocols for securely handling and storing data within the system, including data encryption, access controls, and retention policies."} />
      <div className="flex flex-row mt-5 p-5">
        <div className="flex flex-col w-[35%]">
          {dps.links.map((link, idx) => (
            <Link key={idx} href={link.href}>
              <label className={`text-xs text-black ${pathName === link.href ? "text-red-600" : "text-black"}`}>
                {link.label}
              </label>
            </Link>
          ))}
        </div>
        <div className="w-[60%]">{children}</div>
      </div>
    </>
  );
}
