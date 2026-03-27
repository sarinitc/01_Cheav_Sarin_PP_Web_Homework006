"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Package,
  Users,
  LayoutGrid,
  Settings,
  LogOut,
  Store,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "./SidebarContext";

const menuItems = [
  { label: "Products", icon: Package, href: "/products" },
  { label: "Customer", icon: Users, href: "/customers" },
  { label: "Categories", icon: LayoutGrid, href: "/categories" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { collapsed } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 flex h-screen flex-col border-r bg-white transition-all duration-300 overflow-hidden",
        collapsed ? "w-16" : "w-50"
      )}
    >
      <div className="flex items-center gap-2.5 px-3.5 py-6 min-w-0">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100">
          <Store className="h-5 w-5 text-sky-500" />
        </div>
        {!collapsed && (
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-bold leading-tight text-slate-800 whitespace-nowrap">
              HRD <span className="text-slate-800">SHOP</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400 whitespace-nowrap">
              Admin V2.0
            </span>
          </div>
        )}
      </div>

      {!collapsed && (
        <div className="px-5 pt-2 pb-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Main Menu
          </span>
        </div>
      )}

      <nav className="flex flex-1 flex-col gap-1 px-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                collapsed && "justify-center",
                isActive
                  ? "bg-cyan-500 text-white"
                  : "text-slate-500 hover:bg-cyan-50 hover:text-cyan-600"
              )}
            >
              <item.icon className="h-4.5 w-4.5 shrink-0" />
              {!collapsed && item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-2 pb-6">
        <Separator className="mb-4" />
        <button
          title={collapsed ? "Sign Out" : undefined}
          className={cn(
            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50",
            collapsed && "justify-center"
          )}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-white">
            N
          </div>
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </aside>
  );
}
