
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface ValueProps {
  title: string;
  description: string;
  className?: string;
}

const ValueCard = ({ title, description, className }: ValueProps) => {
  return (
    <Card 
      className={cn(
        "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]",
        className
      )}
    >
      <CardContent className="p-8 h-full flex flex-col">
        <h3 className="text-2xl font-medium mb-4 text-alurion-secondary">{title}</h3>
        <p className="text-alurion-secondary/90 text-lg leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

const Values = () => {
  const values = [
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards, delivering exceptional results with precision and purpose. Our commitment to excellence ensures that every connection we make drives meaningful impact and long-term success."
    },
    {
      title: "Integrity",
      description: "Trust is the foundation of everything we do. We act with transparency, honesty, and accountability, fostering relationships built on mutual respect and ethical decision-making."
    },
    {
      title: "Grit",
      description: "Success requires resilience. We embrace challenges with determination and persistence, pushing beyond obstacles to achieve transformative outcomes for our clients and candidates."
    },
    {
      title: "Now",
      description: "Momentum drives success. We act with urgency and precision, ensuring that businesses and talent connect at the right moment to seize opportunities and create lasting impact."
    },
    {
      title: "Curiosity",
      description: "We thrive on discovery. By asking the right questions and challenging conventional thinking, we uncover new possibilities that drive growth, innovation, and strategic advantage."
    },
    {
      title: "Adaptability",
      description: "We embrace change with agility, adjusting strategies to meet evolving business needs and market shifts. By staying ahead of trends, we ensure our solutions remain effective, timely and impactful."
    }
  ];

  return (
    <div className="min-h-screen bg-alurion-primary">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 md:px-8 relative">
          <div className="absolute inset-0 pattern-bg-dark opacity-20"></div>
          <div className="container mx-auto relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-alurion-secondary">Our Values</h1>
            <p className="text-lg md:text-xl text-center max-w-4xl mx-auto text-alurion-secondary/90 mb-16">
              At Alurion Talent Group, our values guide everything we do. They shape our approach to talent acquisition, 
              inform our partnerships, and drive our commitment to excellence.
            </p>
            
            {/* Featured Value Carousel for Mobile */}
            <div className="md:hidden mb-16">
              <Carousel className="w-full">
                <CarouselContent>
                  {values.map((value, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <ValueCard title={value.title} description={value.description} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            
            {/* Values Grid for Desktop */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in" 
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <ValueCard title={value.title} description={value.description} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-8 bg-alurion-primary/80 relative">
          <div className="absolute inset-0 pattern-bg-dark opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-alurion-secondary">Living Our Values</h2>
              <p className="text-lg text-alurion-secondary/90 mb-10 leading-relaxed">
                Our values aren't just words on a page—they're the principles that guide our daily actions and decisions. 
                They shape how we interact with clients, candidates, and each other. They're reflected in the 
                thoughtful approach we take to talent acquisition, the personalized attention we give to every 
                partnership, and the innovative solutions we develop to meet evolving needs.
              </p>
              <p className="text-lg text-alurion-secondary/90 leading-relaxed">
                By living these values every day, we create an environment where exceptional talent can connect 
                with outstanding opportunities, driving success for everyone involved in the process.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Values;
