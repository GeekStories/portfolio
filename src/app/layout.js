import "./globals.css";
import Header from "@/components/header";
import NavBar from "@/components/NavBar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
