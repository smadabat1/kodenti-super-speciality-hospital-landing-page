"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/lib/data/services";
import { scaleIn, staggerContainer, viewportConfig } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-surface/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Our Specialities"
          subtitle="Comprehensive healthcare services across multiple disciplines, delivered by experienced specialists"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={cn(
                "group relative rounded-xl border border-border/60 bg-surface-card/60 p-6 cursor-pointer overflow-hidden transition-colors hover:border-gold/40",
                service.featured && "md:col-span-2 md:row-span-1"
              )}
            >
              {/* Gold border bottom animation on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold to-gold-light"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />

              {/* Icon */}
              <motion.div
                className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-6 h-6 text-gold" />
              </motion.div>

              {/* Content */}
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gold/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
