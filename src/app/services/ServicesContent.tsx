"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCamera,
  FiVideo,
  FiHeart,
  FiImage,
  FiSun,
  FiMusic,
  FiHome,
  FiUsers,
  FiMonitor,
  FiZap,
  FiBook,
  FiWifi,
  FiArrowRight,
} from "react-icons/fi";

import {
  FaBaby,
  FaBirthdayCake,
  FaBuilding,
  FaBox,
  FaBullhorn,
  FaRing,
  FaPalette,
  FaPhotoVideo,
  FaWhatsapp,
} from "react-icons/fa";

import SectionHeading from "@/components/SectionHeading";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
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

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const iconMap: Record<string, React.ReactNode> = {
  camera: <FiCamera className="w-6 h-6" />,
  video: <FiVideo className="w-6 h-6" />,
  film: <FaPhotoVideo className="w-6 h-6" />,
  heart: <FiHeart className="w-6 h-6" />,
  image: <FiImage className="w-6 h-6" />,

  // FIXED: replaced FaDrone with valid icon
  drone: <FaPhotoVideo className="w-6 h-6" />,

  party: <FiMusic className="w-6 h-6" />,
  ring: <FaRing className="w-6 h-6" />,
  couple: <FiHeart className="w-6 h-6" />,
  sun: <FiSun className="w-6 h-6" />,
  palette: <FaPalette className="w-6 h-6" />,
  music: <FiMusic className="w-6 h-6" />,
  portrait: <FiCamera className="w-6 h-6" />,
  baby: <FaBaby className="w-6 h-6" />,
  cake: <FaBirthdayCake className="w-6 h-6" />,
  home: <FiHome className="w-6 h-6" />,
  family: <FiUsers className="w-6 h-6" />,
  building: <FaBuilding className="w-6 h-6" />,
  box: <FaBox className="w-6 h-6" />,
  megaphone: <FaBullhorn className="w-6 h-6" />,
  frame: <FiImage className="w-6 h-6" />,
  book: <FiBook className="w-6 h-6" />,
  wifi: <FiWifi className="w-6 h-6" />,
  monitor: <FiMonitor className="w-6 h-6" />,
  zap: <FiZap className="w-6 h-6" />,
};

function ServiceCategory({
  title,
  items,
  index,
}: {
  title: string;
  items: { name: string; desc: string; icon: string }[];
  index: number;
}) {
  return (
    <section
      className={`py-16 md:py-20 px-4 ${
        index % 2 === 0 ? "bg-white" : "bg-cream"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle={`0${index + 1}`} title={title} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.08}>
              <div
                id={slugify(item.name)}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-gold/30 bg-white card-hover h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[item.icon] || <FiCamera className="w-6 h-6" />}
                </div>

                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>

                <a
                  href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'm interested in your ${item.name} service. Can you share more details?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-semibold text-sm mt-4 group-hover:gap-3 transition-all"
                >
                  Enquire Now <FiArrowRight className="w-4 h-4" />
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServicesContent() {
  const categories = Object.values(SERVICES);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const targetId = window.location.hash.replace("#", "");
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
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
            What We Offer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-playfair)] mb-6 leading-tight"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            From grand weddings to intimate celebrations, we offer a complete
            range of photography and videography services tailored to your
            needs.
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, i) => (
        <ServiceCategory
          key={category.title}
          title={category.title}
          items={category.items}
          index={i}
        />
      ))}

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-dark text-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 text-center shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] mb-6">
                Can&apos;t Find What You Need?
              </h2>

              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We offer customized packages tailored to your specific
                requirements. Get in touch and let&apos;s create the perfect plan
                for your celebration.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'd like a custom photography package for my event. Can we discuss?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Get Custom Quote
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
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
