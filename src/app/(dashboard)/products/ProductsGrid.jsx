"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import ProductListCard from "@/app/component/ProductListCard";
import ProductDetailModal from "./ProductDetailModal";

export default function ProductsGrid({ products }) {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.name?.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
    );
  }, [products, query]);

  return (
    <>
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm w-72">
        <Search className="size-4 shrink-0 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-slate-400 text-sm">
          No products match &ldquo;{query}&rdquo;.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductListCard
              key={product.productId}
              product={product}
              onView={setSelected}
            />
          ))}
        </div>
      )}

      <ProductDetailModal
        product={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
