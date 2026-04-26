import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gowri Wedding Photography. Book your wedding photographer today. Call, WhatsApp, or fill out our inquiry form.",
};

export default function ContactPage() {
  return <ContactContent />;
}
