"use client";

import { motion } from "motion/react";
import { Shield, Heart, Award } from "lucide-react";
import { NumberTicker } from "@/components/ui/number-ticker";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

const highlights = [
  {
    icon: Shield,
    text: "Advanced medical technology with state-of-the-art equipment",
  },
  {
    icon: Heart,
    text: "Patient-first approach with compassionate, personalized care",
  },
  {
    icon: Award,
    text: "Experienced specialists across 8+ departments",
  },
];

const stats = [
  { value: 15, suffix: "+", label: "Specialists" },
  { value: 10000, suffix: "+", label: "Patients Treated" },
  { value: 8, suffix: "+", label: "Departments" },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Column */}
          <motion.div variants={slideInLeft}>
            <motion.span
              variants={fadeUp}
              className="text-gold text-sm tracking-widest uppercase font-medium"
            >
              About Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6"
            >
              A Beacon of Trusted Healthcare
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              Kondeti Super Speciality Hospitals has been a beacon of trusted
              healthcare in Hyderabad&apos;s Maheshwaram area. Our
              state-of-the-art facility combines cutting-edge medical technology
              with the warmth and compassion that every patient deserves.
            </motion.p>

            {/* Highlights */}
            <motion.div
              variants={staggerContainer}
              className="space-y-4 mb-10"
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <motion.div
                    initial={{ rotate: -10, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0"
                  >
                    <item.icon className="w-5 h-5 text-gold" />
                  </motion.div>
                  <p className="text-muted-foreground text-sm leading-relaxed pt-2">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading text-2xl md:text-3xl font-bold text-gold">
                    <NumberTicker value={stat.value} />
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hospital Image */}
          <motion.div variants={slideInRight} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold/20 relative">
              <img
                src="/images/hospital-image.png"
                alt="Kondeti Super Speciality Hospital"
                className="w-full h-full object-cover"
              />
              {/* Subtle gold overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-background/30 to-transparent pointer-events-none" />
              {/* Decorative gold corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-2xl" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
