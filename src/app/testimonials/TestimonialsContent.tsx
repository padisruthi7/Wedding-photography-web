"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp, FaQuoteLeft } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { TESTIMONIALS, SITE_CONFIG } from "@/lib/constants";
import { mediaUrl } from "@/lib/media";

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

export default function TestimonialsContent() {
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
            Client Love
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-playfair)] mb-6 leading-tight"
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Over 500 happy families have trusted us with their most precious
            celebrations. Here&apos;s what they have to say about their experience.
          </motion.p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="relative -mt-12 z-20 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <FiStar key={star} className="w-8 h-8 fill-gold text-gold" />
            ))}
          </div>
          <div className="text-4xl font-bold text-charcoal mb-1">4.9/5.0</div>
          <p className="text-gray-500">Based on 500+ client reviews</p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Reviews"
            title="Hear from Happy Couples"
            description="Real stories from real couples who trusted us with their special moments."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gold/30 bg-white card-hover h-full flex flex-col">
                  <FaQuoteLeft className="w-8 h-8 text-gold/20 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <FiStar key={j} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-white font-bold">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-charcoal">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.event}</p>
                      <p className="text-xs text-gold">{t.location}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "4.9", label: "Average Rating" },
              { value: "100%", label: "Satisfaction" },
              { value: "3+", label: "States Covered" },
            ].map((badge, i) => (
              <AnimatedSection key={badge.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-md">
                  <div className="text-3xl font-bold text-gold mb-1">{badge.value}</div>
                  <div className="text-sm text-gray-600">{badge.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-dark text-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 text-center shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] mb-6">
                Be Our Next Happy Client
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join 500+ families who trusted us with their celebrations. Book your
                session today and experience the Gowri difference.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I saw your amazing reviews! I'd like to book you for my event.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Book Now
                </a>
                <a
                  href="/contact"
                  className="flex items-center gap-3 border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
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
