'use client';

import { usePathname } from "next/navigation";
import Header from "@/components/Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const isDestinationDetail = pathname?.startsWith('/destinations/') && pathname !== '/destinations';

  if (isDestinationDetail) {
    return null;
  }

  return <Header />;
} 