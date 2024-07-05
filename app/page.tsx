"use client";
import React from "react";
import SkipContent from "@/components/SkipContent/SkipContent";
import Navbar from "@/components/Navbar/Navbar";
import Popup from "@/components/Popup/Popup";
import Popover from "@/components/Popover/Popover";
import Toggletip from "@/components/Toggletip/Toggletip";
import PopoverMenu from "@/components/PopoverMenu/PopoverMenu";
import Toast from "@/components/Toast/Toast";

export default function Home() {
  return (
    <div className="Site__wrapper">
      <SkipContent />
      <header className="Site__Header">
        <Navbar />
      </header>
      <main id="main" className="main">
        <section>
          <h1 className="me">Homer Gaines, CPACC</h1>
          <p>
            Designer + Front-end Developer + Certified Accessibility
            Professional
          </p>
          <Popup
            trigger={<button>Open Popup</button>}
            content={<p>This is the popup content.</p>}
            onClose={() => console.log("Popup closed")}
            title="Example Popup"
          />
          <div>
            <Popover
              trigger={<button>Open Popover</button>}
              content={
                <div>
                  <h2>Popover Content</h2>
                  <p>This is the content of the popover.</p>
                </div>
              }
            />
          </div>
          <Toggletip content="A toggletip is like a tooltip, but it stays open until the user closes it or clicks outside.">
            toggletips
          </Toggletip>

          <PopoverMenu trigger="Open Menu">
            <div className="menu-item">Item 1</div>
            <div className="menu-item">Item 2</div>
            <div className="menu-item">Item 3</div>
          </PopoverMenu>

          <Toast message="This is an info toast!" type="warning" />
        </section>
      </main>
    </div>
  );
}
