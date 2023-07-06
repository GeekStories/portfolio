"use client";
import "./globals.css";
import Header from "@/components/header";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Header />
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
