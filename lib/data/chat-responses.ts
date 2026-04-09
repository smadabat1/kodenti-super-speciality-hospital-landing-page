export interface ChatFAQ {
  id: string;
  question: string;
  answer: string;
}

export const chatFAQs: ChatFAQ[] = [
  {
    id: "hours",
    question: "What are your hours?",
    answer:
      "Our emergency services are available 24/7. OPD timings are 9:00 AM to 9:00 PM on weekdays and 9:00 AM to 5:00 PM on weekends. Walk-ins are welcome, but appointments are recommended for shorter wait times.",
  },
  {
    id: "appointment",
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by filling out the appointment form on this page, calling us at +91 98765 43210, or visiting our hospital directly. Our staff will help you schedule a convenient time with the right specialist.",
  },
  {
    id: "location",
    question: "Where are you located?",
    answer:
      "We are located at PLOT NO: 132, 133, opposite Jagruthi Women's College, Vivekananda Colony, Tukkuguda, Maheshwaram, Hyderabad, Telangana 501359. We are easily accessible from the ORR and Tukkuguda main road.",
  },
  {
    id: "emergency",
    question: "Emergency contact?",
    answer:
      "For emergencies, please call our 24/7 emergency helpline at +91 98765 43210. Our emergency department is always staffed with experienced doctors and equipped with advanced life-saving equipment. In case of a life-threatening emergency, please call 108 (ambulance) immediately.",
  },
  {
    id: "departments",
    question: "What departments do you have?",
    answer:
      "We offer Gynecology & Infertility, Cardiology, Orthopedics, Neurology, Pediatrics, General Surgery, Emergency Care, and Diabetology. Each department is led by experienced specialists committed to providing the highest standard of care.",
  },
  {
    id: "insurance",
    question: "Do you accept insurance?",
    answer:
      "Yes, we accept most major health insurance providers. Please contact our billing department at the hospital or call us to verify your specific insurance coverage before your visit.",
  },
];

export const defaultResponse =
  "Thank you for your message! For detailed queries, please call us at +91 98765 43210 or fill out the appointment form above. Our team will be happy to assist you.";
