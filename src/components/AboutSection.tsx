
import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { AnimatePresence, motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

const AboutSection = () => {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
    "https://images.unsplash.com/photo-1554902843-260acd0993f8",
    "https://images.unsplash.com/photo-1573164574572-cb89e39749b4",
    "https://images.unsplash.com/photo-1622675363311-3e1904dc1885"
  ];

  // Create autoplay plugin with options
  const autoplayPlugin = React.useMemo(
    () => 
      Autoplay({
        delay: 5000, // 5 seconds between slides
        stopOnInteraction: false, // continue autoplay after user interaction
      }),
    []
  );

  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin]}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            <AnimatePresence>
              {backgroundImages.map((image, index) => (
                <CarouselItem key={index} className="h-full basis-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </AnimatePresence>
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-alurion-primary/90 to-alurion-primary/80 backdrop-blur-sm"></div>
      
      {/* Background design elements */}
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-alurion-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-alurion-secondary/10 blur-3xl"></div>
      
      {/* Content container */}
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-white">About Us</h2>
        
        {/* Card with backdrop blur */}
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/10 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
          <p className="text-lg text-white leading-relaxed mb-6">
            We are a female owned team of high-powered executives, with decades of experience leading 
            organizations across a diverse portfolio—from Fortune 5 companies to startups—and navigating 
            high-stakes challenges like M&A, global expansions, and technology transformations. Having 
            walked in the shoes of our clients, we bring a unique, insider perspective to deliver tailored, 
            results-driven talent solutions that directly impact business performance.
          </p>
          <p className="text-lg text-white leading-relaxed">
            We combine the power of technology with the art of human connection to redefine talent 
            strategies. By leveraging AI-driven efficiencies to streamline processes, we create a seamless 
            and data-informed hiring experience while ensuring that every candidate interaction is personal, 
            strategic, and impactful. Our expertise lies in not only identifying top talent but also in engaging, 
            guiding, and closing candidates with a tailored, human-first approach. In a world full of 
            automation, we bring the critical balance of precision and persuasion, ensuring that businesses 
            secure the right talent with both speed and substance.
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full border border-alurion-secondary/30 hidden lg:block"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full border-2 border-alurion-secondary/20 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default AboutSection;
