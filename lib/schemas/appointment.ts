import { z } from "zod";

export const appointmentSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[+]?[\d\s-()]+$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  department: z.string().min(1, "Please select a department"),
  preferredDate: z.string().min(1, "Please select a preferred date"),
  message: z.string().optional(),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;

export const departments = [
  "Gynecology & Infertility",
  "Cardiology",
  "Orthopedics",
  "Neurology",
  "Pediatrics",
  "General Surgery",
  "Emergency Care",
  "Diabetology",
];
