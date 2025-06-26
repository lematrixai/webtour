"use client"
import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  rounded?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = 20,
  rounded = "rounded-md",
  className = "",
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-gray-300 dark:bg-gray-700 animate-pulse",
        rounded,
        className
      )}
      style={{ width, height }}
      {...props}
    />
  );
};

export default Skeleton; 