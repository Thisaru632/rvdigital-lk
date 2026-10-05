"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94775215416?text=Hello%20RV%20INNOVATE%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with RV INNOVATE on WhatsApp"
    >
      <span className="whatsapp-pulse"></span>
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">Chat with us</span>
    </a>
  );
}
