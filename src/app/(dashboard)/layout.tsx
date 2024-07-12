import Sidebar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-auto">
        <NavBar />
        {children}
      </main>
    </div>
  );
}
