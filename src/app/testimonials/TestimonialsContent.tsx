"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp, FaQuoteLeft } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { TESTIMONIALS, SITE_CONFIG } from "@/lib/constants";

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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-gold text-sm tracking-widest uppercase font-semibold mb-4"
          >
            Client Love
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-[var(--font-playfair)] mb-6"
          >
            What Our Clients Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
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
      <section className="py-20 px-4 bg-dark text-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] mb-6">
              Be Our Next Happy Client
            </h2>
            <p className="text-lg text-gray-300 mb-8">
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
