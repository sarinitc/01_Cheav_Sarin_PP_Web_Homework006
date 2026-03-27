"use client";

import {
  User,
  Calendar,
  CreditCard,
  ArrowLeft,
  X,
  Pencil,
  Trash2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function CustomerDetailModal({ customer, open, onClose }) {
  if (!customer) return null;

  const fullName = `${customer.firstName} ${customer.lastName}`;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-3xl sm:max-w-3xl w-full p-0 overflow-hidden rounded-3xl border-0 gap-0 ring-0"
      >
        <DialogTitle className="sr-only">{fullName}</DialogTitle>

        <div className="flex flex-col sm:flex-row min-h-72">
          <div className="sm:w-[38%] bg-slate-100 flex flex-col items-center justify-center gap-5 py-12 px-8">
            <div className="w-28 h-28 rounded-full bg-slate-300 flex items-center justify-center shadow-inner">
              <User className="w-14 h-14 text-slate-500" strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-extrabold text-slate-900 text-center leading-tight">
              {fullName}
            </p>
          </div>

          <div className="sm:w-[62%] bg-white flex flex-col gap-6 p-8">
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 text-xs font-semibold tracking-widest text-slate-400 uppercase hover:text-slate-700 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back to Customer Table
              </button>
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Full Name
                </p>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">
                    {fullName}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Total Spent
                </p>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-3xl font-extrabold text-slate-900">
                    ${customer.moneySpent?.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Birthdate
                </p>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">
                    {customer.birthDate}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  Account ID
                </p>
                <div className="rounded-lg bg-slate-50 border border-slate-100 px-3 py-2">
                  <p className="text-xs text-slate-400 font-mono break-all leading-relaxed">
                    {customer.customerId}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-auto pt-2">
              <Button className="flex-1 bg-slate-900 hover:bg-slate-700 text-white rounded-xl h-11 gap-2">
                <Pencil className="w-3.5 h-3.5" />
                Edit Profile
              </Button>
              <Button
                variant="outline"
                className="flex-1 rounded-xl h-11 border-rose-200 text-rose-400 bg-rose-50 hover:bg-rose-100 hover:border-rose-300 gap-2"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete This User
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
