import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/features";
import { Companies } from "@/components/companies";
import { GridFeatures } from "@/components/grid-features";
import { Testimonials } from "@/components/testimonials";
import { FrederickIntro } from "@/components/frederick-intro";
import { Process } from "@/components/process";
import { CTA } from "@/components/cta";
import { ContactFormGridWithDetails } from "@/components/contact-form-grid";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden ">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col items-center justify-between ">
        <Hero />
        <Companies />
        <div id="services">
          <Features />
        </div>
        <GridFeatures />
        <Testimonials />
        <div id="about" className="relative z-20 w-full">
          <FrederickIntro />
        </div>
        <div id="process">
          <Process />
        </div>
      </Container>
      <div className="relative">
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Background />
        </div>
        <CTA />
      </div>
      <div id="contact" className="relative z-20">
        <ContactFormGridWithDetails />
      </div>
    </div>
  );
}
