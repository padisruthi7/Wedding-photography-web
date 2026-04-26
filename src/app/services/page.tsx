import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our complete range of wedding photography, videography, pre-wedding shoots, drone coverage, baby shoots, and corporate photography services.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
