"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, ShoppingCart, PanelLeft, User, CreditCard, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "./SidebarContext";

export default function Navbar() {
  const { toggle } = useSidebar();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handler(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-white px-6">
      <Button variant="ghost" size="icon" className="text-slate-400" onClick={toggle}>
        <PanelLeft className="h-5 w-5" />
      </Button>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-slate-500">
          <Bell className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" className="relative text-slate-500">
          <ShoppingCart className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 p-0 text-[10px] text-white hover:bg-sky-500">
            3
          </Badge>
        </Button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-3 pl-2 rounded-lg hover:bg-slate-50 pr-2 py-1 transition-colors"
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src="" alt="Admin User" />
              <AvatarFallback className="bg-amber-100 text-amber-700 text-xs font-semibold">
                AU
              </AvatarFallback>
            </Avatar>
            <div className="hidden flex-col md:flex text-left">
              <span className="text-sm font-semibold leading-tight text-slate-800">
                Admin User
              </span>
              <span className="text-[11px] text-slate-400">KSHRD</span>
            </div>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-slate-100 bg-white shadow-xl py-2 z-50">
              <div className="px-4 py-3">
                <p className="text-sm font-semibold text-slate-800">Admin User</p>
                <p className="text-xs text-slate-400 mt-0.5">admin@hrdshop.com</p>
              </div>

              <Separator className="my-1" />

              {[
                { icon: User, label: "My Profile" },
                { icon: CreditCard, label: "Billing" },
                { icon: Settings, label: "Settings" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                >
                  <Icon className="w-4 h-4 text-slate-400" />
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
