"use client";

import { useRef, useState, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck } from "react-icons/fi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { SITE_CONFIG } from "@/lib/constants";
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

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    eventType: "",
    location: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi! I'd like to inquire about photography services.

Name: ${formData.name}
Phone: ${formData.phone}
Event Date: ${formData.eventDate}
Event Type: ${formData.eventType}
Location: ${formData.location}
Budget: ${formData.budget}
Message: ${formData.message}`;

    window.open(
      `https://wa.me/91${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(whatsappMsg)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <FiPhone className="w-6 h-6" />,
      label: "Phone",
      value: `+91 ${SITE_CONFIG.phone}`,
      link: `tel:${SITE_CONFIG.phone}`,
      action: "Call Now",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      label: "WhatsApp",
      value: `+91 ${SITE_CONFIG.whatsapp}`,
      link: `https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'd like to inquire about your photography services.`,
      action: "Chat Now",
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      label: "Email",
      value: SITE_CONFIG.email,
      link: `mailto:${SITE_CONFIG.email}`,
      action: "Send Email",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      label: "Instagram",
      value: `@${SITE_CONFIG.instagram}`,
      link: `https://instagram.com/${SITE_CONFIG.instagram}`,
      action: "Follow Us",
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
            className="inline-block px-5 py-2 rounded-full border border-gold/60 bg-white/10 backdrop-blur-sm text-gold text-sm tracking-[0.3em] uppercase font-semibold mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-playfair)] mb-6 leading-tight"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to capture your special moments? We&apos;d love to hear about your
            celebration. Get in touch and let&apos;s create magic together.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative z-20 px-4 -mt-10 md:-mt-14">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactInfo.map((info, i) => (
            <AnimatedSection key={info.label} delay={i * 0.1}>
              <a
                href={info.link}
                target={info.label === "Instagram" || info.label === "WhatsApp" ? "_blank" : undefined}
                rel={info.label === "Instagram" || info.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="block rounded-[1.5rem] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-white mx-auto mb-3">
                  {info.icon}
                </div>
                <h3 className="font-bold text-charcoal mb-1">{info.label}</h3>
                <p className="text-gray-600 text-sm mb-2">{info.value}</p>
                <span className="text-gold text-sm font-semibold">{info.action}</span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Inquiry"
            title="Send Us a Message"
            description="Fill out the form below and we'll get back to you within 24 hours."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection>
              <div className="rounded-[2rem] border border-gray-100 bg-cream p-8 md:p-10 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <FiCheck className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-3">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your inquiry has been sent via WhatsApp. We&apos;ll respond
                      as soon as possible. Looking forward to capturing your
                      special moments!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Your phone number"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.eventDate}
                          onChange={(e) =>
                            setFormData({ ...formData, eventDate: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Event Type *
                        </label>
                        <select
                          required
                          value={formData.eventType}
                          onChange={(e) =>
                            setFormData({ ...formData, eventType: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal"
                        >
                          <option value="">Select event type</option>
                          <option value="Wedding">Wedding</option>
                          <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                          <option value="Engagement">Engagement</option>
                          <option value="Reception">Reception</option>
                          <option value="Haldi Ceremony">Haldi Ceremony</option>
                          <option value="Mehendi Ceremony">Mehendi Ceremony</option>
                          <option value="Sangeet">Sangeet</option>
                          <option value="Baby Shoot">Baby Shoot</option>
                          <option value="Birthday Party">Birthday Party</option>
                          <option value="Housewarming">Housewarming</option>
                          <option value="Corporate Event">Corporate Event</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Event Location
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData({ ...formData, location: e.target.value })
                          }
                          placeholder="City, State"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal mb-2">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-charcoal"
                        >
                          <option value="">Select budget range</option>
                          <option value="Under 25,000">Under 25,000</option>
                          <option value="25,000 - 50,000">25,000 - 50,000</option>
                          <option value="50,000 - 1,00,000">50,000 - 1,00,000</option>
                          <option value="1,00,000 - 2,00,000">1,00,000 - 2,00,000</option>
                          <option value="Above 2,00,000">Above 2,00,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your celebration..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none text-charcoal"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 bg-gold hover:bg-gold-dark text-white py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
                    >
                      <FiSend className="w-5 h-5" />
                      Send Inquiry via WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map + Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[2rem] border border-gray-100 shadow-sm h-[320px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.8!2d84.0!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c11a7a9a9a9a7%3A0x0!2sBillumada%2C+Bhamini%2C+Srikakulam!5e0!3m2!1sen!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gowri Wedding Photography Location"
                  />
                </div>

                <div className="rounded-[2rem] border border-gray-100 bg-cream p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-charcoal mb-6">
                    Visit Our Studio
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center text-white shrink-0">
                        <FiMapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Address</p>
                        <p className="text-gray-600 text-sm">{SITE_CONFIG.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center text-white shrink-0">
                        <FiClock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Working Hours</p>
                        <p className="text-gray-600 text-sm">
                          Mon - Sat: 9:00 AM - 8:00 PM
                        </p>
                        <p className="text-gray-600 text-sm">
                          Sunday: By appointment only
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center text-white shrink-0">
                        <FiMapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal">Service Areas</p>
                        <p className="text-gray-600 text-sm">
                          {SITE_CONFIG.serviceAreas.join(" | ")} | Destination Events
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-charcoal hover:bg-dark text-white py-4 rounded-xl font-semibold transition-all"
                  >
                    <FiPhone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi! I'd like to book a photography session.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition-all"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
