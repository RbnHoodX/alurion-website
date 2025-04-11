import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Briefcase } from 'lucide-react';
import { ScrollArea } from "@/components/ui/scroll-area";
const Industries = () => {
  const industries = ["Life Sciences & Healthcare", "Technology & AI", "Genetics", "Manufacturing", "Software / SAAS", "Hospitality & Tourism", "Retail", "Journalism", "Professional Services", "Finance", "Sales", "Real Estate", "Consumer Packaged Goods", "Media", "Advertising", "HR Services", "Games", "Insurance"];
  const functions = ["Sales", "Technology", "Product", "Design", "Marketing", "Advertising", "Strategy", "HR", "Finance", "Legal", "Operations", "Clinician", "Real Estate Development", "Commercial", "Communications", "Governance", "Journalism", "Food & Beverage"];
  return <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <section className="section bg-alurion-primary relative">
          {/* Hero background image */}
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80)'
        }}></div>
          <div className="absolute inset-0 bg-alurion-primary/70"></div>
          
          <div className="container mx-auto relative z-10">
            <header className="mb-16 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-alurion-secondary">Industries & Functions</h1>
              <p className="text-gray-200 max-w-2xl mx-auto">
                Our expertise spans across multiple industries and functional areas, 
                ensuring we find the right talent for your specialized roles.
              </p>
            </header>
            
            <div className="space-y-24">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-alurion-secondary">Industry Experience</h2>
                
                {/* Image section */}
                <div className="mb-12">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    
                  </div>
                </div>
                
                <p className="text-gray-200 mb-8 max-w-3xl">
                  Within these industries, we are able to prepare your workforce for a change in control, for AI and
                  technology enabled systems, as well as transformation of cultural work involved with globalization.
                </p>
                
                <Carousel opts={{
                align: "start",
                loop: true
              }} className="w-full">
                  <CarouselContent className="-ml-4">
                    {industries.map((industry, index) => <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                        <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
                          <CardContent className="flex flex-col p-6">
                            <div className="mb-4">
                              <Building className="h-8 w-8 text-alurion-secondary" />
                            </div>
                            <h4 className="text-xl font-medium text-white">{industry}</h4>
                          </CardContent>
                        </Card>
                      </CarouselItem>)}
                  </CarouselContent>
                  <div className="flex justify-end gap-2 mt-6">
                    <CarouselPrevious className="relative static -translate-y-0 bg-alurion-secondary text-alurion-primary hover:bg-alurion-secondary/80 hover:text-alurion-primary" />
                    <CarouselNext className="relative static -translate-y-0 bg-alurion-secondary text-alurion-primary hover:bg-alurion-secondary/80 hover:text-alurion-primary" />
                  </div>
                </Carousel>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-8 text-alurion-secondary">Functions We've Recruited For</h2>
                
                {/* Image section */}
                <div className="mb-12">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    
                  </div>
                </div>
                
                <p className="text-gray-200 mb-8 max-w-3xl">
                  Our expertise spans across various functional areas, ensuring we find the right talent for specialized roles
                  that can drive your business forward and help you achieve your strategic goals.
                </p>
                
                <Carousel opts={{
                align: "start",
                loop: true
              }} className="w-full">
                  <CarouselContent className="-ml-4">
                    {functions.map((func, index) => <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                        <Card className="bg-white/10 backdrop-blur-sm border-none h-full">
                          <CardContent className="flex flex-col p-6">
                            <div className="mb-4">
                              <Briefcase className="h-8 w-8 text-alurion-secondary" />
                            </div>
                            <h4 className="text-xl font-medium text-white">{func}</h4>
                          </CardContent>
                        </Card>
                      </CarouselItem>)}
                  </CarouselContent>
                  <div className="flex justify-end gap-2 mt-6">
                    <CarouselPrevious className="relative static -translate-y-0 bg-alurion-secondary text-alurion-primary hover:bg-alurion-secondary/80 hover:text-alurion-primary" />
                    <CarouselNext className="relative static -translate-y-0 bg-alurion-secondary text-alurion-primary hover:bg-alurion-secondary/80 hover:text-alurion-primary" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>;
};
export default Industries;