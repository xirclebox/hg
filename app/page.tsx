"use client";
import React from "react";
import SkipContent from "@/components/SkipContent/SkipContent";
import Navbar from "@/components/Navbar/Navbar";
import ComponentList from "@/components/ComponentList/ComponentList";
import { components } from "../components/ComponentList/ComponentListItems";

export default function Home() {
  return (
    <div className="Site__wrapper">
      <SkipContent />
      <header className="Site__Header">
        <Navbar />
      </header>
      <main id="main" className="main">
        <ComponentList components={components} />
      </main>
    </div>
  );
}
