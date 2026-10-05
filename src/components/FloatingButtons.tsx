"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiShare2, FiX, FiCheck } from "react-icons/fi";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingButtons() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);
  const [shareStatus, setShareStatus] = useState<"idle" | "shared" | "copied">("idle");

  useEffect(() => {
    if (popupDismissed) return;
    const timer = setTimeout(() => setShowPopup(true), 8000);
    return () => clearTimeout(timer);
  }, [popupDismissed]);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = "Gowri Wedding Photography";
    const shareText = "Explore Gowri Wedding Photography and view our wedding stories.";

    try {
      if (navigator.share) {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        setShareStatus("shared");
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        setShareStatus("copied");
      } else {
        window.prompt("Copy this link to share:", shareUrl);
      }
    } catch {
      setShareStatus("idle");
    }

    window.setTimeout(() => setShareStatus("idle"), 1800);
  };

  return (
    <>
      {/* Floating Share Button */}
      <motion.button
        onClick={handleShare}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-charcoal hover:bg-gray-800 rounded-full flex items-center justify-center shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Share website"
      >
        {shareStatus === "idle" ? (
          <FiShare2 className="w-6 h-6 text-white" />
        ) : (
          <FiCheck className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'm interested in your wedding photography services. Can we discuss?`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl pulse-gold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaWhatsapp className="w-7 h-7 text-white" />
      </motion.a>

      {/* Floating Call Button */}
      <motion.a
        href={`tel:${SITE_CONFIG.phone}`}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gold hover:bg-gold-dark rounded-full flex items-center justify-center shadow-2xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <FiPhone className="w-6 h-6 text-white" />
      </motion.a>

      {/* Inquiry Popup */}
      <AnimatePresence>
        {showPopup && !popupDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 max-w-sm border border-gold/20"
          >
            <button
              onClick={() => {
                setShowPopup(false);
                setPopupDismissed(true);
              }}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <FiX className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-2xl">📸</span>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Planning a Wedding?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get a free quote for your special day! Our team is ready to capture
                your love story.
              </p>
              <div className="flex gap-2">
                <a
                  href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I'd like a free quote for my wedding photography.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-full text-sm font-semibold transition-all"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white py-2.5 rounded-full text-sm font-semibold transition-all"
                >
                  <FiPhone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Book Now Bar - Mobile */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3"
      >
        <div className="flex gap-2 max-w-lg mx-auto">
          <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-white py-2.5 rounded-full text-sm font-semibold"
          >
            <FiShare2 className="w-4 h-4" />
            Share
          </button>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-white py-2.5 rounded-full text-sm font-semibold"
          >
            <FiPhone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href={`https://wa.me/91${SITE_CONFIG.whatsapp}?text=Hi, I want to book a photography session.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-2.5 rounded-full text-sm font-semibold"
          >
            <FaWhatsapp className="w-4 h-4" />
            Book Now
          </a>
        </div>
      </motion.div>
    </>
  );
}
