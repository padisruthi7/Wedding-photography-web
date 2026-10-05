"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiPlay, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { mediaUrl } from "@/lib/media";
import MediaBackground from "@/components/MediaBackground";

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const videos = [
  {
    title: "Priya & Ravi — Wedding Highlights",
    description: "A beautiful cinematic highlight film of Priya & Ravi's grand Telugu wedding in Srikakulam.",
    thumbnailPath: "/images/prewedding/Picsart_25-09-30_22-10-08-177.png",
    thumbnail: mediaUrl("/images/prewedding/Picsart_25-09-30_22-10-08-177.png"),
    videoPath: "/images/preweddingsongs/pre wedding gouri photography.mp4",
    videoUrl: mediaUrl("/images/preweddingsongs/pre wedding gouri photography.mp4"),
    category: "Wedding Film",
  },
  {
    title: "Sneha & Arjun — Pre-Wedding Film",
    description: "A dreamy pre-wedding film shot at the stunning beaches of Vizag.",
    thumbnailPath: "/images/prewedding/IMG-20260705-WA0001.jpg",
    thumbnail: mediaUrl("/images/prewedding/IMG-20260705-WA0001.jpg"),
    videoPath: "/images/preweddingsongs/deva.mp4",
    videoUrl: mediaUrl("/images/preweddingsongs/deva.mp4"),
    category: "Pre-Wedding",
  },
  {
    title: "Lakshmi & Krishna — Cinematic Teaser",
    description: "A 60-second cinematic teaser showcasing the love story of Lakshmi & Krishna.",
    thumbnailPath: "",
    thumbnail: "",
    videoPath: "/images/halidivideos/lv_0_20251006144609.mp4",
    videoUrl: mediaUrl("/images/halidivideos/lv_0_20251006144609.mp4"),
    category: "Teaser",
  },
  {
    title: "Drone Showreel — Aerial Wedding Coverage",
    description: "Breathtaking aerial shots from various wedding venues across three states.",
    thumbnailPath: "/images/drone/DJI_0259.JPG",
    thumbnail: mediaUrl("/images/drone/DJI_0259.JPG"),
    videoPath: "/images/drone/ReelAudio-49000.mp4",
    videoUrl: mediaUrl("/images/drone/ReelAudio-49000.mp4"),
    category: "Drone Reel",
  },
  {
    title: "Divya & Suresh — Destination Wedding",
    description: "A magical destination wedding film from the shores of Puri, Odisha.",
    thumbnailPath: "",
    videoPath: "/images/halidivideos/lv_0_20251008223125.mp4",
    videoUrl: mediaUrl("/images/halidivideos/lv_0_20251008223125.mp4"),
    category: "Wedding Film",
  },
  {
    title: "Reception Highlights Compilation",
    description: "The best reception moments compiled into one exciting highlight reel.",
    thumbnailPath: "/images/prewedding/Picsart_25-09-30_22-03-12-452.png",
    thumbnail: mediaUrl("/images/prewedding/Picsart_25-09-30_22-03-12-452.png"),
    videoPath: "/images/preweddingsongs/lv_0_20251008102907.mp4",
    videoUrl: mediaUrl("/images/preweddingsongs/lv_0_20251008102907.mp4"),
    category: "Reception",
  },
];

export default function VideosContent() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[number] | null>(null);
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[480px] md:min-h-[560px] flex items-center justify-center pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${mediaUrl("/images/wedding/DSC_2031.jpg")})` }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45" />
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full border border-gold/60 bg-white/10 backdrop-blur-sm text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-6"
          >
            Cinematic Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-playfair)] mb-6 leading-tight"
          >
            Video Showcase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the magic of our cinematic wedding films. Each video is a
            love story told through stunning visuals and heartfelt moments.
          </motion.p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Our Films"
            title="Cinematic Wedding Films"
            description="Watch our latest wedding films and highlight reels."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, i) => (
              <AnimatedSection key={video.title} delay={i * 0.1}>
                <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 card-hover">
                  <div className="relative aspect-video overflow-hidden bg-black">
                    {video.thumbnailPath ? (
                      <MediaBackground path={video.thumbnailPath} className="transition-transform duration-700 group-hover:scale-110" />
                    ) : null}
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all group-hover:bg-black/50"
                      aria-label={`Play ${video.title}`}
                    >
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/90 shadow-2xl transition-transform group-hover:scale-110">
                        <FiPlay className="ml-1 h-7 w-7 text-white" />
                      </span>
                    </button>
                    <span className="absolute top-4 left-4 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {video.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-16 p-12 bg-cream rounded-2xl">
            <AnimatedSection>
              <FiPlay className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-charcoal mb-3">
                Full Videos Coming Soon
              </h3>
              <p className="text-gray-600 max-w-lg mx-auto mb-6">
                We&apos;re currently uploading our full collection. In the meantime,
                contact us to see our complete video portfolio.
              </p>
              <a
                href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'd like to see your full video portfolio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5" />
                Request Full Portfolio
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 px-4 py-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-black p-2 shadow-2xl sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-charcoal"
            >
              Close
            </button>
            <video
              key={activeVideo.videoUrl}
              className="w-full rounded-xl"
              src={activeVideo.videoUrl}
              poster={activeVideo.thumbnail}
              controls
              autoPlay
              playsInline
              preload="metadata"
              onError={(event) => {
                if (event.currentTarget.src !== new URL(activeVideo.videoPath, window.location.origin).href) {
                  event.currentTarget.src = activeVideo.videoPath;
                }
              }}
              onEnded={() => setActiveVideo(null)}
            />
          </div>
        </div>
      ) : null}

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-dark text-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 text-center shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] mb-6">
                Want a Cinematic Film for Your Wedding?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Our cinematic wedding films are crafted with Hollywood-grade equipment
                and professional editing to create a timeless keepsake.
              </p>
              <a
                href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'd like to book cinematic videography for my wedding.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
              >
                Book Videography
                <FiArrowRight className="w-5 h-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
