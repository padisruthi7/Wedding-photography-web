"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiCamera, FiX, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { PORTFOLIO_CATEGORIES, SITE_CONFIG } from "@/lib/constants";

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
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", category: "Weddings", title: "Royal Wedding Ceremony" },
  { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80", category: "Weddings", title: "Bridal Portrait" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80", category: "Pre-Wedding", title: "Romantic Pre-Wedding" },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80", category: "Reception", title: "Grand Reception" },
  { src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80", category: "Engagement", title: "Engagement Ceremony" },
  { src: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=600&q=80", category: "Drone Shots", title: "Aerial View" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80", category: "Baby Shoots", title: "Adorable Baby Session" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", category: "Birthday Events", title: "Birthday Celebration" },
  { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80", category: "Weddings", title: "Wedding Rituals" },
  { src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=80", category: "Pre-Wedding", title: "Couple Portrait" },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80", category: "Weddings", title: "Wedding Joy" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80", category: "Engagement", title: "Ring Ceremony" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80", category: "Reception", title: "Reception Dance" },
  { src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80", category: "Drone Shots", title: "Venue Aerial" },
  { src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&q=80", category: "Cinematic Videos", title: "Cinematic Highlights" },
  { src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80", category: "Weddings", title: "Wedding Moments" },
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529636798458-92182e662485?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-gold text-sm tracking-widest uppercase font-semibold mb-4"
          >
            Our Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-[var(--font-playfair)] mb-6"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
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
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${img.src})` }}
                      />
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
      <section className="py-20 px-4 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-[var(--font-playfair)]">
              Want Your Story in Our Portfolio?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
