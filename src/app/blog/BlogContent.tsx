"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FiClock, FiTag, FiArrowRight } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { BLOG_POSTS } from "@/lib/constants";
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

const blogImages = [
  mediaUrl("/images/wedding/DSC_2031.jpg"),
  mediaUrl("/images/prewedding/Picsart_25-09-30_22-27-16-243.png"),
  mediaUrl("/images/wedding/Picsart_26-07-07_22-21-23-995.jpg"),
  mediaUrl("/images/prewedding/5x3...10.jpg.tiff"),
  mediaUrl("/images/wedding/DSC_2031.jpg"),
  mediaUrl("/images/drone/DJI_0258.JPG"),
];

export default function BlogContent() {
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
            Insights & Tips
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-playfair)] mb-6 leading-tight"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Expert tips, inspiration, and guides to help you plan the perfect
            wedding and make the most of your photography experience.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Stories & Inspiration"
            title="Explore Our Latest Articles"
            description="Thoughtful ideas, wedding planning guidance, and photography inspiration for every unforgettable celebration."
            centered
          />

          {/* Featured Post */}
          <AnimatedSection className="mb-12">
            <div className="group grid grid-cols-1 gap-0 rounded-[2rem] overflow-hidden border border-gray-100 bg-white shadow-sm">
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <div
                  className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${blogImages[0]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
        
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <FiTag className="w-4 h-4" />
                    {BLOG_POSTS[0].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    {BLOG_POSTS[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 group-hover:text-gold transition-colors font-[var(--font-playfair)]">
                  {BLOG_POSTS[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {BLOG_POSTS[0].excerpt}
                </p>
                <Link
                  href={`/blog/${BLOG_POSTS[0].slug}`}
                  className="inline-flex items-center gap-2 text-gold font-semibold group-hover:gap-3 transition-all"
                >
                  Read Article <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(1).map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <div className="group rounded-[2rem] overflow-hidden border border-gray-100 bg-white shadow-sm h-full flex flex-col">
                  <div className="relative aspect-video overflow-hidden">
                    <div
                      className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${blogImages[i + 1]})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FiTag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-gold font-semibold text-sm"
                    >
                      Read More <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 px-4 bg-dark text-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-12 text-center shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-playfair)] mb-6">
                More Articles Coming Soon
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                We&apos;re constantly sharing new wedding tips, venue guides, and
                photography inspiration. Stay tuned for more!
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
              >
                Get In Touch
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

