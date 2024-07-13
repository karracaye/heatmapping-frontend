import Navbar from "@/components/NavBar";
import Sidebar from "@/components/SideBar";

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
