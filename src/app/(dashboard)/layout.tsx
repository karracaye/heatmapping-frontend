import Navbar from "@/components/Navigations/NavBar";
import Sidebar from "@/components/Navigations/SideBar";

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
