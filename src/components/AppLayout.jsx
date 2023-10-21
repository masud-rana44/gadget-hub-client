import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export function AppLayout() {
  return (
    <div>
      <Navbar />
      <main className="pt-[80px] bg-white text-slate-600 dark:bg-slate-800 dark:text-white pb-24">
        <ScrollToTop>
          <Outlet />
        </ScrollToTop>
      </main>
      <Footer />
    </div>
  );
}
