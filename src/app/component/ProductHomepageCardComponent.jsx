"use client";

import { Zap, Package } from "lucide-react";
import FeaturePromoCard from "@/components/FeaturePromoCard";

export default function ProductHomepageCardComponent({ product }) {
  const words = product.name.trim().split(" ");
  const titleStart = words[0];
  const titleAccent = words.slice(1).join(" ") || product.name;

  return (
    <FeaturePromoCard
      theme="pink"
      badge="Featured Technology"
      badgeIcon={<Zap className="size-3 fill-current" />}
      titleStart={titleStart}
      titleAccent={titleAccent}
      subtitle={product.description}
      image={product.imageUrl ? { src: product.imageUrl, alt: product.name } : undefined}
      imagePlaceholder={<Package className="size-16" strokeWidth={1.2} />}
      statLabel="Starting at"
      statValue={`$${product.price?.toLocaleString()}`}
      actionLabel="View Details"
      actionHref="/products"
    />
  );
}