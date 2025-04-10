
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const IndustriesSection = () => {
  const industries = [
    "Life Sciences & Healthcare", 
    "Technology & AI", 
    "Genetics", 
    "Manufacturing", 
    "Software / SAAS",
    "Hospitality & Tourism", 
    "Retail", 
    "Journalism", 
    "Professional Services", 
    "Finance", 
    "Sales", 
    "Real Estate",
    "Consumer Packaged Goods", 
    "Media", 
    "Advertising", 
    "HR Services", 
    "Games", 
    "Insurance"
  ];

  const functions = [
    "Sales", 
    "Technology", 
    "Product", 
    "Design", 
    "Marketing", 
    "Advertising", 
    "Strategy", 
    "HR", 
    "Finance", 
    "Legal",
    "Operations", 
    "Clinician", 
    "Real Estate Development", 
    "Commercial", 
    "Communications", 
    "Governance", 
    "Journalism", 
    "Food & Beverage"
  ];

  // Animation variants for elements
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  return (
    <section id="industries" className="section bg-alurion-primary relative">
      <div className="absolute inset-0 pattern-bg-light opacity-50"></div>
      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2 className="section-title text-alurion-secondary">Industries & Functions</h2>
          
          <div className="space-y-16">
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-alurion-secondary">Industry Experience</h3>
                <Link to="/industries">
                  <Button variant="outline" className="text-alurion-secondary border-alurion-secondary">
                    View All
                  </Button>
                </Link>
              </div>
              <p className="text-gray-200 mb-8 max-w-2xl">
                Within these industries, we are able to prepare your workforce for a change in control, for AI and
                technology enabled systems, as well as transformation of cultural work involved with globalization.
              </p>
              
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {industries.slice(0, 9).map((industry, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <motion.div 
                        custom={index} 
                        variants={cardVariants}
                        viewport={{ once: true }}
                      >
                        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg h-full transform transition-transform duration-300 hover:scale-105">
                          <CardContent className="flex flex-col p-6">
                            <div className="mb-4">
                              <Building className="h-8 w-8 text-alurion-secondary" />
                            </div>
                            <h4 className="text-xl font-medium text-white">{industry}</h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-6">
                  <CarouselPrevious className="relative static -translate-y-0 bg-alurion-secondary text-alurion-primary hover:bg-alurion-secondary/80 hover:text-alurion-primary" />
                  <CarouselNext className="relative static -translate-y-0 bg-alurion-secondary text-alurion-primary hover:bg-alurion-secondary/80 hover:text-alurion-primary" />
                </div>
              </Carousel>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-alurion-secondary">Functions We've Recruited For</h3>
                <Link to="/industries">
                  <Button variant="outline" className="text-alurion-secondary border-alurion-secondary">
                    View All
                  </Button>
                </Link>
              </div>
              <p className="text-gray-200 mb-8 max-w-2xl">
                Our expertise spans across various functional areas, ensuring we find the right talent for specialized roles.
              </p>
              
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {functions.slice(0, 9).map((func, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <motion.div 
                        custom={index} 
                        variants={cardVariants}
                        viewport={{ once: true }}
                      >
                        <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg h-full transform transition-transform duration-300 hover:scale-105">
                          <CardContent className="flex flex-col p-6">
                            <div className="mb-4">
                              <Briefcase className="h-8 w-8 text-alurion-secondary" />
                            </div>
                            <h4 className="text-xl font-medium text-white">{func}</h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-6">
                  <CarouselPrevious className="relative static -translate-y-0 bg-alurion-secondary text-alurion-primary hover:bg-alurion-secondary/80 hover:text-alurion-primary" />
                  <CarouselNext className="relative static -translate-y-0 bg-alurion-secondary text-alurion-primary hover:bg-alurion-secondary/80 hover:text-alurion-primary" />
                </div>
              </Carousel>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
