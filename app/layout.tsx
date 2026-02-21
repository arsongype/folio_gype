import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero/Hero";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]

})

export const metadata: Metadata = {
  title: "ARSON Portfolio",
  description: "ARSON Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-slate-950`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
