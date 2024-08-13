import "./globals.css";
import Script from "next/script";
import Header from "@/components/header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://analytics.board.ddns.net/script.js"
          data-website-id="391d14f2-956d-489c-a5c1-452c3ed09f41"
        ></Script>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
