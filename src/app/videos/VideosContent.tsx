"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiPlay, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";

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
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    category: "Wedding Film",
  },
  {
    title: "Sneha & Arjun — Pre-Wedding Film",
    description: "A dreamy pre-wedding film shot at the stunning beaches of Vizag.",
    thumbnail: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
    category: "Pre-Wedding",
  },
  {
    title: "Lakshmi & Krishna — Cinematic Teaser",
    description: "A 60-second cinematic teaser showcasing the love story of Lakshmi & Krishna.",
    thumbnail: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
    category: "Teaser",
  },
  {
    title: "Drone Showreel — Aerial Wedding Coverage",
    description: "Breathtaking aerial shots from various wedding venues across three states.",
    thumbnail: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=600&q=80",
    category: "Drone Reel",
  },
  {
    title: "Divya & Suresh — Destination Wedding",
    description: "A magical destination wedding film from the shores of Puri, Odisha.",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    category: "Wedding Film",
  },
  {
    title: "Reception Highlights Compilation",
    description: "The best reception moments compiled into one exciting highlight reel.",
    thumbnail: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
    category: "Reception",
  },
];

export default function VideosContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-gold text-sm tracking-widest uppercase font-semibold mb-4"
          >
            Cinematic Stories
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-[var(--font-playfair)] mb-6"
          >
            Video Showcase
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
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
                  <div className="relative aspect-video overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${video.thumbnail})` }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                        <FiPlay className="w-7 h-7 text-white ml-1" />
                      </div>
                    </div>
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

      {/* CTA */}
      <section className="py-20 px-4 bg-dark text-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] mb-6">
              Want a Cinematic Film for Your Wedding?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
