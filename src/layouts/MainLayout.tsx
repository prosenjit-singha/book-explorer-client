import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Main Section */}
      <main className="min-h-[calc(100vh-164px)] flex flex-col">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
