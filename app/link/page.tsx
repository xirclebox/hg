"use client";
import React, { useState } from "react";
import Link from "@/components/Link/Link";

export default function Page() {
  return (
    <>
      <h1>Link</h1>
      <p>Component description</p>
      <section>
        <Link href={""}>Link label</Link>
      </section>
    </>
  );
}
