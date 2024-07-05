import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Heatmap",
    description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className='font-plus-jakarta-sans'>{ children }</body>
        </html>
    )
}
