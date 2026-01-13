// components/ui/LoadingScreenFancy.jsx
import React from "react";
import { Spinner } from "./spinner";

export function LoadingScreenFancy({ message = "Loading" }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-md">
      <Spinner className="w-12 h-12 text-primary animate-spin" />

      {/* Animated dots */}
      <div className="flex mt-4 space-x-1 text-lg font-medium text-muted-foreground">
        {Array.from({ length: 3 }).map((_, i) => (
          <span
            key={i}
            className="animate-bounce"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
            .
          </span>
        ))}
      </div>

      {/* Optional message */}
      <p className="mt-2 text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
