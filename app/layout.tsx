import type { Metadata } from "next";

import "./globals.scss";
import SkipContent from "@/components/SkipContent/SkipContent";

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
            <h1 className="name">xircleui</h1>
            <p></p>
          </header>
          <main id="main" className="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
