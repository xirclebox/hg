"use client";
import React, { useRef, useState } from "react";
import PopupMenu from "@/components/PopupMenu/PopupMenu";
import MenuItem from "@/components/MenuItem/MenuItem";

export default function Page() {
  return (
    <>
      <h1 className="Page__heading">Link</h1>
      <p>Component description</p>
      <section>
        <PopupMenu trigger="Menu">
          <MenuItem href="/button">Button</MenuItem>
          <MenuItem href="/link">Link</MenuItem>
          <MenuItem href="/textinput">Text Input</MenuItem>
        </PopupMenu>
      </section>
    </>
  );
}
