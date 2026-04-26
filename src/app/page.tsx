"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  FiCamera,
  FiVideo,
  FiHeart,
  FiStar,
  FiMapPin,
  FiArrowRight,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { SITE_CONFIG, TESTIMONIALS } from "@/lib/constants";

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

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 border border-gold/60 rounded-full text-gold text-sm tracking-widest uppercase">
            Est. {SITE_CONFIG.established} &mdash; {SITE_CONFIG.tagline}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-playfair)] mb-6 leading-tight"
        >
          Where Every Moment
          <br />
          <span className="text-gold-gradient">Becomes Eternal</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          We don&apos;t just capture photos — we preserve emotions. Premium wedding
          photography &amp; videography across Andhra Pradesh, Telangana &amp; Odisha.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'd like to book a photography session for my wedding.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-2xl hover:shadow-gold/25 shimmer"
          >
            Book Now
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="/portfolio"
            className="flex items-center gap-3 border-2 border-white/40 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            View Portfolio
          </Link>
          <a
            href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I have a question about your services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-2xl"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const icons = [
    <FiStar key="star" className="w-8 h-8" />,
    <FiHeart key="heart" className="w-8 h-8" />,
    <FiCamera key="camera" className="w-8 h-8" />,
    <FiMapPin key="map" className="w-8 h-8" />,
  ];

  return (
    <section className="relative -mt-20 z-20 px-4">
      <div
        ref={ref}
        className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 overflow-hidden"
      >
        {SITE_CONFIG.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 md:p-8 text-center border-b md:border-b-0 border-r border-gray-100 last:border-r-0"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-3">
              {icons[i]}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-charcoal mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    {
      icon: <FiCamera className="w-7 h-7" />,
      title: "Premium Equipment",
      desc: "We use top-tier professional cameras, lenses, lighting, and drones to deliver stunning quality.",
    },
    {
      icon: <FiHeart className="w-7 h-7" />,
      title: "Passion-Driven",
      desc: "Photography isn't just our profession — it's our passion. We pour our heart into every frame.",
    },
    {
      icon: <FiVideo className="w-7 h-7" />,
      title: "Cinematic Excellence",
      desc: "Hollywood-grade cinematic wedding films with professional editing, color grading, and storytelling.",
    },
    {
      icon: <FiStar className="w-7 h-7" />,
      title: "500+ Happy Clients",
      desc: "Trusted by hundreds of families across three states for their most precious celebrations.",
    },
    {
      icon: <FiMapPin className="w-7 h-7" />,
      title: "Multi-State Coverage",
      desc: "Serving Andhra Pradesh, Telangana, and Odisha — and always ready for destination events.",
    },
    {
      icon: <FiArrowRight className="w-7 h-7" />,
      title: "Fast Delivery",
      desc: "Quick turnaround with premium editing. Same-day highlights and timely full album delivery.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Why Gowri?"
          title="Why Couples Choose Us"
          description="Every love story is unique, and we treat it that way. Here's what makes us the preferred choice for hundreds of families."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gold/30 card-hover bg-white">
                <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedServicesSection() {
  const services = [
    {
      title: "Wedding Photography",
      desc: "Timeless photographs capturing every emotion of your special day.",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
    },
    {
      title: "Cinematic Films",
      desc: "Hollywood-style wedding films with stunning visuals and storytelling.",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    },
    {
      title: "Pre-Wedding Shoots",
      desc: "Romantic photoshoots at stunning locations to tell your love story.",
      image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
    },
    {
      title: "Drone Coverage",
      desc: "Breathtaking aerial perspectives of your venue and celebrations.",
      image: "https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=600&q=80",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Services"
          title="What We Offer"
          description="From intimate ceremonies to grand celebrations, we offer complete photography and videography solutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <Link href="/services" className="group block">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] card-hover">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{service.desc}</p>
                    <span className="inline-flex items-center gap-2 text-gold text-sm font-semibold">
                      Learn More
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            View All Services
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsPreview() {
  return (
    <section className="py-20 md:py-28 px-4 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Testimonials"
          title="Love from Our Couples"
          description="Don't just take our word for it — hear what our happy clients have to say about their experience."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <FiStar
                      key={j}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-400">{t.event}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-3 border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Read All Reviews
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
    "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80",
    "https://images.unsplash.com/photo-1464699908537-0954e50791ee?w=600&q=80",
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Work"
          title="Gallery Preview"
          description="A glimpse into the beautiful moments we've captured for our clients."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer card-hover">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img})` }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <FiCamera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
          >
            View Full Portfolio
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <AnimatedSection>
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4">
            Ready to Begin?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-[var(--font-playfair)] mb-6">
            Let&apos;s Capture Your
            <br />
            <span className="text-gold-gradient">Beautiful Love Story</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Every smile, every tear, every promise — beautifully remembered forever.
            Get in touch today and let&apos;s create something magical together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'd like to get a quote for my upcoming event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-2xl"
            >
              <FaWhatsapp className="w-6 h-6" />
              Get Free Quote
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-2xl"
            >
              <FiPhone className="w-5 h-5" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="flex items-center gap-3 border-2 border-white/40 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Contact Us
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyChooseSection />
      <FeaturedServicesSection />
      <GalleryPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
