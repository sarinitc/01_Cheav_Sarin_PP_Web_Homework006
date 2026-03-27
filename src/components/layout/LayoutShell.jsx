"use client";

import { SidebarProvider, useSidebar } from "./SidebarContext";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function LayoutInner({ children }) {
  const { collapsed } = useSidebar();
  return (
    <div className="flex min-h-full w-full">
      <Sidebar />
      <div
        className="flex flex-1 flex-col transition-all duration-300"
        style={{ paddingLeft: collapsed ? "4rem" : "12.5rem" }}
      >
        <Navbar />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}

export default function LayoutShell({ children }) {
  return (
    <SidebarProvider>
      <LayoutInner>{children}</LayoutInner>
    </SidebarProvider>
  );
}
