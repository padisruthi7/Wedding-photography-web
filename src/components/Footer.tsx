import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-white font-bold text-lg">
                G
              </div>
              <div>
                <h3 className="text-lg font-bold">{SITE_CONFIG.name}</h3>
                <p className="text-gold text-sm">{SITE_CONFIG.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We don&apos;t just capture photos, we preserve emotions. Every smile, every
              tear, every promise — beautifully remembered forever.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://instagram.com/${SITE_CONFIG.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-300"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-all duration-300"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/91${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all duration-300"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Wedding Videography
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Pre-Wedding Shoots
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Cinematic Films
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Drone Coverage
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Baby Shoots
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">
                  Birthday Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  <FiPhone className="w-5 h-5 text-gold shrink-0" />
                  +91 {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  <FiMail className="w-5 h-5 text-gold shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'd like to inquire about your photography services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
              reserved.
            </p>
            <p>
              Serving across {SITE_CONFIG.serviceAreas.join(", ")} &amp; Destination Events
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
