"use client";

import { Users, UserCircle2 } from "lucide-react";
import FeaturePromoCard from "@/components/FeaturePromoCard";

export default function CustomerHomepageCardComponent({ customer }) {
  const fullName = `${customer.firstName} ${customer.lastName}`;
  const birthFormatted = new Date(customer.birthDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <FeaturePromoCard
      theme="amber"
      badge="Management"
      badgeIcon={<Users className="size-3" />}
      titleStart="Customer"
      titleAccent="Panel"
      subtitle={`${fullName} · Born ${birthFormatted}`}
      imagePlaceholder={<UserCircle2 className="size-16" strokeWidth={1.2} />}
      statLabel="Money Spent"
      statValue={`$${customer.moneySpent?.toLocaleString()}`}
      actionLabel="View All"
      actionHref="/customers"
    />
  );
}