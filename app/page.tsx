import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Doctors } from "@/components/sections/doctors";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/chatbot/chat-widget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
