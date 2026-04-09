"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";
import { doctors } from "@/lib/data/doctors";
import { slideInLeft, slideInRight, fadeUp, viewportConfig } from "@/lib/animations";

export function Doctors() {
  const slideVariants = [slideInLeft, slideInRight];

  return (
    <section id="doctors" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Meet Our Experts"
          subtitle="Dedicated specialists committed to delivering the highest standard of care"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              variants={slideVariants[i]}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl border border-border/50 bg-surface-card/60 p-8 text-center overflow-hidden hover:border-gold/40 transition-colors duration-500"
            >
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={viewportConfig}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="mx-auto mb-6"
              >
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mx-auto ring-2 ring-gold/30 ring-offset-2 ring-offset-surface-card">
                  <span className="font-heading text-2xl font-bold text-gold">
                    {doctor.initials}
                  </span>
                </div>
              </motion.div>

              {/* Name & Spec */}
              <motion.h3
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="font-heading text-xl font-bold text-gold mb-1"
              >
                {doctor.name}
              </motion.h3>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="text-muted-foreground text-sm mb-4"
              >
                {doctor.specialization}
              </motion.p>

              {/* Qualifications */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {doctor.qualifications.map((q) => (
                  <span
                    key={q}
                    className="text-xs px-2 py-1 rounded-full bg-gold/10 text-gold/80 border border-gold/20"
                  >
                    {q}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {doctor.bio}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gold/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Additional note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center text-muted-foreground mt-10 text-sm"
        >
          & <span className="text-gold font-medium">15+ Specialists</span>{" "}
          across departments dedicated to your well-being
        </motion.p>
      </div>
    </section>
  );
}
