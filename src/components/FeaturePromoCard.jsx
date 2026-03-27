"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const themes = {
  pink: {
    cardGradient: "from-[#fff0f5] via-[#fff5f8] to-white",
    border: "border border-pink-100",
    shadow: "shadow-[0_4px_28px_rgba(236,72,153,0.08)]",
    hoverShadow: "hover:shadow-[0_18px_52px_rgba(236,72,153,0.16)]",
    orb: "bg-pink-300/20",
    imageGlowColor: "rgba(236,72,153,0.14)",
    badgeBg: "bg-pink-500/10",
    badgeText: "text-pink-600",
    accentText: "text-pink-500",
    btnCls: "bg-pink-400 hover:bg-pink-600 shadow-[0_6px_18px_rgba(236,72,153,0.35)] hover:shadow-[0_8px_24px_rgba(236,72,153,0.45)]",
    placeholderBg: "bg-pink-100/70",
    placeholderIcon: "text-pink-300",
  },
  amber: {
    cardGradient: "from-[#fffcf0] via-[#fffdf6] to-white",
    border: "border border-amber-100",
    shadow: "shadow-[0_4px_28px_rgba(245,158,11,0.07)]",
    hoverShadow: "hover:shadow-[0_18px_52px_rgba(245,158,11,0.13)]",
    orb: "bg-amber-200/25",
    imageGlowColor: "rgba(251,191,36,0.22)",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-700",
    accentText: "text-amber-500",
    btnCls: "bg-amber-400 hover:bg-amber-500 shadow-[0_6px_18px_rgba(245,158,11,0.35)] hover:shadow-[0_8px_24px_rgba(245,158,11,0.45)]",
    placeholderBg: "bg-amber-100/70",
    placeholderIcon: "text-amber-300",
  },
  blue: {
    cardGradient: "from-sky-50 via-sky-50/60 to-white",
    border: "border border-sky-100",
    shadow: "shadow-[0_4px_28px_rgba(14,165,233,0.07)]",
    hoverShadow: "hover:shadow-[0_18px_52px_rgba(14,165,233,0.14)]",
    orb: "bg-sky-200/25",
    imageGlowColor: "rgba(14,165,233,0.12)",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-700",
    accentText: "text-sky-500",
    btnCls: "bg-sky-400 hover:bg-sky-600 shadow-[0_6px_18px_rgba(14,165,233,0.35)] hover:shadow-[0_8px_24px_rgba(14,165,233,0.45)]",
    placeholderBg: "bg-sky-100/70",
    placeholderIcon: "text-sky-300",
  },
};

export default function FeaturePromoCard({
  theme = "pink",
  badge,
  badgeIcon,
  titleStart,
  titleAccent,
  subtitle,
  image,
  imagePlaceholder,
  statLabel,
  statValue,
  actionLabel,
  actionHref = "#",
}) {
  const t = themes[theme] ?? themes.pink;

  return (
    <Card
      className={cn(
        "group relative flex h-125 w-full flex-col gap-0 overflow-hidden rounded-[28px] p-6 ring-0",
        "bg-linear-to-br",
        t.cardGradient,
        t.border,
        t.shadow,
        t.hoverShadow,
        "transition-all duration-500 hover:-translate-y-1.5"
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full blur-3xl",
          "transition-opacity duration-700 group-hover:opacity-90",
          t.orb
        )}
      />


      <div className="relative z-10 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em]",
              t.badgeBg,
              t.badgeText
            )}
          >
            {badge}
          </span>
          {badgeIcon && (
            <span className={cn("flex items-center", t.badgeText)}>
              {badgeIcon}
            </span>
          )}
        </div>

        <h2 className="mt-2 text-[1.9rem] font-black italic leading-[1.15] tracking-tight text-slate-900 md:text-[2.1rem]">
          {titleStart}{" "}
          <span className={t.accentText}>{titleAccent}</span>
        </h2>

        {subtitle && (
          <p className="mt-0.5 line-clamp-1 text-xs font-medium text-slate-400">
            {subtitle}
          </p>
        )}
      </div>


      <div
        className="relative z-10 flex flex-1 items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${t.imageGlowColor} 0%, transparent 68%)`,
        }}
      >
        {image?.src ? (
          <Image
            src={image.src}
            alt={image.alt ?? ""}
            width={310}
            height={220}
            className="h-auto w-[78%] object-contain drop-shadow-lg transition-transform duration-700 group-hover:scale-[1.06]"
            priority
          />
        ) : (
          <div
            className={cn(
              "flex h-36 w-36 items-center justify-center rounded-full",
              t.placeholderBg
            )}
          >
            <span className={cn("flex items-center", t.placeholderIcon)}>
              {imagePlaceholder}
            </span>
          </div>
        )}
      </div>


      <div className="relative z-10 flex w-full items-center justify-between border-t border-current/6 pt-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            {statLabel}
          </span>
          <span className="text-xl font-black text-slate-900">{statValue}</span>
        </div>

        <Link href={actionHref}>
          <Button
            className={cn(
              "h-11 rounded-full px-7 text-sm font-bold text-white",
              "transition-all duration-200 active:scale-95",
              t.btnCls
            )}
          >
            {actionLabel}
            <ArrowRight className="ml-1 size-3.5 transition-transform duration-200 group-hover/button:translate-x-0.5" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}
