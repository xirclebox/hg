import React from "react";
import SkipContent from "@/components/SkipContent/SkipContent";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="Site__wrapper">
      <SkipContent />
      <header className="Site__Header">
        <Navbar />
      </header>
      <main id="main" className="main">
        <section>test</section>
      </main>
    </div>
  );
}
