import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { allTestimonials } from "../components/TestimonialsSection";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  // State for active category filter (can be expanded with categories if needed)
  const [activeFilter, setActiveFilter] = useState("all");

  // Get featured testimonials
  const featuredTestimonials = allTestimonials.filter(
    (testimonial) => testimonial.featured
  );

  // Filter testimonials based on active filter
  const filteredTestimonials =
    activeFilter === "all"
      ? allTestimonials
      : allTestimonials.filter((t) =>
          t.position.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 md:py-28">
          <div className="container mx-auto max-w-7xl px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16 md:mb-24"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-alurion-primary">
                What Our Clients Say
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover why leading companies trust Alurion Talent Group to
                solve their most challenging talent acquisition needs.
              </p>
            </motion.div>

            {/* Featured testimonials carousel - Apple style */}
            <div className="mb-20">
              <h2 className="text-2xl font-semibold mb-8 text-alurion-primary">
                Featured Testimonials
              </h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {featuredTestimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <TestimonialCard
                        key={`${testimonial.author}-carousel-${index}`}
                        quote={testimonial.quote}
                        author={testimonial.author}
                        position={testimonial.position}
                        company={testimonial.company}
                        image={testimonial.image}
                        delay={0}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0 bg-white" />
                <CarouselNext className="right-0 bg-white" />
              </Carousel>
            </div>

            {/* All testimonials heading - replacing filter buttons */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-alurion-primary text-center">
                All Testimonials
              </h2>
            </div>

            {/* All testimonials in grid - Apple style */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.author}-${index}`}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  image={testimonial.image}
                  delay={(index % 3) * 0.1}
                />
              ))}
            </div>

            {/* Call to action - Apple style */}
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-alurion-primary">
                Ready to work with us?
              </h3>
              <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
                Join the growing list of satisfied clients who've found their
                perfect talent match with Alurion.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-alurion-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
              >
                Contact Us
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Testimonials;
