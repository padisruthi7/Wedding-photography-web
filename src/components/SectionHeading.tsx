"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-charcoal"
        } ${centered ? "text-center" : "text-left"}`}
      >
        {title}
      </h2>
      <div className={`w-20 h-1 gold-gradient rounded-full mb-6 ${centered ? "mx-auto" : "mx-0"}`} />
      {description && (
        <p
          className={`max-w-2xl text-lg ${centered ? "mx-auto" : "mx-0"} ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
