import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Wedding photography tips, planning guides, venue recommendations, and more. Read our expert blog for the best wedding photography ideas.",
};

export default function BlogPage() {
  return <BlogContent />;
}
