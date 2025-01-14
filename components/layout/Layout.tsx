"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="flex h-full overflow-x-hidden">
      <Sidebar isOpen={isSidebarOpen} />
      <motion.div
        key={"Page"}
        initial={{ x: 0 }}
        animate={
          isSidebarOpen
            ? { x: 250, transition: { duration: 0.5 } }
            : { x: 0, transition: { duration: 0.5 } }
        }
        className="w-full "
      >
        <Header toggleHeader={toggleSidebar} isOpen={isSidebarOpen} />
        <main className="p-6">{children}</main>
      </motion.div>
    </div>
  );
};

export default Layout;
