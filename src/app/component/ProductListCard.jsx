import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductListCard({ product, onView }) {
  const hasImage = !!product.imageUrl;
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className={cn(
        "relative h-52 overflow-hidden rounded-t-2xl",
        hasImage ? "bg-[#1a2235]" : "bg-slate-100"
      )}>
        <span className={cn(
          "absolute top-3 left-3 z-10 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest",
          hasImage ? "bg-white/15 text-white backdrop-blur-sm" : "bg-slate-800 text-white"
        )}>
          New
        </span>

        <div className="absolute top-3 left-3 z-10 mt-6">
          <div className="mt-1 flex items-center gap-1 rounded-full bg-white px-2 py-0.5 shadow-sm">
            <Star className="size-3 fill-amber-400 text-amber-400" />
            <span className="text-[11px] font-bold text-slate-700">4.9</span>
          </div>
        </div>

        <Image
          src={hasImage ? product.imageUrl : "/headset.png"}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className={cn(
            "transition-transform duration-500 group-hover:scale-105",
            hasImage ? "object-cover" : "object-contain p-8"
          )}
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-sky-500">
              Flagship Series
            </span>
            <h3 className="line-clamp-1 text-base font-bold text-slate-900">
              {product.name}
            </h3>
          </div>
          <span className="shrink-0 text-lg font-black text-slate-900">
            ${product.price?.toLocaleString()}
          </span>
        </div>

        <p className="line-clamp-2 text-xs leading-relaxed text-slate-400">
          {product.description}
        </p>

        <button
            onClick={() => onView?.(product)}
            className="mt-auto flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700 active:scale-95"
          >
            View Product
            <ArrowUpRight className="size-3.5" />
          </button>
      </div>
    </div>
  );
}
