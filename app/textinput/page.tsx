"use client";
import React, { useState } from "react";
import TextInput from "@/components/TextInput/TextInput";

export default function Page() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1 className="Page__heading">Text Input</h1>
      <p>Component description</p>
      <section>
        <TextInput
          id="my-input"
          label="Enter your name"
          placeholder="John Doe"
          value={inputValue}
          onChange={setInputValue}
          required
          onBlur={() => {}}
        />
      </section>
    </div>
  );
}
