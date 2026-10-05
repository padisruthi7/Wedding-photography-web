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
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { SITE_CONFIG, TESTIMONIALS } from "@/lib/constants";
import { mediaUrl } from "@/lib/media";
import MediaImage from "@/components/MediaImage";

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
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${mediaUrl("/images/wedding/DSC_2031.jpg")})` }} />
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
          Crafting Wedding Stories
          <br />
          <span className="text-gold-gradient">You&apos;ll Relive Forever</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          From intimate ceremonies to grand celebrations, we create timeless
          photography and cinematic films that feel as heartfelt as the day itself.
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

function SignatureExperienceSection() {
  const highlights = [
    "Personalized planning with mood boards and shot lists",
    "Candid storytelling that captures raw emotions",
    "Cinematic editing with a warm, timeless finish",
  ];

  return (
    <section className="py-20 md:py-24 px-4 bg-gradient-to-br from-cream via-white to-cream">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <AnimatedSection>
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold font-semibold text-sm tracking-widest uppercase mb-4">
              Signature Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] text-charcoal mb-5">
              Every frame is designed to feel personal, elegant, and unforgettable.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We blend artistic direction, careful planning, and heartfelt storytelling to create a collection that reflects your love story with grace.
            </p>
            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <FiCheckCircle className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="rounded-[2rem] overflow-hidden premium-shadow bg-white">
            <MediaImage
              path="/images/wedding/DSC_0574.jpg"
              alt="Wedding couple enjoying their celebration"
              className="h-72 w-full object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-charcoal mb-3">
                A wedding story told with warmth, elegance, and emotion.
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                From intimate moments to grand celebrations, we create timeless imagery that feels natural, graceful, and deeply personal.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white px-5 py-3 rounded-full font-semibold transition-all"
                >
                  See Recent Weddings
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-gray-200 hover:border-gold text-charcoal hover:text-gold px-5 py-3 rounded-full font-semibold transition-all"
                >
                  Plan Your Shoot
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
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
      slug: "wedding-photography",
      desc: "Timeless photographs capturing every emotion of your special day.",
      image: mediaUrl("/images/wedding/DSC_0576.jpg"),
    },
    {
      title: "Wedding Videography",
      slug: "wedding-videography",
      desc: "Cinematic wedding films with heartfelt storytelling and elegant editing.",
      image: mediaUrl("/images/wedding/DSC_2031.jpg"),
    },
    {
      title: "Pre-Wedding Shoots",
      slug: "pre-wedding-shoots",
      desc: "Romantic photoshoots at stunning locations to tell your love story.",
      image: mediaUrl("/images/prewedding/IMG-20260705-WA0007.jpg"),
    },
    {
      title: "Cinematic Films",
      slug: "cinematic-wedding-films",
      desc: "Hollywood-style wedding films with stunning visuals and storytelling.",
      image: mediaUrl("/images/bride/DSC_0664.jpg"),
    },
    {
      title: "Drone Coverage",
      slug: "drone-wedding-coverage",
      desc: "Breathtaking aerial perspectives of your venue and celebrations.",
      image: mediaUrl("/images/drone/DJI_0258.JPG"),
    },
    {
      title: "Baby Shoots",
      slug: "baby-shoots",
      desc: "Gentle, memorable portraits that celebrate your little one’s first moments.",
      image: mediaUrl("/images/birthday/IMG-20250122-WA0003.jpg"),
    },
    {
      title: "Birthday Events",
      slug: "birthday-event-coverage",
      desc: "Joyful coverage for birthdays, milestones, and celebration-filled memories.",
      image: mediaUrl("/images/birthday/cover.jpg"),
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Services"
          title="What We Offer"
          description="From intimate ceremonies to grand celebrations, we offer complete photography and videography solutions."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <Link href={`/services#${service.slug}`} className="group block">
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
    <section className="py-16 md:py-24 px-4 bg-dark text-white">
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
    mediaUrl("/images/wedding/DSC_0574.jpg"),
    mediaUrl("/images/prewedding/IMG-20260705-WA0007.jpg"),
    mediaUrl("/images/bride/DSC_0664.jpg"),
    mediaUrl("/images/birthday/IMG-20250122-WA0003.jpg"),
    mediaUrl("/images/halfsaree/IMG-20260119-WA0018.jpg"),
    mediaUrl("/images/drone/DJI_0258.JPG"),
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
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
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${mediaUrl("/images/wedding/DSC_0574.jpg")})` }} />
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
      <SignatureExperienceSection />
      <WhyChooseSection />
      <FeaturedServicesSection />
      <GalleryPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
