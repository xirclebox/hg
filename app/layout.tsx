import type { Metadata } from "next";

import "./globals.scss";
import SkipContent from "@/components/SkipContent/SkipContent";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Xircle UI",
  description: "An accessible component library",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="">
        <div className="Site__wrapper">
          <SkipContent />
          <header className="Site__Header">
            <Navbar />
          </header>
          <main id="main" className="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
