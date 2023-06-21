"use client";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import Sidebar from "@/components/sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Sidebar />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
