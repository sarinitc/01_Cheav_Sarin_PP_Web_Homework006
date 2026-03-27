"use client";

import { useState, useMemo } from "react";
import { Calendar, Eye, Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomerDetailModal from "./CustomerDetailModal";

export default function CustomersTable({ customers }) {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return customers;
    return customers.filter(
      (c) =>
        c.firstName?.toLowerCase().includes(q) ||
        c.lastName?.toLowerCase().includes(q) ||
        `${c.firstName} ${c.lastName}`.toLowerCase().includes(q)
    );
  }, [customers, query]);

  return (
    <>
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm w-72">
        <Search className="size-4 shrink-0 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search customers..."
          className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
        />
      </div>

      <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-100 bg-white hover:bg-white">
              <TableHead className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500">
                Customer Name
              </TableHead>
              <TableHead className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500">
                Birthdate
              </TableHead>
              <TableHead className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500">
                Amount Spent
              </TableHead>
              <TableHead className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {customers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="py-12 text-center text-slate-400 text-sm">
                  No customers found.
                </TableCell>
              </TableRow>
            ) : filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="py-12 text-center text-slate-400 text-sm">
                  No customers match &ldquo;{query}&rdquo;.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((customer) => (
                <TableRow
                  key={customer.customerId}
                  className="border-b border-slate-50 hover:bg-slate-50/60 transition-colors"
                >
                  <TableCell className="py-4 px-6">
                    <p className="font-bold text-slate-900 text-sm">
                      {customer.firstName} {customer.lastName}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      ID: {customer.customerId.slice(0, 8)}...
                    </p>
                  </TableCell>

                  <TableCell className="py-4 px-6">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="size-3.5 text-slate-400" />
                      {customer.birthDate}
                    </div>
                  </TableCell>

                  <TableCell className="py-4 px-6">
                    <span className="text-sm font-bold text-emerald-600">
                      ${customer.moneySpent?.toLocaleString()}
                    </span>
                  </TableCell>

                  <TableCell className="py-4 px-6 text-right">
                    <button
                      onClick={() => setSelected(customer)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50 hover:border-slate-300 active:scale-95"
                    >
                      <Eye className="size-3.5" />
                      View Profile
                    </button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <CustomerDetailModal
        customer={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
