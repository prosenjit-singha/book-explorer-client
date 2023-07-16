import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main Section */}
      <main className="min-h-[100vh]">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
