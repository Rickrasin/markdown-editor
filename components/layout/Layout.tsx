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
    <div className="flex h-screen overflow-x-hidden overflow-y-hidden ">
      <Sidebar isOpen={isSidebarOpen} />
      <motion.div
        key={"Page"}
        initial={{ x: 0 }}
        animate={
          isSidebarOpen
            ? { x: 250, transition: { duration: 0.5 } }
            : { x: 0, transition: { duration: 0.5 } }
        }
        className="w-full"
      >
        <main className="flex flex-col w-full h-full">
          <Header toggleHeader={toggleSidebar} isOpen={isSidebarOpen} />
          {children}
        </main>
      </motion.div>
    </div>
  );
};

export default Layout;
