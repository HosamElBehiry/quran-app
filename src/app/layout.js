import { Header } from "@/components/layout/header";
import { Navbar } from "@/components/layout/nav-bar";
import { Footer } from "@/components/layout/footer";
import { Cairo } from "next/font/google";

import "swiper/css";
import "./globals.css";

const Font = Cairo({
  variable: "--font-cairo",
  weight: ["400", "500", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata = {
  title: "Quran App",
  description: "Quran App description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body dir="rtl" className={`antialiased ${Font.className}`}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
