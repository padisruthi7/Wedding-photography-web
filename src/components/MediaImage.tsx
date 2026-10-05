"use client";

import { useState } from "react";
import { mediaUrl } from "@/lib/media";

export default function MediaImage({
  path,
  alt,
  className = "",
  loading = "lazy",
}: {
  path: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  const [src, setSrc] = useState(() => mediaUrl(path));
  const [hasFailed, setHasFailed] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      className={className}
      onError={() => {
        if (!hasFailed) {
          setHasFailed(true);
          setSrc(path);
        }
      }}
    />
  );
}
