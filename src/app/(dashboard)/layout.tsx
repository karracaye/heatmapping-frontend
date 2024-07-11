import Sidebar from "@/components/SideBar";
import Navbar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-auto">
        <Navbar />
        {children}
        </main>
    </div>
  );
}
