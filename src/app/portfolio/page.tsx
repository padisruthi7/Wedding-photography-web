import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse our stunning wedding photography portfolio — weddings, pre-wedding shoots, engagements, receptions, baby shoots, birthday events, and drone shots.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
