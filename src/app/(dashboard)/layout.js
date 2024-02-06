import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/sidebar";

export default function Layout ({children}) {

  return (
    <main className="flex min-h-screen bg-secondary/30">
      <div className="px-8 py-5 min-w-[300px]">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">

          <div className="px-8 py-5">
            <Navbar />
          </div>

          <div className="flex-1 container">
            {children}
          </div>

      </div>
    </main>
  );
}
