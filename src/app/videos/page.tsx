import type { Metadata } from "next";
import VideosContent from "./VideosContent";

export const metadata: Metadata = {
  title: "Video Showcase",
  description:
    "Watch our cinematic wedding films, highlight reels, and video showcases. Experience the magic of our videography services.",
};

export default function VideosPage() {
  return <VideosContent />;
}
