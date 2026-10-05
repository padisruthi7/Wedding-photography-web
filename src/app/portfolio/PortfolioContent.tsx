"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiCamera, FiX, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { PORTFOLIO_CATEGORIES, SITE_CONFIG } from "@/lib/constants";
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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const portfolioImages = [
  { path: "/images/wedding/Picsart_26-05-10_15-43-19-075.jpg", src: mediaUrl("/images/wedding/Picsart_26-05-10_15-43-19-075.jpg"), category: "Weddings", title: "Royal Wedding Ceremony" },
  { path: "/images/bride/Picsart_26-06-11_08-21-03-410.png", src: mediaUrl("/images/bride/Picsart_26-06-11_08-21-03-410.png"), category: "Weddings", title: "Bridal Portrait" },
  { path: "/images/prewedding/Picsart_25-09-30_23-32-58-825.jpg", src: mediaUrl("/images/prewedding/Picsart_25-09-30_23-32-58-825.jpg"), category: "Pre-Wedding", title: "Romantic Pre-Wedding" },
  { path: "/images/bride/DSC_1788.jpg", src: mediaUrl("/images/bride/DSC_1788.jpg"), category: "Reception", title: "Grand Reception" },
  { path: "/images/daystogo/3DAYSTOGO.jpg", src: mediaUrl("/images/daystogo/3DAYSTOGO.jpg"), category: "Engagement", title: "Engagement Ceremony" },
  { path: "/images/drone/DJI_0259.JPG", src: mediaUrl("/images/drone/DJI_0259.JPG"), category: "Drone Shots", title: "Aerial View" },
  { path: "/images/birthday/Babu.jpg", src: mediaUrl("/images/birthday/Babu.jpg"), category: "Baby Shoots", title: "Adorable Baby Session" },
  { path: "/images/birthday/IMG-20250122-WA0003.jpg", src: mediaUrl("/images/birthday/IMG-20250122-WA0003.jpg"), category: "Birthday Events", title: "Birthday Celebration" },
  { path: "/images/prewedding/1741342823771.jpg", src: mediaUrl("/images/prewedding/1741342823771.jpg"), category: "Weddings", title: "Wedding Rituals" },
  { path: "/images/prewedding/5x3...08.jpg", src: mediaUrl("/images/prewedding/5x3...08.jpg"), category: "Pre-Wedding", title: "Couple Portrait" },
  { path: "/images/prewedding/5x3...11.jpg", src: mediaUrl("/images/prewedding/5x3...11.jpg"), category: "Weddings", title: "Wedding Joy" },
  { path: "/images/prewedding/Picsart_25-09-30_22-56-49-625.png", src: mediaUrl("/images/prewedding/Picsart_25-09-30_22-56-49-625.png"), category: "Engagement", title: "Ring Ceremony" },
  { path: "/images/prewedding/retouch_20250308.jpg", src: mediaUrl("/images/prewedding/retouch_20250308.jpg"), category: "Reception", title: "Reception Dance" },
  { path: "/images/daystogo/2daysgo.png", src: mediaUrl("/images/daystogo/2daysgo.png"), category: "Drone Shots", title: "Venue Aerial" },
  { path: "/images/bride/DSC_1461.jpg", src: mediaUrl("/images/bride/DSC_1461.jpg"), category: "Cinematic Videos", title: "Cinematic Highlights" },
  { path: "/images/wedding/DSC_6452.jpg", src: mediaUrl("/images/wedding/DSC_6452.jpg"), category: "Weddings", title: "Wedding Moments" },
];

export default function PortfolioContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === activeCategory);

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
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-playfair)] mb-6 leading-tight"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            A curated collection of our finest work — each image tells a story of
            love, joy, and beautiful celebrations.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Gallery"
            title="Browse Our Work"
            description="Select a category to explore our portfolio."
          />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-gold text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gold/10 hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                >
                  <AnimatedSection delay={i * 0.03}>
                    <div
                      onClick={() => setLightboxImage(img.src)}
                      className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer card-hover"
                    >
                      <MediaBackground path={img.path} className="transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex flex-col items-center justify-center">
                        <FiCamera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all mb-2" />
                        <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-all text-sm">
                          {img.title}
                        </p>
                        <span className="text-gold text-xs opacity-0 group-hover:opacity-100 transition-all">
                          {img.category}
                        </span>
                      </div>
                    </div>
                  </AnimatedSection>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold"
              onClick={() => setLightboxImage(null)}
            >
              <FiX className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full h-[70vh] bg-contain bg-center bg-no-repeat rounded-xl"
                style={{ backgroundImage: `url(${lightboxImage.replace("w=600", "w=1200")})` }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="rounded-[2rem] border border-gray-100 bg-white p-8 md:p-12 text-center shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-[var(--font-playfair)]">
                Want Your Story in Our Portfolio?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Book us for your upcoming celebration and let us create magic for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I loved your portfolio! I'd like to book you for my event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Book Now
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
                >
                  Contact Us
                  <FiArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
