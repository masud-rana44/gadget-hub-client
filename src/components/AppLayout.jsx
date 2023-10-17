import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export function AppLayout() {
  return (
    <div>
      <Navbar />
      <main className="pt-[80px]">
        <Outlet />
      </main>
    </div>
  );
}
