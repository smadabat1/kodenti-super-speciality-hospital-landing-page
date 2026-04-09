"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/lib/data/testimonials";
import { fadeUp, viewportConfig } from "@/lib/animations";
import { Star } from "lucide-react";

export function Testimonials() {
  const cardItems = testimonials.map((t) => ({
    quote: t.quote,
    name: t.name,
    title: t.treatment,
  }));

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="What Our Patients Say"
          subtitle="Real stories from real patients who trusted us with their health"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <InfiniteMovingCards
            items={cardItems}
            direction="left"
            speed="slow"
            pauseOnHover
            className=""
          />
        </motion.div>

        {/* Star decoration */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex justify-center gap-1 mt-10"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportConfig}
              transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
            >
              <Star className="w-5 h-5 fill-gold text-gold" />
            </motion.div>
          ))}
          <span className="text-muted-foreground text-sm ml-2 self-center">
            Trusted by thousands of families
          </span>
        </motion.div>
      </div>
    </section>
  );
}
