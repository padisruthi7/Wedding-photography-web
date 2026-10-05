"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCamera, FiHeart, FiUsers, FiAward, FiMapPin, FiStar } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
import { mediaUrl } from "@/lib/media";
import { FaWhatsapp } from "react-icons/fa";

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

export default function AboutContent() {
  const values = [
    {
      icon: <FiHeart className="w-7 h-7" />,
      title: "Passion First",
      desc: "We are driven by a genuine love for storytelling through the lens. Every event is a new story waiting to be told.",
    },
    {
      icon: <FiCamera className="w-7 h-7" />,
      title: "Premium Quality",
      desc: "From top-tier cameras to professional editing suites, we invest in the best tools to deliver flawless results.",
    },
    {
      icon: <FiUsers className="w-7 h-7" />,
      title: "Client-Centric",
      desc: "Your vision is our mission. We listen, plan, and execute to ensure your expectations are not just met but exceeded.",
    },
    {
      icon: <FiAward className="w-7 h-7" />,
      title: "Excellence Always",
      desc: "We hold ourselves to the highest standards of quality, creativity, and professionalism in every project.",
    },
    {
      icon: <FiMapPin className="w-7 h-7" />,
      title: "Wherever You Are",
      desc: "Serving across Andhra Pradesh, Telangana, and Odisha — and always ready to travel for your destination event.",
    },
    {
      icon: <FiStar className="w-7 h-7" />,
      title: "Trusted by 500+",
      desc: "Over 500 happy families have trusted us with their precious moments since 2022. Their smiles are our greatest reward.",
    },
  ];

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
            transition={{ duration: 0.6 }}
            className="inline-block px-5 py-2 rounded-full border border-gold/60 bg-white/10 backdrop-blur-sm text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-6"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-playfair)] mb-6 leading-tight"
          >
            About Gowri Wedding Photography
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            A journey that began with a passion for preserving the most beautiful
            moments of life — your celebrations, your love, your legacy.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="relative mx-auto max-w-xl lg:mx-0">
                <div className="relative rounded-[2rem] overflow-hidden premium-shadow">
                  <div className="aspect-[4/5] w-full bg-cover bg-center" style={{ backgroundImage: `url(${mediaUrl("/images/logo/IMG-20250227-WA0017.jpg")})` }} />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gold text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl md:text-3xl font-semibold">Since</div>
                  <div className="text-3xl md:text-4xl font-bold">{SITE_CONFIG.established}</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="max-w-2xl lg:ml-auto">
                <span className="inline-block text-gold font-semibold text-sm tracking-[0.3em] uppercase mb-4">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-[var(--font-playfair)] leading-tight">
                  Preserving Your Most Precious Moments
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Founded in {SITE_CONFIG.established}, Gowri Wedding Photography was born
                    from a simple yet powerful belief — that every celebration deserves to be
                    remembered in its full glory. What started as a passion project has grown
                    into one of the most trusted photography brands across South India.
                  </p>
                  <p>
                    We specialize in capturing the raw, unfiltered emotions that make
                    weddings and family celebrations truly special. From the nervous excitement
                    of a bride getting ready to the joyful tears during the pheras, from the
                    energetic sangeet performances to the quiet, intimate moments between
                    couples — we are there to preserve it all.
                  </p>
                  <p>
                    Our team of experienced photographers and videographers brings together
                    artistic vision, technical expertise, and a deep understanding of
                    Indian wedding traditions. We use state-of-the-art equipment including
                    professional cameras, cinematic lenses, professional lighting systems,
                    and high-end drones to deliver results that exceed expectations.
                  </p>
                  <p>
                    Today, we proudly serve clients across{" "}
                    {SITE_CONFIG.serviceAreas.join(", ")}, and have covered hundreds of
                    destination events. Our commitment remains unchanged — to deliver
                    premium quality work that becomes a treasured part of your family legacy.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Our Values"
            title="What Drives Us"
            description="These core values guide everything we do — from how we interact with clients to how we capture and deliver your memories."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gold/30 card-hover">
                  <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 px-4 bg-dark text-white">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeading
            subtitle="Where We Serve"
            title="Our Service Areas"
            description="Based in Srikakulam, we cover weddings and events across three states and beyond."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {SITE_CONFIG.serviceAreas.map((area, i) => (
              <AnimatedSection key={area} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all">
                  <FiMapPin className="w-10 h-10 text-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{area}</h3>
                  <p className="text-gray-400 text-sm">Complete coverage available</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <div className="inline-block bg-gold/10 border border-gold/30 rounded-2xl p-6">
              <p className="text-gold font-semibold text-lg">
                + Destination Events Worldwide
              </p>
              <p className="text-gray-400 text-sm mt-1">
                We travel anywhere for your special day
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="rounded-[2rem] border border-gray-100 bg-cream p-8 md:p-12 text-center shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6 font-[var(--font-playfair)]">
                Ready to Create Beautiful Memories?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss your upcoming celebration and create a customized
                photography plan that perfectly captures your vision.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'd like to know more about Gowri Wedding Photography services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat With Us
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
                >
                  Call: +91 {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
