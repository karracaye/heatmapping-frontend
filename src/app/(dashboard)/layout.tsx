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
      <div className="flex-1">
        <Navbar />
        <main >{children}</main>
      </div>
    </div>
  );
}
