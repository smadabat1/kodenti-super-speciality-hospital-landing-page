"use client";

import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { NumberTicker } from "@/components/ui/number-ticker";
import { SectionHeader } from "@/components/ui/section-header";
import { HeartPulse, Clock, ShieldCheck } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const stats = [
  { value: 15, suffix: "+", label: "Specialists" },
  { value: 10000, suffix: "+", label: "Patients Treated" },
  { label: "Emergency", display: "24/7" },
  { value: 8, suffix: "+", label: "Departments" },
];

const differentiators = [
  {
    icon: HeartPulse,
    title: "State-of-the-Art Equipment",
    description:
      "Advanced diagnostic and treatment technology ensuring accurate diagnosis and effective treatment for every patient.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Care",
    description:
      "Round-the-clock emergency services with rapid response teams and critical care units always on standby.",
  },
  {
    icon: ShieldCheck,
    title: "Patient-First Philosophy",
    description:
      "Every decision, every treatment plan, and every interaction is guided by what is best for our patients.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-surface/40">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--gold)"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          title="Why Choose Kondeti"
          subtitle="Setting the standard for healthcare excellence in Hyderabad"
        />

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center"
            >
              <div className="font-heading text-3xl md:text-5xl font-bold text-gold mb-2">
                {stat.display ? (
                  stat.display
                ) : (
                  <>
                    <NumberTicker value={stat.value!} />
                    <span>{stat.suffix}</span>
                  </>
                )}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Differentiators */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {differentiators.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(201, 168, 76, 0.1)",
                transition: { duration: 0.3 },
              }}
              className="text-center p-8 rounded-2xl border border-border/60 bg-surface-card/50 hover:border-gold/30 transition-colors duration-500"
            >
              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-5"
              >
                <item.icon className="w-7 h-7 text-gold" />
              </motion.div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
