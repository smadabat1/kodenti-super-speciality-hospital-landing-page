"use client";

import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { navLinks, hospitalInfo } from "@/lib/data/navigation";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border/50">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Branding */}
          <motion.div variants={fadeUp}>
            <h3 className="font-heading text-2xl font-bold text-gold mb-2">
              KONDETI
            </h3>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4">
              Super Speciality Hospitals
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Dedicated to providing top-quality healthcare with a patient-first
              approach. Where compassion meets world-class medicine.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors duration-300 text-sm relative group inline-block"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp}>
            <h4 className="font-heading text-lg font-semibold text-foreground mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
                <span className="text-muted-foreground text-sm leading-relaxed">
                  {hospitalInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${hospitalInfo.phone}`}
                  className="text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  {hospitalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${hospitalInfo.email}`}
                  className="text-muted-foreground hover:text-gold transition-colors text-sm"
                >
                  {hospitalInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-1 shrink-0" />
                <div className="text-muted-foreground text-sm">
                  <p>{hospitalInfo.hours.weekdays}</p>
                  <p>{hospitalInfo.hours.weekends}</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent my-10 origin-center"
        />

        {/* Copyright */}
        <motion.p
          variants={fadeUp}
          className="text-center text-muted-foreground text-xs"
        >
          &copy; {new Date().getFullYear()} {hospitalInfo.name}. All rights
          reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
}
