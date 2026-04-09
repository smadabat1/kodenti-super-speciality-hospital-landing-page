"use client";

import { motion } from "motion/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { format } from "date-fns";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight, CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeader } from "@/components/ui/section-header";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  appointmentSchema,
  type AppointmentFormData,
  departments,
} from "@/lib/schemas/appointment";
import { hospitalInfo } from "@/lib/data/navigation";
import {
  slideInLeft,
  slideInRight,
  fadeUp,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";
import { useState } from "react";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    icon: MapPin,
    label: "Address",
    value: hospitalInfo.address,
  },
  {
    icon: Phone,
    label: "Phone",
    value: hospitalInfo.phone,
    href: `tel:${hospitalInfo.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: hospitalInfo.email,
    href: `mailto:${hospitalInfo.email}`,
  },
  {
    icon: Clock,
    label: "Hours",
    value: hospitalInfo.hours.weekdays,
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
  });

  const onSubmit = async (data: AppointmentFormData) => {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Replace with your Web3Forms access key from https://web3forms.com
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_KEY",
          subject: `Appointment Request — ${data.department}`,
          from_name: data.fullName,
          ...data,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
        toast.success("Appointment request submitted!", {
          description: "We'll contact you within 24 hours.",
        });
        reset();
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-surface/40">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Book an Appointment"
          subtitle="Get in touch with us for expert medical care tailored to your needs"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="space-y-6 mb-10"
            >
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground text-sm hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="rounded-xl overflow-hidden border border-border/50 h-64"
            >
              <iframe
                src={hospitalInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hospital Location"
              />
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="space-y-5"
              >
                <motion.div variants={fadeUp}>
                  <Label htmlFor="fullName" className="text-foreground mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Your full name"
                    className="bg-surface-card/60 border-border/50 focus:border-gold/50 focus:ring-gold/20 text-foreground placeholder:text-muted-foreground/50"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-destructive text-xs mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <div>
                    <Label htmlFor="phone" className="text-foreground mb-2 block">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="bg-surface-card/60 border-border/50 focus:border-gold/50 focus:ring-gold/20 text-foreground placeholder:text-muted-foreground/50"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-surface-card/60 border-border/50 focus:border-gold/50 focus:ring-gold/20 text-foreground placeholder:text-muted-foreground/50"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  {/* Department — shadcn Select */}
                  <div>
                    <Label className="text-foreground mb-2 block">Department</Label>
                    <Controller
                      name="department"
                      control={control}
                      render={({ field }) => (
                        <Select
                          value={field.value ?? ""}
                          onValueChange={(value) => field.onChange(value ?? "")}
                        >
                          <SelectTrigger
                            className={cn(
                              "w-full h-9 bg-surface-card/60 border-border/50 focus:border-gold/50 text-foreground",
                              !field.value && "text-muted-foreground/50"
                            )}
                          >
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            {departments.map((dept) => (
                              <SelectItem key={dept} value={dept}>
                                {dept}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.department && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.department.message}
                      </p>
                    )}
                  </div>

                  {/* Preferred Date — shadcn Calendar in Popover */}
                  <div>
                    <Label className="text-foreground mb-2 block">Preferred Date</Label>
                    <Controller
                      name="preferredDate"
                      control={control}
                      render={({ field }) => {
                        const selected = field.value
                          ? new Date(field.value + "T00:00:00")
                          : undefined;
                        return (
                          <Popover>
                            <PopoverTrigger
                              className={cn(
                                "flex h-9 w-full items-center justify-between rounded-md border border-border/50 bg-surface-card/60 px-3 py-1 text-sm shadow-xs transition-colors hover:border-gold/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/20 focus-visible:border-gold/50",
                                field.value ? "text-foreground" : "text-muted-foreground/50"
                              )}
                            >
                              <span>
                                {selected ? format(selected, "MMM d, yyyy") : "Pick a date"}
                              </span>
                              <CalendarIcon className="h-4 w-4 text-muted-foreground shrink-0" />
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={selected}
                                onSelect={(date) => {
                                  field.onChange(date ? format(date, "yyyy-MM-dd") : "");
                                }}
                                disabled={(date) =>
                                  date < new Date(new Date().setHours(0, 0, 0, 0))
                                }
                              />
                            </PopoverContent>
                          </Popover>
                        );
                      }}
                    />
                    {errors.preferredDate && (
                      <p className="text-destructive text-xs mt-1">
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your concern..."
                    rows={4}
                    className="bg-surface-card/60 border-border/50 focus:border-gold/50 focus:ring-gold/20 text-foreground placeholder:text-muted-foreground/50 resize-none"
                    {...register("message")}
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  {submitted ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="flex items-center justify-center gap-2 py-3 text-green-400"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        Request Submitted!
                      </span>
                    </motion.div>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gold text-primary-foreground font-medium text-base hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300 shadow-lg shadow-gold/20 hover:shadow-gold/40"
                    >
                      {isSubmitting ? "Submitting..." : "Request Appointment"}
                      {!isSubmitting && <ArrowRight size={17} />}
                    </motion.button>
                  )}
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
