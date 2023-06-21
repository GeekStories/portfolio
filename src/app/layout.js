"use client";
import "./globals.css";
import { AnimatePresence } from "framer-motion";
import Sidebar from "@/components/sidebar";

export const metadata = {
  title: "Damon Pitkethley",
  description: "Portfolio Website",
};

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
