import type { Metadata } from "next";
import TestimonialsContent from "./TestimonialsContent";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our happy clients say about Gowri Wedding Photography. 500+ families trust us for their wedding and event photography.",
};

export default function TestimonialsPage() {
  return <TestimonialsContent />;
}
