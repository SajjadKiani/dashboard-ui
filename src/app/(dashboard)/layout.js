import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/sidebar";

export default function Layout ({children}) {

  return (
    <main className="flex flex-col min-h-screen bg-secondary/30">
      <div className="flex-none px-8 py-3">
        <Navbar />
      </div>
      <div className="flex-grow flex">

          <div className="flex-none px-8 py-10">
            <Sidebar />
          </div>

          <div className="flex-1 p-20 pt-10">
            {children}
          </div>

      </div>
    </main>
  );
}
