import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
const IndustriesSection = () => {
  const industries = ["Life Sciences & Healthcare", "Technology & AI", "Genetics", "Manufacturing", "Software / SAAS", "Hospitality & Tourism", "Retail", "Journalism", "Professional Services", "Finance", "Sales", "Real Estate", "Consumer Packaged Goods", "Media", "Advertising", "HR Services", "Games", "Insurance"];
  const functions = ["Sales", "Technology", "Product", "Design", "Marketing", "Advertising", "Strategy", "HR", "Finance", "Legal", "Operations", "Clinician", "Real Estate Development", "Commercial", "Communications", "Governance", "Journalism", "Food & Beverage"];
  const [industriesCarouselRef, industriesCarouselApi] = useEmblaCarousel({
    loop: true,
    dragFree: true
  }, [Autoplay({
    delay: 3000,
    stopOnInteraction: false
  })]);
  const [functionsCarouselRef, functionsCarouselApi] = useEmblaCarousel({
    loop: true,
    dragFree: true
  }, [Autoplay({
    delay: 3500,
    stopOnInteraction: false
  })]);
  return <section id="industries" className="section bg-alurion-primary relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80)'
    }}></div>
      <div className="absolute inset-0 bg-alurion-primary/80"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title text-alurion-secondary">Industries & Functions</h2>
        
        <div className="space-y-16">
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-alurion-secondary">Industry Experience</h3>
              <Link to="/industries">
                <Button variant="outline" className="text-alurion-primary border-alurion-secondary bg-alurion-secondary hover:bg-white">
                  View All
                </Button>
              </Link>
            </div>
            <p className="text-gray-200 mb-8 max-w-2xl">
              Within these industries, we are able to prepare your workforce for a change in control, for AI and
              technology enabled systems, as well as transformation of cultural work involved with globalization.
            </p>
            
            <div className="overflow-hidden" ref={industriesCarouselRef}>
              <div className="flex">
                {industries.map((industry, index) => <div key={index} className="min-w-[280px] md:min-w-[320px] px-4 flex-shrink-0">
                    <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
                      <CardContent className="flex flex-col p-6">
                        <div className="mb-4">
                          <Building className="h-8 w-8 text-alurion-secondary" />
                        </div>
                        <h4 className="text-xl font-medium text-white">{industry}</h4>
                      </CardContent>
                    </Card>
                  </div>)}
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-alurion-secondary">Functions We've Recruited For</h3>
              <Link to="/industries">
                <Button variant="outline" className="text-alurion-primary border-alurion-secondary bg-alurion-secondary hover:bg-white">
                  View All
                </Button>
              </Link>
            </div>
            <p className="text-gray-200 mb-8 max-w-2xl">
              Our expertise spans across various functional areas, ensuring we find the right talent for specialized roles.
            </p>
            
            <div className="overflow-hidden" ref={functionsCarouselRef}>
              <div className="flex">
                {functions.map((func, index) => <div key={index} className="min-w-[280px] md:min-w-[320px] px-4 flex-shrink-0">
                    <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
                      <CardContent className="flex flex-col p-6">
                        <div className="mb-4">
                          <Briefcase className="h-8 w-8 text-alurion-secondary" />
                        </div>
                        <h4 className="text-xl font-medium text-white">{func}</h4>
                      </CardContent>
                    </Card>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default IndustriesSection;