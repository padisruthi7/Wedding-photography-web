"use client";

import { useState } from "react";
import { mediaUrl } from "@/lib/media";

export default function MediaBackground({
  path,
  className = "",
}: {
  path: string;
  className?: string;
}) {
  const [src, setSrc] = useState(() => mediaUrl(path));
  const [hasFailed, setHasFailed] = useState(false);

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      onError={() => {
        if (!hasFailed) {
          setHasFailed(true);
          setSrc(path);
        }
      }}
    />
  );
}
