import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Gowri Wedding Photography — our story, our passion for preserving memories, and why families across Andhra Pradesh, Telangana & Odisha trust us with their most precious celebrations.",
};

export default function AboutPage() {
  return <AboutContent />;
}
