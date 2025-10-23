import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
