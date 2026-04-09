"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ChevronDown, ArrowRight } from "lucide-react";

export function Hero() {
  const { resolvedTheme } = useTheme();
  // tsparticles can't resolve CSS variables — pass real hex based on theme
  const sparkleColor = resolvedTheme === "light" ? "#96700E" : "#C8A45A";

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Sparkles background — full bleed */}
      <SparklesCore
        background="transparent"
        minSize={0.5}
        maxSize={1.4}
        particleDensity={100}
        particleColor={sparkleColor}
        speed={1.0}
        className="absolute inset-0 w-full h-full"
      />

      {/* Soft vignette — only darkens the very edges, keeps center clear */}
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_50%,var(--background)_100%)]" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-6 pt-24 pb-16"
      >
        {/* Tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-5 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs tracking-[0.25em] uppercase font-medium">
            Excellence in Healthcare
          </span>
        </motion.div>

        {/* Headline */}
        <TextGenerateEffect
          words="Where Compassion Meets World-Class Medicine"
          className="font-heading text-4xl md:text-5xl lg:text-7xl leading-tight"
          duration={0.35}
        />

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed"
        >
          Multi-speciality care you can trust. Hyderabad&apos;s premier
          destination for comprehensive healthcare, led by experienced
          specialists.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          {/* Primary */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScroll("#contact")}
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gold text-primary-foreground font-semibold text-base shadow-lg shadow-gold/25 hover:bg-gold-light hover:shadow-gold/40 transition-all duration-300"
          >
            Book Appointment
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={17} />
            </motion.span>
          </motion.button>

          {/* Secondary */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleScroll("#services")}
            className="flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-gold/40 text-foreground font-medium text-base bg-background/50 backdrop-blur-sm hover:border-gold/70 hover:bg-gold/5 transition-all duration-300"
          >
            Explore Services
          </motion.button>
        </motion.div>

        {/* Trust badges
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3"
        >
          {["15+ Specialists", "8 Departments", "24/7 Emergency", "10,000+ Patients"].map((badge) => (
            <span key={badge} className="flex items-center gap-2 text-muted-foreground text-sm">
              <span className="w-1 h-1 rounded-full bg-gold inline-block" />
              {badge}
            </span>
          ))}
        </motion.div> */}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => handleScroll("#about")}
          className="text-gold/50 hover:text-gold transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} />
        </motion.button>
      </motion.div>
    </section>
  );
}
