import type { Metadata } from "next";
import "./globals.css";

import  Header  from "./components//Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: "YourBento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
