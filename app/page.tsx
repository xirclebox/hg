"use client";
import React from "react";

import ComponentList from "@/components/ComponentList/ComponentList";
import { components } from "../components/ComponentList/ComponentListItems";

export default function Home() {
  return <ComponentList components={components} />;
}
