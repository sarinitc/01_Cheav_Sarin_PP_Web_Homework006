"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Share2,
  Truck,
  Sparkles,
  Minus,
  Plus,
  ShoppingCart,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProductDetailModal({ product, open, onClose }) {
  const [qty, setQty] = useState(1);

  if (!product) return null;

  const originalPrice = Math.round(product.price * 1.2);
  const savePct = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100
  );

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-4xl sm:max-w-4xl w-full p-0 overflow-hidden rounded-3xl border-0 gap-0 ring-0"
      >
        <DialogTitle className="sr-only">{product.name}</DialogTitle>

        <div className="flex flex-col lg:flex-row min-h-140">
          <div className="relative lg:w-[55%] bg-slate-100 flex items-center justify-center p-10">
            <div className="absolute top-5 left-5 flex flex-col gap-2">
              <Badge className="bg-slate-900 text-white text-[10px] tracking-widest px-3 py-1 rounded-full gap-1.5">
                <Sparkles className="w-3 h-3" />
                NEW ARRIVAL
              </Badge>
              <Badge className="bg-slate-900 text-white text-[10px] tracking-widest px-3 py-1 rounded-full gap-1.5">
                <Truck className="w-3 h-3" />
                FREE SHIPPING
              </Badge>
            </div>

            <div className="absolute top-5 right-5 flex gap-2">
              <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>

            <div className="relative w-72 h-72">
              <Image
                src={product.imageUrl ?? "/headset.png"}
                alt={product.name}
                fill
                sizes="288px"
                className={cn(
                  "transition-transform duration-300",
                  product.imageUrl ? "object-contain drop-shadow-xl" : "object-contain p-6"
                )}
              />
            </div>
          </div>

          <div className="lg:w-[45%] flex flex-col justify-center p-10 gap-6 overflow-y-auto">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs font-semibold tracking-[0.2em] text-teal-500 uppercase">
              Premium Experience
            </p>

            <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-4xl font-bold text-slate-900">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-lg text-slate-400 line-through">
                ${originalPrice.toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-emerald-500 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                SAVE {savePct}% TODAY
              </span>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed border-l-4 border-teal-300 pl-3">
              {product.description || "No description available."}
            </p>

            <div>
              <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-2">
                Select Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-lg font-semibold text-slate-800">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <span className="ml-2 text-sm text-slate-500">
                  Subtotal:{" "}
                  <span className="font-semibold text-slate-700">
                    ${(product.price * qty).toLocaleString()}
                  </span>
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-slate-900 hover:bg-slate-700 text-white rounded-full h-11 gap-2">
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="flex-1 rounded-full h-11 border-slate-900 text-slate-900 hover:bg-slate-50"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
